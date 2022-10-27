/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, buget) {
    this.title = title;
    this.director = director;
    this.buget = buget;
    this.wasExpensive = function () {
      if (this.buget > 100e6) {
        return true;
      } else {
        return false;
      }
    };
  }
}

const movieInfo = new Movie("Terminator", "James Cameron", 68000000);

console.log(movieInfo);
console.log(movieInfo.wasExpensive());
