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
  "The Lord of the Ring",
  "The Hobbit",
  "Star Wars",
  "Harry Potter",
];

function Book() {}
function addBookToLibrary() {
  for (i = 0; i < myLibrary.length; i++) {
    let holder;
    holder = document.createElement("div");
    holder.classList.add("holder");
    booksContainer.appendChild(holder);
    holder.innerHTML += `I read ${myLibrary[i]} `;
  }
}
addBookToLibrary();
