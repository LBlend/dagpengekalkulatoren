import React, { useState } from "react";
import styles from "./form.module.css";

import * as calculate from "./utils/calculate";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [dailyPayout, setDailyPayout] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on submit
    const income = {
      year1: e.target.year1.valueAsNumber,
      year2: e.target.year2.valueAsNumber,
      year3: e.target.year3.valueAsNumber,
    };

    let totalIncome = calculate.totalIncome(income);
    let benefits = calculate.benefits(income.year1, totalIncome);

    let dailyBenefits = calculate.benefitsPerDay(benefits);
    setDailyPayout(dailyBenefits);

    setSubmitted(true);
  };

  const message = () => {
    if (dailyPayout) {
      return (
        <p>
          Du er kvalifisert for dagpenger!
          <br />
          Du kan få <span className={styles.payout}>{dailyPayout} kr</span> om
          dagen
        </p>
      );
    }
    return (
      <p>
        Du er dessverre ikke kvalifisert for dagpenger
        <br />
        <span className={styles.sad}>:(</span>
      </p>
    );
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmit(e)}
        onChange={() => setSubmitted(false)}
      >
        <input
          name="year1"
          placeholder="Inntekt i fjor"
          type="number"
          min="0"
          required="required"
        />
        <input
          name="year2"
          placeholder="Inntekt for 2 år siden"
          type="number"
          min="0"
          required="required"
        />
        <input
          name="year3"
          placeholder="Inntekt for 3 år siden"
          type="number"
          min="0"
          required="required"
        />
        <input type="submit" value="Beregn" />
      </form>

      <div className={styles.resultContainer}>{submitted && message()}</div>
    </div>
  );
};

export default Form;
