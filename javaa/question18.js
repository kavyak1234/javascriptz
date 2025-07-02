const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter(function(num) {
  return num % 2 !== 0;
});
console.log(oddNumbers);