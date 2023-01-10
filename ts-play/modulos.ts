// cualquier fichero que tenga un import o export (o ambos)es un modulo
// los modulos se ejecutan dentro de su propio ambito y no en el ambito global,esto quiere decier 
// que todo lo declarado en un modulo no es visible fuera de este modulo a menos que se exporte 
// explicitamente 


    // Variable
export const PI = 3.14;

    // Interface
 export interface Person{
    id: number;
    name: string; 
 }   

    // Funciones
export function generateRandomNumber(): number {
    return math.floor(math.random()*100);
}


//tambien se podria exportar todo en una sola fila 

export {PI,Person, generateRandomNumber}


//*********************************************************************************** */

// Y para poder consumir esto desde otra pagina se debe hacer lo siguiente:

import {PI} from './mymodulos';  // (la ruta de donde esta el modulo)
import {PI as myPI} from './mymodulos';  // lo trae con el nombre original y lo cambia a myPI
import * as myCode from './node_modules' // importa todo lo que esta en ese fichero y le cambia 
//                                          el nombre a myCode 

const User: myCode.Person={
    id:1,
    name: 'Hector'
}


console.log(PI);
console.log(mycode.PI);

console.log(User);

console.log(generateRandomNumber());
console.log(myCode.generateRandomNumber());