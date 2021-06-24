import { createSelector } from 'reselect';

export const selectDatabases = (state) => state.databases;

export const selectBalances = createSelector([selectDatabases], (db) => {
  let formatedBalanceData = [];
  db.balanceData.map((data) => {
    const year = Object.keys(data);
    const values = Object.values(data);
    values.map((val, idx) => {
      const date = Object.keys(val);
      const value = Object.values(val);

      for (let i = 0; i < date.length; i++) {
        formatedBalanceData.push({
          date: `${date[i]}/${year}`,
          value: value[i],
        });
      }
    });
  });
  return formatedBalanceData;
});

export const selectBalancesForGraph = createSelector(
  [selectDatabases],
  (db) => {
    let formatedBalanceData = [];
    let formatedDataForGraph = [
      {
        id: 'Balance',
        color: 'hsl(222, 230%, 50%)',
        data: formatedBalanceData,
      },
    ];

    db.balanceData.map((data) => {
      const year = Object.keys(data);
      const values = Object.values(data);
      values.map((val, idx) => {
        const date = Object.keys(val);
        const value = Object.values(val);

        for (let i = 0; i < date.length; i++) {
          formatedBalanceData.push({
            x: `${date[i]}/${year}`,
            y: value[i],
          });
        }
      });
    });
    return formatedDataForGraph;
  }
);
export const selectDiffWithLastBalance = createSelector(
  [selectBalances],
  (balances) => {
    if (balances.length > 2) {
      const length = balances.length;
      const lastBalance = balances[length - 1].value;
      const previousBalance = balances[length - 2].value;

      const isTrendUp = lastBalance > previousBalance;
      const amount = Math.abs(previousBalance - lastBalance);

      return { isTrendUp, amount };
    } else {
      return { isTrendUp: true, amount: 0 };
    }
  }
);

// Can i create a function to reuse for all the other tab ?
// Create saving tabs
