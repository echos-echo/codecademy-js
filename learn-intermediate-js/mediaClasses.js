// unit: classes
// create an extendable superclass and its subclasses

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    getAverageRating() {
      let sum = this._ratings.reduce((prev, curr) => {
        return prev + curr;
      });
      return sum / this._ratings.length;
    }
  
    addRating(rating) {
      if (rating >= 1 && rating <= 5) {
        this._ratings.push(rating);
      } else {
        console.log('Please enter a valid rating from 1-5');
      }
    }
  
    toggleCheckOutStatus() {
      if (this._isCheckedOut == false) {
        this._isCheckedOut = true;
      } else if (this._isCheckedOut == true) {
        this._isCheckedOut = false;
      }
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runtime) {
      super(title);
      this._director = director;
      this._runtime = runtime;
    }
  
    get director() {
      return this._director;
    }
    get runtime() {
      return this._runtime;
    }
  }
  
  class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(6);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  