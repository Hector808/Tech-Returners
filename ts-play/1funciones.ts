
function greet (name: string = 'Usuario'){
    console.log(`Hello., ${name.toUpperCase()} !!`);

}

greet('Hector')
greet()




function getNumber (): number {
return Math.floor(Math.random()*100);

}

console.log(getNumber())

function  printposition (position: {lat: number, long: number| string}){

    console.log (`latitud & longitud son: LAT ${position.lat} LONG: ${position.long}  `)

}

printposition({lat: 3, long:"Hola"})

