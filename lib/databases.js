import React, { useState } from 'react';

import { firestore } from './firebase';
import {
  formatDateFromDashesToInt,
  getUnitsFromIntDate,
} from '../lib/dateFormatting/dateFormatting';

export const addNewRecordToDB = async (
  typeOfForm,
  userId,
  form,
  isConfirmation = false
) => {
  let isSuccess = {};
  const { date, record } = form;
  const formatedDate = formatDateFromDashesToInt(date);
  const formatedRecord = parseFloat(parseFloat(record).toFixed(2));
  const unitsFromDate = getUnitsFromIntDate(formatedDate);

  if (typeOfForm.toLowerCase() === 'balance') {
    try {
      const docRef = await firestore
        .collection(`users/${userId}/year/${unitsFromDate.year}/month`)
        .doc(unitsFromDate.month)
        .get();
      if (docRef.exists) {
        // If there already is a registered balance in the specified date
        if (!isConfirmation) {
          const { balance } = docRef.data();
          isSuccess = { isSuccess: false, amount: balance };
          // Return a message showing the data that is already logged and ask if want to push new one
        } else {
          // The func is being called again with arg isConfirmation to true to push the data
          await firestore
            .collection(`users/${userId}/year/${unitsFromDate.year}/month`)
            .doc(unitsFromDate.month)
            .set({ balance: formatedRecord });
          isSuccess = { isSuccess: true };
        }
      } else {
        await firestore
          .collection(`users/${userId}/year/${unitsFromDate.year}/month`)
          .doc(unitsFromDate.month)
          .set({ balance: formatedRecord });
        isSuccess = { isSuccess: true };
      }
    } catch (err) {
      console.log(err);
    }
  }
  if (typeOfForm.toLowerCase() === 'savings') {
    try {
      const today = new Date();
      const { typeOfMovement, typeOfSaving, amount, isRecurrent } = form;
      const statsRef = await firestore
        .collection(`users/${userId}/--stats--`)
        .get();
      const statsDocs = statsRef.docs;
      const lastAmountSavings = parseInt(statsDocs[0].data().amount);
      const newAmount =
        typeOfMovement.toLowerCase() === 'add'
          ? lastAmountSavings + parseInt(amount)
          : lastAmountSavings - parseInt(amount);

      await firestore
        .collection(`users/${userId}/--stats--`)
        .doc('savings')
        .set({ amount: newAmount });

      await firestore
        .collection(`users/${userId}/year/${unitsFromDate.year}/month`)
        .doc(unitsFromDate.month)
        .set(
          {
            savings: {
              [`${today}`]: {
                typeOfMovement,
                amount: parseInt(amount),
              },
            },
          },
          { merge: true }
        );
      isSuccess = { isSuccess: true };
    } catch (err) {
      console.log(err);
    }
  }

  return isSuccess;
};

export const extractMonthDataFromDB = async (userId, dataToExtract) => {
  let formatedData = [];
  const userRef = await firestore
    .collection('users')
    .doc(userId)
    .collection('year')
    .get();
  const userDocs = userRef.docs;
  userDocs.forEach(async (doc) => {
    const year = doc.id;
    const yearRef = await firestore
      .collection(`users/${userId}/year/${year}/month`)
      .get();
    const yearDocs = yearRef.docs;

    if (dataToExtract.toLowerCase() === 'balance') {
      let yearData = {};
      yearDocs.forEach((doc) => {
        const { balance } = doc.data();
        if (balance) {
          yearData[doc.id] = balance;
        }
      });

      formatedData.push({ [`${year}`]: yearData });
    }

    if (dataToExtract.toLowerCase() === 'savings') {
      let yearData = {};
      yearDocs.forEach((doc) => {
        const { saving } = doc.data();
        if (saving) {
          yearData[doc.id] = saving;
        }
      });
      formatedData.push({ [`${year}`]: yearData });
    }
  });

  return formatedData;
};
