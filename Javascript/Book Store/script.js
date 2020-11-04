class Book {
  constructor(title, author, publication, price) {
    this.title = title;
    this.author = author;
    this.publication = publication;
    this.price = price;
  }
}

class Operations {
  addBook(book) {
    let tableBody = document.querySelector("#tableBody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.publication}</td>
    <td>${book.price}</td>
    <td><i class = "fas fa-trash secondary-icon delete"></i></td>`;
    tableBody.appendChild(tr);
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#form");

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  removeBook(target) {
    if (target.classList.contains("delete")) {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    const bookTitle = document.querySelector("#title");
    const bookAuthor = document.querySelector("#author");
    const bookPublicationName = document.querySelector("#publication");
    const bookPrice = document.querySelector("#price");

    bookTitle.value = "";
    bookAuthor.value = "";
    bookPublicationName.value = "";
    bookPrice.value = "";
  }
}

document.querySelector("#form").addEventListener("submit", function (e) {
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPublicationName = document.querySelector("#publication").value;
  const bookPrice = document.querySelector("#price").value;

  console.log(bookTitle.value, bookAuthor.value);

  const book = new Book(bookTitle, bookAuthor, bookPublicationName, bookPrice);
  const operations = new Operations();

  if (
    bookTitle.value === "" ||
    bookAuthor.value === "" ||
    bookPublicationName.value === "" ||
    bookPrice.value === ""
  ) {
    operations.showAlert("Please Fill all the fields", "error");
  } else {
    operations.addBook(book);
    operations.showAlert("Book Added", "success");
    operations.clearFields();
    e.preventDefault();
  }
});

//Removing Book
tableBody.addEventListener("click", function (e) {
  const operations = new Operations();
  operations.removeBook(e.target);
  operations.showAlert("Book Removed", "success");
  e.preventDefault();
});
