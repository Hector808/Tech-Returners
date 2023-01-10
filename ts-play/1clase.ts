
class rectangulo  { 
public base : number ;
public altura: number ;


constructor(base:number,altura:number) {
    this.base   = base;
    this.altura = altura;
}

printCalculo():number{
    return this.base*this.altura;
}
}

let clase:rectangulo = new rectangulo(2,3);
console.log(clase.printCalculo());

