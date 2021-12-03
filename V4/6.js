// CONSTRUCT, THE ANSWER ON THE FIRST
function Car(make, model, mileage) {
  this.make = make;
  this.model = model;
  this.mileage = mileage;
}

// VW HAS VALUES make, model, mileage, colors, AND METHOD addColor
var vw = new Car('VW', 'Golf', 500);
Car.prototype.colors = [];
Car.prototype.addColor = function (color) {
  this.colors.push(color);
}
vw.colors = ['white', 'blue'];
vw.addColor('red');

var fiat = new Car('Fiat', '500', 5000);

// your code to add a method getInfo()

Car.prototype.getInfo = function(){
  return `${this.make} ${this.model} has the following colors: ${this.colors.join(", ")}`
}

console.log(vw.getInfo());
console.log(fiat.getInfo());
