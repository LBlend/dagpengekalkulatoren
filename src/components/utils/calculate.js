export const WORKDAYSPERYEAR = 260;
export const BASERATE = 106399; // 2021 base rate. 106 399 NOK
export const MAXIMUMBENEFITS = BASERATE * 6;

// Sums all values in a given object
export const totalIncome = (incomeObject) => {
  return Object.values(incomeObject).reduce((x, y) => x + y);
};

export const benefits = (year1Income, totalIncome) => {
  if (!year1Income) {
    return 0;
  }
  if (totalIncome <= BASERATE * 3 && year1Income <= BASERATE * 1.5) {
    return 0;
  }

  const benefits = Math.max(year1Income, totalIncome / 3);
  return benefits < MAXIMUMBENEFITS ? benefits : MAXIMUMBENEFITS;
};

export const benefitsPerDay = (benefits) => {
  return Math.ceil(benefits / WORKDAYSPERYEAR);
};
