// function Library(tittle, author, pages, readed) {
//   this.tittle = tittle;
//   this.author = author;
//   this.pages = pages;
//   this.readed = readed;
//   this.info = function () {
//     console.log(`${tittle} by ${author},${pages}pages,${readed}`);
//   };
// }
// const theHobbit = new Library("theHobbit", "J.R.R. Tolkien", "295", "readed");
// theHobbit.info();
const booksContainer = document.querySelector(".container");
let myLibrary = [
  "The Lord of the Rings",
  "The Hobbit",
  "Star Wars",
  "Harry Potter",
  "Green book",
  "The Da Vinci Code",
];

function Book() {}
function addBookToLibrary() {
  for (i = 0; i < myLibrary.length; i++) {
    let holder;
    holder = document.createElement("div");
    holder.classList.add("holder");
    booksContainer.appendChild(holder);
    holder.innerHTML += `${myLibrary[i]}`;
  }
}
addBookToLibrary();
