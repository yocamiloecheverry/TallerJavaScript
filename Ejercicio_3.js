/*Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo que
contenga solo los números pares, y cada número se multiplique por 2. Utiliza la función
filter y la función map.*/

function obtenerParesMultiplicados(numeros) {
    return numeros
      .filter(numero => numero % 2 === 0)
      .map(numero => numero * 2);
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const resultado = obtenerParesMultiplicados([...numeros]);
  
  console.log(`Números pares multiplicados por 2: ${resultado}`);