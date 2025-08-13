const myLibrary = [];

function Book(authorName, title, pages){
    this.id = crypto.randomUUID();
    this.authorName = authorName;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary(authorName, title, pages){
    myLibrary.push(new Book(authorName, title, pages))
}

addBookToLibrary("Paul Mirable", "Le temps de ecureuils", 130);
addBookToLibrary("John dough", "foo foo fa", 146);

function displayBook(array){
    const body = document.body;
    array.forEach(book => {
        const newCard = document.createElement("div");
        newCard.className = "book-card"
        newCard.setAttribute("data-id", book.id)
        newCard.innerText= `${book.title} écrit par ${book.authorName} contient ${book.pages} pages`
        body.appendChild(newCard)
    });
}

displayBook(myLibrary);