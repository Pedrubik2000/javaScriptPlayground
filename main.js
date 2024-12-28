#!/usr/bin/env node
function printConstructorName(object) {
  return `${object} is a ${object.constructor.name}`;
}

function Hero(name, level) {
  this.name = name;
  this.level = level;
  this.greet = function() {
    return `Hi, my name is ${this.name} and my level is ${this.level}`;
  };
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

let protagonist = new Hero("Naruto", 100);
console.log(protagonist)
printConstructorName(protagonist)
protagonist.greet()

let warrior = new Warrior("Guts", 200, "Big Sword");
console.log(warrior);
printConstructorName(warrior);
warrior.greet();

let animal = {
  eats: true,
  walk() {
    return ("Animal walk");
  }
};
let rabbit = {
  jump: true
};

// rabbit prototypically inherits from animal
Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eats);
console.log(rabbit.jump);

rabbit.walk();

console.log(Object.keys(rabbit));
for (let prop in rabbit) console.log(prop);

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}

animal = {
  jumps: null
}
rabbit = {
  jumps: true
}

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
delete animal.jumps;
console.log(rabbit.jumps);

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

Object.setPrototypeOf(table, head);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(pockets, bed);
console.log(pockets.pen);
console.log(bed.glasses);
let start1 = performance.now() * 1e6;
console.log(pockets.glasses);
let end1 = performance.now() * 1e6;
let start2 = performance.now() * 1e6;
console.log(head.glasses);
let end2 = performance.now() * 1e6;
console.log(end1 - start1);
console.log(end2 - start2);
// head.glasses is faster than pockets.glasses

animal = {
  eat() {
    this.full = true;
  }
};

rabbit = {
};

Object.setPrototypeOf(rabbit, animal);
rabbit.eat();
rabbit.full;
animal.full;

let hamster = {
  eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  }
};

let speedy = {
};

let lazy = {
};
Object.setPrototypeOf(speedy, hamster);
Object.setPrototypeOf(lazy, hamster);

speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);
