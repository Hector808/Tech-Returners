// Type assetion --> si no sabemos el tipo de un valor que se recibe, 
//se puede convertir al valor que necesitemnos, por ejemplo en este caso se pasa a un string 

let channel: any = "Hectorcode";



let channelStr = channel as string;//(as string, conerte el valor a que nos llega aun string)

//let channelStr = <string>channel; // (idem arriba)


//Ejemplo de HTML
//const myCanvas = document.getElementById('main') as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById('main');


