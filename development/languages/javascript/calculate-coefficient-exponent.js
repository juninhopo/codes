const fee = 0.5;

const calculateEquation = (coefficient, exponent) =>
  coefficient * Math.pow(10, exponent) * 100 - fee;

const findSolution = () => {
  let lowerBoundCoefficient = 0;
  let upperBoundCoefficient = 1000;

  let epsilon = 0.1;

  let mid, midValue;

  while (upperBoundCoefficient - lowerBoundCoefficient > epsilon) {
    mid = (lowerBoundCoefficient + upperBoundCoefficient) / 2;
    midValue = calculateEquation(mid, exponent);

    if (midValue > 0) {
      upperBoundCoefficient = mid;
    } else {
      lowerBoundCoefficient = mid;
    }
  }

  return mid;
};

const exponent = -4;

const coefficient = findSolution();

console.log("Coefficient:", coefficient);
console.log("Exponent:", exponent);
