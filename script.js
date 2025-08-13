const myLibrary = [];

//Constructeur
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
    const booksHtml = document.getElementById("books");
    booksHtml.innerHTML = ``;
    array.forEach(book => {
        const newCard = document.createElement("div");
        newCard.className = "book-card"
        newCard.setAttribute("data-id", book.id)
        newCard.innerHTML= `<p>${book.title} écrit par ${book.authorName} contient ${book.pages} pages</p>`
        booksHtml.appendChild(newCard)
        addDeleteButton(newCard);
    });
}

//La fonction de callBack pour l'event Listener
function deleteFromLibrary(e){
    const index = myLibrary.findIndex((b) => b.id === e.target.parentNode.getAttribute("data-id"));
    myLibrary.splice(index,1);
    displayBook(myLibrary);
};

//Ajoute le bouton Delete à la card
function addDeleteButton(element){
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Supprimer"
    deleteButton.className = "deleteButton"

    //Event Listener
    deleteButton.addEventListener("click", deleteFromLibrary);
    element.appendChild(deleteButton);
}

//Display initial
displayBook(myLibrary);
