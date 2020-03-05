const ko = require("knockout");

const vw = function() {
  const self = this;

  this.fuel = ko.observable(0);
  this.speed = ko.observable(0);
  this.money = ko.observable(0);
  this.moneyPS = ko.observable(0);

  this.clickFuel = function() {
    this.fuel(this.fuel() + 1);
  };

  this.clickSpeed = function() {
    this.speed(this.fuel() / 100);
    this.moneyPS(this.speed() / 2);
    this.fuel(0);
  };

  this.earnMoney = function() {
    console.log(self.money());
    self.money(self.money() + self.moneyPS());
  };

  setInterval(self.earnMoney, 1000);
};

ko.applyBindings(new vw());
