module.exports = function main(strNum) {
  // Write your code here
  let result = 0;
  for (let str of strNum) {
	result += parseInt(str);
  }
  return result;
};
