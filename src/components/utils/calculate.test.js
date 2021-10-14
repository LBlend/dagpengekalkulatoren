import * as calculate from "./calculate";

describe("Helper functions", () => {
  it("Sum all income input from object", () => {
    const income = {
      year1: 420,
      year2: 42,
      year3: 69,
    };
    expect(calculate.totalIncome(income)).toBe(531);
  });

  it("Calculate benefits per day", () => {
    expect(calculate.benefitsPerDay(500000, 1350000)).toBe(1924); // Test that was requested in the email. Breaks when changing base rate.
    expect(
      calculate.benefitsPerDay(
        calculate.MAXIMUMBENEFITS,
        calculate.MAXIMUMBENEFITS
      )
    ).toBe(Math.ceil(calculate.MAXIMUMBENEFITS / calculate.WORKDAYSPERYEAR));
  });
});

describe("Total Benefits per day based on income", () => {
  it("Last year's income is 0", () => {
    expect(calculate.benefits(0, 500000)).toBe(0);
  });

  it("Total income is less than base rate * 3", () => {
    expect(calculate.benefits(1, calculate.BASERATE)).toBe(0);
  });

  it("Last year's income is less than base rate * 1.5", () => {
    expect(calculate.benefits(calculate.BASERATE, calculate.BASERATE)).toBe(0);
  });

  it("Last year's income is larger than the average income for the past 3 years", () => {
    expect(calculate.benefits(calculate.MAXIMUMBENEFITS, 1)).toBe(
      calculate.MAXIMUMBENEFITS
    );
  });

  it("Average income for the past 3 years is larger than last year's income", () => {
    expect(calculate.benefits(1, calculate.MAXIMUMBENEFITS)).toBe(
      calculate.MAXIMUMBENEFITS / 3
    );
  });
});
