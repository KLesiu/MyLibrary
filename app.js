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
const buttonForm = document.querySelector(".accept__form");
const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const readFormYes = document.querySelector("#r1");
const readFormNo = document.querySelector("#r2");
const openForm = document.querySelector(".open__form");
const containerForm = document.querySelector(".container__form");
const closeForm = document.querySelector(".close__form");
const buttonBook = document.querySelector(".close__book");
const book = document.querySelector(".book");

let myLibrary = [];
let myLibraryObj = [];

function addBookToLibrary() {
  let holder;
  holder = document.createElement("div");
  holder.classList.add("holder");
  booksContainer.appendChild(holder);
  for (i = 0; i < myLibrary.length; i++) {
    holder.innerHTML = `${myLibrary[i]}`;
  }
}

const checkForm = () => {
  if (
    titleForm.value !== "" &&
    authorForm.value !== "" &&
    pagesForm.value !== ""
  ) {
    containerForm.classList.add("hidden");

    myLibrary.push(titleForm.value);
    myLibraryObj.push({
      title: titleForm.value,
      author: authorForm.value,
      pages: pagesForm.value,
    });
    addBookToLibrary();
    showBook();
  } else {
    alert("You must complete all sections to add a book");
  }
};

// AddEventListeners
openForm.addEventListener("click", () => {
  containerForm.classList.remove("hidden");
  titleForm.value = "";
  authorForm.value = "";
  pagesForm.value = "";
});
closeForm.addEventListener("click", () => {
  containerForm.classList.add("hidden");
});
buttonForm.addEventListener("click", checkForm);
buttonBook.addEventListener("click", () => {
  book.classList.add("hidden");
});

// Functions start
const showBook = () => {
  const divHolder = document.querySelectorAll(".holder");
  for (i = 0; i < divHolder.length; i++) {
    divHolder[i].addEventListener("click", function (e) {
      this.classList.add("active");
      console.log(e.target);
      // e.target = myLibraryObj[i - 1].title;
      const bookTitle = document.querySelector(".page");
      const bookAuthor = document.querySelector(".author__p");
      const bookPages = document.querySelector(".page__p");
      if (e.target == divHolder[0]) {
        bookTitle.innerText = myLibraryObj[0].title;
        bookAuthor.innerText = myLibraryObj[0].author;
        bookPages.innerText = myLibraryObj[0].pages;
      } else if (e.target == divHolder[1]) {
        bookTitle.innerText = myLibraryObj[1].title;
        bookAuthor.innerText = myLibraryObj[1].author;
        bookPages.innerText = myLibraryObj[1].pages;
      }
      book.classList.remove("hidden");
    });
  }
};
