const example1 = [1, 2, 3, 4, 5];
const example2 = [3, 1, 2, 5, 3];
const example3 = [1, 300, 2, 200, 1];
const example4 = [3, 6, 20, 99, 10, 15];

function getMedian(data) {
  const sortedArr = data.sort((a, b) => a - b);
  const length = sortedArr.length;

  // odd
  if (isOdd(length)) {
    return sortedArr[Math.floor((sortedArr.length - 1) / 2)];
  }

  // even
  return sortedArr.slice(((length - 1) / 2), ((length - 1) / 2) + 2).reduce((val, acc) => val + acc, 0) / 2;

}

function isOdd(num) {
  return num % 2 === 1;
}

module.exports = {
  getMedian,
  isOdd,
  example1,
  example2,
  example3,
  example4
}
