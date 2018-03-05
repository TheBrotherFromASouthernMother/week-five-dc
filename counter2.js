function counter(n) {
  var currentCount = n;

  function increaseCount() {
    currentCount ++;
    return currentCount
  }

  return increaseCount;
}

var count1 = counter(4);

console.log(count1())
console.log(count1())
console.log(count1())
