/**
 * Al crear un objeto lista le pasas los libros y se cuentan los libros leidos, sin leer y se meten los leidos en una lista
 * nReadBooks= numero de libros leidos;
 * nNotReadBooks= numero de libros no leidos;
 * readBooks= lista de libros leidos
 * books= lista de libros totales
 */
 class BookList {
    /**
     * 
     * @param {*} books array de libros ya creados
     * si no le pasas nada puedes añadirlos con addBook(libro)
     */
    constructor(books=[]){
        this.books=books;
        this.#readBooks=[]
        this.#countReadBooks();
    }

    /**
     * Asigna el libro que se está leyendo actualmente
     * @param {*} title = Titulo del libro a asignar
     * Si no se pasa un título se asignará el siguiente libro sin leer
     * @returns boolean =true si fue exitoso
     */
    assignCurrentBook(title=""){
        this.books.forEach(book => {
            if(book.title==title){
                this.currentBook=book;
                return true;
            }
        });
        this.books.forEach(book => {
            if(book.read==false){
                this.currentBook=book;
                return true;
            }
        });

    }

    /**
     * Marca un libro como leído
     * @param {*} title 
     * @returns true si lo asignó, false si no encontró el libro
     */
    readBook(title){
        this.books.forEach(book => {
            if(book.title==title){
                book.setRead(true);
                return true;
            }
        });
        return false;
    }

    
    /**
     * Añade un libro a la lista
     * @param {*} book Book (objeto de la clase book)
     */
     addBook(book){
        this.books.push(book);
        if(book.read){
            this.nReadBooks++;
        }else{
            this.nNotReadBooks++;
        }
    }

    getbookList(){
        return this.books;
    }

    setNextBook(book){
        this.nextBook=book;
    }
    getNextBook(){
        return this.nextBook;
    }
    setCurrentBook(book){
        this.currentBook=book;
    }
    getCurrentBook(){
        return this.currentBook;
    }
    setLastBook(book){
        this.lastBook=book;
    }
    getLastBook(){
        return this.lastBook;
    }

    #countReadBooks(){
        this.nReadBooks=0;
        this.nNotReadBooks=0;
        this.books.forEach(book => {
            if(book.read){
                this.#readBooks.push(book);
                this.nReadBooks++;
            }else{                
                this.nNotReadBooks++;
            }
        });
    }

    /**
     * A partir de aquí yo no usaría nada porque ni sé lo que hay <3
     */

    finishCurrentBook(){
        if(this.currentBook){
            this.currentBook.setRead(true)
            this.currentBook.setReadDate(Date.now());
            this.#setLastBook(this.currentBook);
        }
        this.#setCurrentBook(this.nextBook);
        this.#setNextBook(this.#findUnreadBook());
    }
    #findUnreeadBook(){
        this.books.forEach(book => {
            if(!book.read){
                return book;
            }
        });
        return 0;
    }

    isBookInList(myBook){
        this.books.forEach(book => {
            if(myBook==book){
                return true;
            }
        });
        return false;
    }

    showList(){        
        document.write("<table border=2>");
        this.books.forEach(book => {
            document.write("<tr>");            
            document.write("<td>",book.title,"</td>");
            document.write("<td>",book.genre,"</td>");
            document.write("<td>",book.autor,"</td>");
            document.write("<td>",book.read,"</td>");
            document.write("<td>",book.readDate,"</td>");
            document.write("</tr>");
        });
        document.write("</table>");
    }

}

/**
 * Clase libro
 */
class Book {
    /**
     * 
     * @param {*} title 
     * @param {*} genre 
     * @param {*} author 
     * @param {*} read opcional, se setea a false si no se indica
     * @param {*} readDate opcional, se setea a 0 si no se indica
     */
    constructor(title, genre, author, read=false,readDate=0) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate=readDate;
    }

    setReadDate(date){
        this.readDate=date;
    }
    setRead(read){
        this.read=read;
    }

    getTitle(){
        return this.title;
    }

    getGenre(){        
        return this.genre;
    }

    getAuthor(){
        return this.author;
    }

    getRead(){
        return this.read;
    }

    getReadDate(){
        return this.readDate;
    }

}

export{
    BookList,
    Book
} 