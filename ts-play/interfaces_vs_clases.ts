// --> Interface = Solo existe en tiempo de ejecucion
//                 Solo se usan para la validacion de tipos
//                 Es una definicion de contrato de codigo(es basicamente lo que se va a recibir y enviar)
//                 Definen la forma de la data con la que se va a trabajar
//                 Es como un molde


// --> Clases = Existen en tiempo de compilacion y durante el tiempo de ejecucion
//              Podemos inicializar propiedades e implementar metodos
//              Crea instancias de dichas clases




//****************************************************************************************** */
//Interface
interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string; // --> tiene un signo de interrogacion por que coAuthor es opcional
    isLoan?: (id: number) => void //Este es un metodo, con un argumento que es Id y no devuelve nada (void)
}

const book: Book = {
 id: 1, 
 title : 'My title', 
 author: 'Hector'
};

const books: Book []= [];

function getBook(){
    return {id: 1, title: 'My titule', author: 'David'}
}

const myBook = getBook();


function createBook(book: Book): Book{
    return book;
}

const newBook: Book = {
    id: 1, 
    title: 'My titule', 
    author: 'Hector'
}



interface Person{
    id: number;
    name: string;
}


interface Employee extends Person{
    dept: string;
}

interface Customer extends Person{
    country: string;
}

const emp: Employee = {}
    emp.name


//*********************************************************************************************** */
// CLASES

class Employee { // --> Todas las clases tienen atributos y metodos. toda clase tiene un metodo 
                 // que se llama constructor y este es el primer metodo que se ejecuta cuandola clase 
                 // es instanciada o
   
    //Atributos --> variables
    id: number;
    name: string;
    dept: string;
    
    constructor(id: number, name: string, dept: string){
        this.id= id;
        this.name= name;
        this.dept= dept;
        this.showInfo(); 
    }


    // Metodos --> Acciones que se llevan acabo
    showInfo(): void {
    console.log(`${this.name} ${this.dept}`);
    // --> para acceder al atributo (o metodo segun el caso) "name" 
    //de la clase se utiliza la palabra "this"
    }
    


class Person {
    public zone = 'Caribean';
    protected city = 'Santo Domingo';
    private country = 'R.D'

    constructor() {}

    greet(): void {
        console.log('Hello!!!');
    }
}


}
