
function counter(n) {
  var count = n
    function add() {
      return function () {
        count ++;
        return count;
      }
    }

   function sub () {
      function subtractFrom() {
        count --;
        return count;
      }
      return subtractFrom;
    }

    var obj = {
      increment: add(),
      decrement: sub()
    };

    return obj
}


var counting = counter(4);

console.log(counting.increment())
console.log(counting.increment())
console.log(counting.increment())
console.log(counting.increment())
console.log(counting.decrement())
console.log(counting.decrement())
