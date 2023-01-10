
function sumar(valor1: number | string, valor2: number | string ): number | string  {
   
  if (typeof valor1 ==='number' && typeof valor2 ==='number')
      return valor1+valor2;
    else 
      return valor1.toString() + valor2.toString();
  }
  
  console.log(sumar(4, 5));
  console.log(sumar('Hector ', 2));
  console.log(sumar('Hector ', 'Rojas'));
