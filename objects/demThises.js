class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }
  addfriend(friend) {
    this.friends.push(friend)
  }

  createGreeting(other) {
    return "Yo " + other.name + "! From " + this.name + ".";
  }

  greet(other) {
    console.log(this.createGreeting(other))
  }
}

Person.prototype.lazyGreet = function(other) {
  var thisName = this.name;
  var otherName = other.name;
  setTimeout(function () {
    console.log("Yo " + otherName + "! From " + thisName + ".")
  }, 2000)
}

Person.prototype.createGreetingForFriends = function() {
  personName = this.name
  greetings = this.friends.map(function(friend) {
    return "Yo " + friend.name + "! From " + personName + "."
  })
  return greetings
}

okoye = new Person("Okoye");
seviwe = new Person("Seviwe");

okoye.addfriend(seviwe)

console.log(okoye.createGreetingForFriends())
okoye.lazyGreet(seviwe)
