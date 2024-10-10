// FRONT-END DEVELOPMENT
// Build a Library
// Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

// But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with
//three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

// Book
// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// Movie
// Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// CD
// Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// If you’re looking for a challenge, try to create the four classes without using the steps below.

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

//Parent Class Media
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

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    if (this._ratings.length === 0) return 0;

    let sumOfRatings = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return sumOfRatings / this._ratings.length;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
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
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
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

//tests
//create book instance 
const historyOfEverything = new Book(
  "Bill Bryson",
  "A short History of Nearly Everything",
  544
);

//Toggle checkout status twice (initially set to false)
historyOfEverything.toggleCheckOutStatus(); //output true
historyOfEverything.toggleCheckOutStatus(); //output false

//Add ratings
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//log rating
console.log(
  `Average rating for this book is ${historyOfEverything.getAverageRating()}`
);

//log book instance (showss all properties of book)
console.log(historyOfEverything);
