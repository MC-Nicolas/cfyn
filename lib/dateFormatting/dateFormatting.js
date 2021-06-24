export const formatDateFromSlashesToReversedInt = (date) => {
  // Accept date like: DD/MM/YYYY

  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);

  // Return date like: YYYYMMDD

  const YYYYMMDD = `${year}${month}${day}`;
  return YYYYMMDD;
};

export const formatDateFromSlashesToInvertedDashes = (date) => {
  // Accept date like: DD/MM/YYYY

  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);

  // Return date like: YYYY-MM-DD

  const YYYYMMDD = `${year}-${month}-${day}`;
  return YYYYMMDD;
};

export const formatDateFromInt = (date) => {
  // Accept date like YYYYMMDD

  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  // Return date like DD/MM/YYYY
  const formatedDate = `${day}/${month}/${year}`;
  return formatedDate;
};

export const formatDateFromDashesToInt = (date) => {
  // Accept date like YYYY-MM-DD

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  // Return date like DD/MM/YYYY
  const formatedDate = `${year}${month}${day}`;
  return formatedDate;
};
export const getUnitsFromIntDate = (date) => {
  // Accept date like YYYYMMDD

  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  const unitsFromYear = { year, month, day };
  return unitsFromYear;
};
