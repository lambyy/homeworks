'use strict'

let titleize = (nameArray, callback) => {
  let titles = nameArray.map ((name) => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titles);
};

let printCallback = (titleArray) => {
  titleArray.forEach ((title) => console.log(title));
};

titleize(["Mary", "Brian", "Leo"], printCallback);

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRR!!!!!'`);
};
Elephant.prototype.grow = function () { this.height += 12; }
Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};
Elephant.prototype.play = function () {
  let trick = Math.floor(Math.random() * this.tricks.length);
  return `${this.name} is ${this.tricks[trick]} `
}

let sam = new Elephant('Sam', 144, ['painting a picture', 'taking a bath', 'being silly']);

console.log(sam.name);
console.log(sam.height);
console.log(sam.tricks);
sam.trumpet();
sam.grow();
console.log(sam.height);
sam.addTrick('tickling me');
console.log(sam.tricks)
console.log(sam.play());

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah, sam]

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`)
};

// Elephant.paradeHelper(ellie);

herd.forEach (Elephant.paradeHelper);

let dinerBreakfast = function () {
  let order = "I'd like scrambled eggs and bacon please.";
  console.log(order);

  return function(food) {
    order =  `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};

let bfastOrder = dinerBreakfast();
bfastOrder('blueberry french toast');
bfastOrder('strawberry waffles');
