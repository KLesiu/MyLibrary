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

      for (i = 0; i < divHolder.length; i++) {
        if (e.target == divHolder[i]) {
          bookTitle.innerText = myLibraryObj[i].title;
          bookAuthor.innerText = myLibraryObj[i].author;
          bookPages.innerText = myLibraryObj[i].pages;
          book.classList.remove("hidden");
        }
      }
    });
  }
};
