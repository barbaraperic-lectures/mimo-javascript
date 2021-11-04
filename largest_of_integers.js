const number = [240, 45, 8439, 1432];

function largestOfIntegers(numbers) {
  let largest = numbers[0]

  for(var i = 0; i < number.length; i++) {
    if (largest < number[i]) {
      largest = number[i]
    }
  }
  return largest
}

console.log(largestOfIntegers(number));