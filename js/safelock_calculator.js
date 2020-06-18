//duration in days

const safeLockInterestCalc = function (duration, amount) {
  let interestPA; //interest per annum
  let interestPD; //interest per day

  if (duration >= 10 && duration <= 30) {
    interestPA = 6 / 100; //convert percentage to decimal
    interestPD = interestPA / 365; //calculate daily interest rate
  } else if (duration >= 31 && duration <= 60) {
    interestPA = 8 / 100;
    interestPD = interestPA / 365;
  } else if (duration >= 61 && duration <= 90) {
    interestPA = 10 / 100;
    interestPD = interestPA / 365;
  } else if (duration >= 91 && duration <= 730) {
    interestPA = 13 / 100;
    interestPD = interestPA / 365;
  } else if (duration > 730) {
    interestPA = 31 / 100;
    interestPD = interestPA / 365;
  }

  const totalInterest = interestPD * duration * amount; //multiply interest rate per day with total number of days in duration and amount to get total interest
  const totalAmount = totalInterest + amount; //add total  interest obtained with amount safelocked

  const results = {
    interestObtained: totalInterest,
    totalAmountReturned: totalAmount,
  };

  return results;
};

//const r = safeLockInterestCalc(100, 5000000);
//console.log(r);

module.exports = safeLockInterestCalc;
