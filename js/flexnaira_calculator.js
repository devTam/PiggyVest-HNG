//duration should be in days
const flexNairaInterestCalc = function (amount, duration) {
  let interetPA = 10 / 100; //interest per annum
  let interestPD = interetPA / 365; //interest per day

  const interestObtained = interestPD * duration * amount; //calculate total interest accruing to user account for duration given
  const totalAmountWithInterest = interestObtained + amount; //calcualte total amount (interest plus original amount)

  const results = {
    totalInterestObtained: interestObtained,
    totalMoneyReturned: totalAmountWithInterest,
  };

  return results;
};

//const r = flexNairaInterestCalc(100000, 100);
//console.log(r);

module.exports = flexNairaInterestCalc;
