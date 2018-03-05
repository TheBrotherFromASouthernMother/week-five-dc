function counter() {
  var currentCount = 0;

  function increaseCount() {
    currentCount ++;
    return currentCount
  }

  return increaseCount;
}

var count1 = counter();

console.log(count1())
console.log(count1())
console.log(count1())
console.log(count1())
console.log(count1())
console.log(count1())
