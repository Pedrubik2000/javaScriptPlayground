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
