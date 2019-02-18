'use strict';

function Store(name, minCust, maxCust, aveCookSale, newUl) {
  this.hours = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
  ];
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookSale = aveCookSale;
  this.cookiePerHour = [];
  this.cookiesold = 0;
  this.newUl = newUl;
  // this method generates a random number between and containing min max properties
  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  // method called renderOut containing for loop that calculates cookies per hour and cookies sold// runs 15 times
  this.renderOut = function() {
    for(var i = 0; i < this.hours.length; i++) {
      // declared variable that now stores the random number
      var randomCustomer = this.randomCust();
      //the cookieSold property set at 0 is now holding the product of 6.3 * the random number which equals an estimated figure of cookies that would be sold
      this.cookieSold = Math.floor(this.aveCookSale * randomCustomer);
      // cookiePerHour is being updated with the calulation above so now cookiePerHour equals the product above
      this.cookiePerHour.push(this.cookieSold);
      // a var is being create that stores a method to create a new list item node
      var newEl = document.createElement('li');
      // this variable assigns the new li node a string that says 6am: 235 cookies with .textContent property
      newEl.textContent = `${this.hours[i]}: ${this.cookiePerHour[i]} cookies`;
      // newUl is now the new location by id in which to add the string as its child in this case as a list item
      this.newUl.appendChild(newEl); 
    };
    // using reduce method to sum all cookie in cookiePerHour array
    const total = this.cookiePerHour;
    const sum = total.reduce((total, amount) => total + amount);
    // new variable stores method to create new list item and write string as child to parent ul
    var cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${sum} cookies`;//Enter the name or variable ************************************
    this.newUl.appendChild(cookieTotal);
  }
};
//grabbing element by id name
var pikeUl = document.getElementById('pike1');
var seaUl = document.getElementById('seaTac');
var centUl = document.getElementById('seaCent');
var capUl = document.getElementById('capHill');
var alkUl = document.getElementById('alkiBeach');

//creating new instances of this type of object and passing info to object
var pikeStore = new Store('1st and Pike', 23, 65, 6.3, pikeUl);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2, seaUl);
var seaCentStore = new Store('Seattle Center', 11, 38, 3.7, centUl);
var capHillStore = new Store('Capitol Hill', 20, 38, 2.3, capUl);
var AlkiBStore = new Store('Alki Beach', 2, 16, 4.6, alkUl);

// calls the renderOut method in the pike object
pikeStore.renderOut();
seaTacStore.renderOut();
seaCentStore.renderOut();
capHillStore.renderOut();
AlkiBStore.renderOut();
    
