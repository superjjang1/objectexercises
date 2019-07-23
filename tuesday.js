//inheritance

// function Mom(fname, lname, eyeColor, hairColor){
//   this.fname = Alice;
//   this.lname = Wong;
//   this.eyeColor = Brown;
//   this.hairColor = Black;
// }
// function Daughter(fname, hairColor){
//   Mom.call(this);
//   this.lname = Mom.lname;
//   this.eyeColor = Mom.eyeColor;
  
// }


// var mom = { 
//      firstName: 'Alice', 
//      lastName: 'Wong', 
//      eyeColor: 'brown', 
//      hairColor: 'black',
//   showinfo: function () {
//     console.log(`hi`)
//   }
  
// }; 

// var daughter = { 
//      firstName: 'Ilene', 
//      hairColor: 'brown' 
// };
// daughter.__proto__=mom

// console.log(`${daughter.firstName} ${daughter.lastName}`)

//Given this person type: this thesis and 2
// function Person(name) { 
//     this.name = name; 
//     this.friends = []; 
// } 

// Person.prototype.addFriend = function(friend) { 
//     this.friends.push(friend); 
// }; 

// Person.prototype.createGreeting = function(other) { 
//     return 'Yo ' + other.name + '! from ' + this.name + '.'; 
// };

// Person.prototype.greet = function(other) {
//     console.log(this.createGreeting(other)); 
// };

class Person {
    constructor(name) {
        this.name = name;
        this.friends = [];
    }
    addFriend = (friend) => {
        this.friends.push(friend);
    }
    createGreeting = (other) => {
        return `yo ${other.name}! from ${this.name}!`;
    }
    greet = (other) => {
      console.log(this.createGreeting(other));
    }
    lazyGreet = (other) => {
        setTimeout (()=>{
          this.greet(other)
        } , 5000);
    }
    createGreetingsForFriends() {
      return this.friends.map(friend => this.createGreeting(friend));
      }
}
// aPerson = new Person(`Sean`);
// aPerson.addFriend(`Doofy`);
// console.log(aPerson.friends);
// aPerson.greet(aPerson.friends);
// aPerson.lazyGreet("butt");
var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
console.log(alfie.createGreetingsForFriends(anushka));

