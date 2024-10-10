# Simple Library System

A simple library system written in JavaScript for managing media such as books, movies, and CDs. The system allows users to track check-out status, add ratings, and calculate average ratings for each item.

## Features

- Create instances of books, movies, and CDs.
- Toggle the check-out status of an item.
- Add ratings to an item.
- Calculate the average rating of an item.

## Classes

### 1. `Media`

A parent class for media items. Contains shared properties and methods for all media.

- **Properties**:
  - `title`: The title of the media item.
  - `isCheckedOut`: A boolean indicating if the item is checked out (initially `false`).
  - `ratings`: An array to store user ratings (initially empty).
- **Methods**:
  - `toggleCheckOutStatus()`: Toggles the `isCheckedOut` status.
  - `addRating(rating)`: Adds a rating to the `ratings` array.
  - `getAverageRating()`: Calculates and returns the average rating of the item.

### 2. `Book` (Subclass of `Media`)

Represents a book in the library system.

- **Additional Properties**:
  - `author`: The author of the book.
  - `pages`: Number of pages in the book.

### 3. `Movie` (Subclass of `Media`)

Represents a movie in the library system.

- **Additional Properties**:
  - `director`: The director of the movie.
  - `runTime`: The runtime of the movie (in minutes).

### 4. `CD` (Subclass of `Media`)

Represents a CD in the library system.

- **Additional Properties**:
  - `artist`: The artist of the CD.
  - `songs`: An array of song titles on the CD.

## Usage

### 1. Creating an Instance of a Book

```javascript
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
```
