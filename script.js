const myLibrary = [];

//Constructeur
function Book(authorName, title, pages){
    this.id = crypto.randomUUID();
    this.authorName = authorName;
    this.title = title;
    this.pages = pages;
    this.read = false
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
        const spanRead = document.createElement("span");
        spanRead.innerText = book.read ? "livre déjà lu" : "livre pas encore lu";
        spanRead.className = book.read ? "spanRead" : "spanNotRead";
        newCard.innerHTML= `<p>${book.title} écrit par ${book.authorName} contient ${book.pages} pages </p>`
        const isRead = document.createElement("p");
        newCard.appendChild(spanRead);     
        booksHtml.appendChild(newCard)
        addDeleteButton(newCard);
        addReadButton(newCard, book);
    });
}

function addReadButton(element, book){
    const readButton = document.createElement("button");
    readButton.innerHTML = book.read ? "Je ne l'ai pas lu" : "Je l'ai lu";
    readButton.className = book.read ? "buttonRead" : "buttonNotRead";
    element.appendChild(readButton);
    readButton.addEventListener("click",toggleRead)
}

function toggleRead(e){
    const index = myLibrary.findIndex((b)=> b.id === e.target.parentNode.getAttribute("data-id"));
    console.log(index);
    myLibrary[index].read = !myLibrary[index].read;
    displayBook(myLibrary);
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

const addBook = document.getElementById("addBook");
addBook.addEventListener("click", newBookForm);

function newBookForm(){
    const dialogForm = document.getElementById("form");
    dialogForm.showModal();
}

//pour fermer le dialog
const closeDialog = document.getElementById("closeDialog");
closeDialog.addEventListener("click", closeForm);
function closeForm(){
    const dialogForm = document.getElementById("form");
    dialogForm.close();
}

//Display initial
displayBook(myLibrary);

const a = document.getElementById("submit");
a.addEventListener("click", (e)=>{
    e.preventDefault();
    const author_input = document.getElementById("author_input");
    const title_input = document.getElementById("title_input");
    const pages_input = document.getElementById("pages_input");
    const flag = true;
    //savoir si on continue le process;
    if ( author_input.value.length < 1 || title_input.value.length < 1 ){
        alert("Merci de renseigner Auteur.e et titre");
        flag = false;
    }
    if (flag && isNaN(pages_input.value ) || pages_input.value < 1){
        alert("Merci de renseigner un nombre de pages valides");
        flag = false;
    }
    if( flag){
        addBookToLibrary(author_input.value, title_input.value, pages_input.value);
        displayBook(myLibrary);
        closeForm();
    }

})
