import { setLoaderIsVisible, setLoaderText } from './reduxDispatch';
import { addNewRecordToDB } from './databases';
import { setActiveTabFromOutsideRC } from './reduxDispatch';

export const handleAddFormSubmit = async (e, typeOfForm, userId, form) => {
  e.preventDefault();

  setLoaderText('Adding record to the database');
  setLoaderIsVisible(true);

  const addRecordResult = await addNewRecordToDB(typeOfForm, userId, form);
  if (addRecordResult.isSuccess === false) {
    setLoaderText('Waiting for confirmation');
    setTimeout(async () => {
      const userWantsToOverrideData = confirm(
        `We have found a record of ${addRecordResult.amount}€ for the specified date, do you want to erase the data with the new data ? `
      );
      if (userWantsToOverrideData) {
        setLoaderText('Adding record to the database');
        await addNewRecordToDB(typeOfForm, userId, form, true);
        // fetch balance
        setLoaderIsVisible(false);
        setActiveTabFromOutsideRC('balance');
      } else {
        // fetch balance
        setLoaderIsVisible(false);
      }
    }, 200);
  } else {
    setActiveTabFromOutsideRC('balance');
    setLoaderIsVisible(false);
  }
};
