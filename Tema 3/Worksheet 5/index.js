/* Ejercicio 1
class Cat {
    constructor(nombre, tiredness = 0, hunger = 10, loneliness = 10, happiness = 0) {
      this.nombre = nombre;
      this.tiredness = tiredness;
      this.hunger = hunger;
      this.loneliness = loneliness;
      this.happiness = happiness;
    }
    normalizeValue(val) {
        if (val < 0) {
            return 0;
        }
        if (val > 10) {
            return 10;
        }
        if (this.happiness <= 0){
            noPet()
        }
    return val;
    }
    play(val = 1) {
      this.loneliness = this.normalizeValue(this.loneliness - val);
      this.happiness = this.normalizeValue(this.happiness + val);
    }
    feed(val = 1) {
      this.hunger = this.normalizeValue(this.hunger - val);
    }
    pet(val = 1) {
      this.loneliness = this.normalizeValue(this.loneliness - val);
    }
    sleep(val = 1) {
      this.tiredness = this.normalizeValue(this.tiredness - val);
    }
    noPet(val = 1){
        this.happiness = this.normalizeValue(this.happiness - val);
        console.log("El gato no quiere mimos");
    }
    getStatus() {
      return {
        cansado: this.tiredness > 5,
        hambriento: this.hunger > 5,
        solo: this.loneliness > 5,
        feliz: this.happiness > 5
      }
    }
    toString() {
      const status = this.getStatus();
 
      return Object.keys(status).map(k => {
        const state = status[k] ? "está" : "no está";
        if (this.tiredness && this.hunger && this.loneliness && this.happiness >= 10){
            const state = status[k] ? "está MUY" : "no está";
        }
        return `${this.nombre} ${state} ${k}`;
      }).join(". ") + ".";
    }
  }
 
  const paws = new Cat("Gato de pruebas");
  paws.play(16);
  paws.feed(18);
  console.log(paws.toString());

*/
// Ejercicio 2
class BookList {
    #secretList = [];
    #password = null;
    constructor() {
      this._allBooks = [];
      this._nextBook = null;
      this._currentBook = null;
      this._lastBook = null;
    }
  
    add(book) {
      this._allBooks.push(book);
    }
  
    setCurrent(book) {
      if (this._currentBook === book)
        console.log(
          `Estás leyendo ${book._title} desde ${book._startReadDate}`
        );
      else if (this._currentBook)
        console.log(
          `No puedes añadir este libro como libro actual mientras lees ${this._currentBook._title}`
        );
      else {
        book._startReadDate = new Date(Date.now());
        this._currentBook = book;
        console.log(`Acabas de empezar a leer ${book._title}`);
      }
    }
    get currentBook() {
      return this._currentBook
        ? console.log(`Estás leyendo: ${this._currentBook._title}`)
        : console.log("No estás leyendo ningún libro actualmente");
    }
    get lastBook() {
      if (!this._lastBook) console.log("No has leido ningún libro últimamente")
      else return console.log(`El último libro que leíste fue: ${this._lastBook._title}. Lo acabaste el ${this._lastBook._endReadDate}`);
    }
    
    get booksToRead() {
      return this._allBooks.length
    }
  
    get booksRead() {
      return this._allBooks.filter((b) => b._read)
    }
  
    finishCurrentBook() {
      if (!this._currentBook)
        console.log("No estás leyendo ningún libro actualmente");
      else {
        const calculateElapsedTime = (start, end) => {
          const diff = end - start;
          return Math.round((diff/1000)/60);
        };
  
        this._currentBook._read = true;
        this._currentBook._endReadDate = new Date(Date.now());
        this._lastBook = this._currentBook;
        const cb = this._currentBook;
        this._currentBook = null;
        const askForNext = prompt(
          `Has acabado de leer correctamente ${
            cb._title
          }Felicidades! has tardado ${calculateElapsedTime(
            cb._startReadDate,
            cb._endReadDate
          )} minutos!\n\nAhora, Te gustaría buscar tu siguiente libro? Di "si" o "no"`
        );
        if (askForNext === "si" || askForNext === "s") {
          const booksLeft = this._allBooks.filter((b) => !b._read)
          if (!booksLeft.length) alert('Ups, ya has leido todos los libros disponibles')
          else {
            let question = "Guay! Que lirbo te gustaría leer después? Sigues pudiendo leer: \n"
            booksLeft.forEach((b, i) => question += `\n - ${b._title} - enter ${i} \n`)
            const askWhich = prompt(question)
            this.setCurrent(booksLeft[parseInt(askWhich, 10)])
          }
        } else {
          console.log("Ok, tómate tu tiempo para escoger tu próximo libro :)")
        }
      }
    }
  
    recommendBook() {
      const randomBook = (max) => Math.floor(Math.random() * max);
      if (!this._allBooks.length)
        console.log("Tu librería está vacía, no puedo recomendar nada...");
      else if (!this._allBooks.filter((b) => !b._read))
        console.log("Has leido todos los libros de tu lista, ¿por que no escoges uno nuevo?");
      else {
        const booksLeft = this._allBooks.filter(
          (b) => !b._read && this._currentBook !== b
        );
        const randomSelectedBook = booksLeft[randomBook(booksLeft.length)];
        console.log(
          `Te recomiendo ${randomSelectedBook._title} escrito por ${randomSelectedBook._author} ? Parece un buen libro de ${randomSelectedBook._genre}`
        );
      }
    }
    addSecret(book) {
        if (!this.#password) {
          alert("NEfcesitas escribir una contraseña para tu lista de libros secreta...");
          const isPasswordSet = this.setPassword();
          if (isPasswordSet)
            alert("Has añadido el libro a tu lista secreta");
        }
        this.#secretList.push(book);
      }
    
      setPassword() {
        const askForNewPw = () => {
          const newPw = prompt("Ingresa una contraseña nueva");
          if (!newPw) {
            alert("Necesitas introducir una contraseña");
            return false;
          } else {
            this.#password = newPw;
            alert("Contraseña registrada correcamente");
            return true;
          }
        };
        if (!this.#password) {
          return askForNewPw();
        } else {
          const oldPw = prompt("Ingresa tu contraseña anterior");
          if (oldPw === this.#password) {
            return askForNewPw();
          } else alert("Sorry, tus contraseñas no coinciden");
        }
      }
    
      get secretList() {
        const pw = prompt(
          "Introduce la contraseña de tu lista secreta para acceder"
        );
        if (!pw || !this.#password || pw !== this.#password)
          alert("No puedes acceder a estos datos privados");
        else return this.#secretList;
      }
    }
    
    class Book extends BookList {
      constructor(title, genre, author) {
        super();
        this._title = title;
        this._genre = genre;
        this._author = author;
        this._read = false;
        this._startReadDate = null;
        this._endReadDate = null;
      }
    }
    
    const myLibrary = new BookList();
    
    const foundation = new Book("Fundación", "Ciencia-Ficción", "Isaac Asimov");
    const sapiens = new Book(
      "Sapiens: Una breve historia de la humanidad",
      "Realista",
      "Yuval Noah Harari"
    );
    const autumn = new Book(
      "El otoño del patriarcado",
      "Realismo Mágico",
      "Gabriel García Márquez"
    );
    const endgame = new Book("Endgame", "Play", "Samuel Beckett");
    const road = new Book("On the Road", "Novela", "Jack Kerouac");
    const sisyphus = new Book("The Myth of Sisyphus", "Ensayo", "Albert Camus");
    
    const booksHeld = [foundation, sapiens, autumn, endgame, road, sisyphus];
    booksHeld.map((b) => myLibrary.add(b));
