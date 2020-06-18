//duation should be in days
const flexDollarCalc = function (amount, duration) {
  let interestPA = 6 / 100; //interes per annum
  let interestPD = interestPA / 365; // interest per day

  const interestObtained = interestPD * duration * amount; //calculate total interest accruing to user account for duration given
  const totalAmountWithInterest = interestObtained + amount; //calcualte total amount (interest plus original amount)

  const results = {
    totalInterestObtained: interestObtained,
    totalMoneyReturned: totalAmountWithInterest,
  };

  return results;
};

module.exports = flexDollarCalc;
