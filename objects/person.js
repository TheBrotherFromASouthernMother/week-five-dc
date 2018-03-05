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


okoye = new Person("Okoye");
seviwe = new Person("Seviwe");

okoye.addfriend(seviwe)

seviwe.greet(okoye)
