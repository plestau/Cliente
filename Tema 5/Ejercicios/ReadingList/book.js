class Book{
    constructor(tit, aut, gen)
    {
        this.title = tit;
        this.genre = gen;
        this.author = aut;
        this.read = false;
        this.readDate = null;
    }
}

class BookList{
    constructor()
    {
        this.books = [];
        this.currentBook = 0;
    }

    add(book)
    {
        this.books.push(book);
    }

    finishCurrentBook()
    {
        if (this.currentBook<this.books.length)
        {
            this.books[this.currentBook].read=true;
            this.books[this.currentBook].readDate = new Date();
            this.currentBook++;

        }

    }

    get numberBooksRead()
    {
        return this.books.filter( (book)=> book.read).length;
    }

    get numberBooksNotReadYet()
    {
        return this.books.length - this.numberBooksRead;
    }

    get totalBooks(){
        return this.books.length;
    }

}


window.onload = function(){
    var myBookList = new BookList();

    document.querySelectorAll("button")[0].addEventListener("click", () =>{   
        titulo = document.getElementById("title").value;
        autor = document.getElementById("author").value;
        genero = document.getElementById("genre").value;
        myBookList.add(new Book(titulo, autor, genero));

        pintarListaLibros(myBookList);
    });


    document.getElementById("readingList").addEventListener("click", () =>{     
        myBookList.finishCurrentBook();
        pintarListaLibros(myBookList);
    }); 
    
}


function pintarListaLibros(lista)
{
    document.getElementById("readingList").innerHTML = "";
    lista.books.forEach( (libro) =>{
            let leido;

            if (!libro.read)
                leido="Not Read";
            else
            {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                leido="Read on " + libro.readDate.toLocaleDateString('en-EN', options);
            }

           //Añadir Libro en interfaz
           bookEntry = `<li class="list-group-item d-flex justify-content-between"><div>
           <h6 class="my-0"><b>${libro.title}</b></h6> <small class="text-muted" contenteditable="true">${libro.author}&nbsp;</small>
           </div> <span class="text-muted">${leido}</span>
           </li>`;
           
              
           document.getElementById("readingList").innerHTML += bookEntry;
           
    })

    document.getElementById("booksRead").innerHTML = lista.numberBooksRead + " of "+ lista.totalBooks;
    
}