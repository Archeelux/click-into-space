const ko = require("knockout");

const vw = function() {
  this.fuel = ko.observable(0);
  this.speed = ko.observable(0);

  this.clickFuel = function() {
    this.fuel(this.fuel() + 1);
  };

  this.clickSpeed = function() {
    this.speed(this.fuel() / 100);
    this.fuel(0);
  };
};

ko.applyBindings(new vw());
