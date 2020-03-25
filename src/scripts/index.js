const ko = require("knockout");

const vw = function() {
  const self = this;

  this.fuel = ko.observable(0);
  this.speed = ko.observable(0);
  this.money = ko.observable(0);
  this.moneyPS = ko.observable(0);
  this.autoFuelCost = ko.observable(10);
  this.autoFuelCount = ko.observable(0);
  this.autoFuelPS = ko.observable(0);

  this.clickFuel = function() {
    this.fuel(this.fuel() + 1);
  };

  this.clickSpeed = function() {
    this.speed(this.speed() + this.fuel() / 100);
    this.moneyPS(this.speed() / 2);
    this.fuel(0);
  };

  this.earnMoney = function() {
    self.money(self.money() + self.moneyPS());
  };

  this.autoFuel = function() {
    self.fuel(self.fuel() + self.autoFuelPS());
  };

  this.clickBuyAutoFuelUpgrade = function() {
    this.autoFuelCost(this.autoFuelCost() + 1);
    this.autoFuelCount(this.autoFuelCount() + 1);
    this.autoFuelPS(this.autoFuelCount());
  };

  setInterval(self.earnMoney, 1000);
  setInterval(self.autoFuel, 1000);
};

ko.applyBindings(new vw());
