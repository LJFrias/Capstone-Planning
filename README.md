# Capstone-Planning

Library app--

-Be able to keep track of aall your books in your library
-Be able to keep a list of books you want
-show the bookshelf and shelf a book is on
-goodreads.com
-book finder
-be able to catagorize by genre
-https://rapidapi.com/dfskGT/api/book-finder1/


POST /login- This route will allow the user to login

POST /register- This route will create a new user

GET /books- This route will return an array of objects that returns Id, title, author, publisher

GET /books/:id- This route will return a specific book that returns the books information as well as the genre and bookshelf placement

POST /book- This route will creat a new book in your library and takes in all the details of the book

PUT /book/:id- This route will update a current book and take in the book ID as a parameter

DELETE /book/:id- This route will delete a specific book taking the id as a path parameter.