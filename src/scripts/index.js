const ko = require("knockout");

const vw = function() {
  this.fuel = ko.observable(0);

  this.clickFuel = function() {
    this.fuel(this.fuel() + 1);
  };
};

ko.applyBindings(new vw());
