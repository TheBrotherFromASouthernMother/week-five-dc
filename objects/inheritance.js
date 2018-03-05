var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

mom.showInfo = function() {
    console.log(Object.values(this))
}

Object.setPrototypeOf(daughter, mom)

console.dir(daughter)

mom.showInfo()
daughter.showInfo()
