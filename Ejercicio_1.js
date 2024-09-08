/*Escribe una función que tome un arreglo de objetos JSON que representan productos, y
devuelva la suma de los precios de los productos y la suma total del valor del stock de la
tienda. Utiliza la función reduce y el spread operator para obtener los precios de cada
objeto y sumarlos.*/
function calcularTotales(productos) {
    
    const { precioTotal, stockTotal } = productos.reduce(
      (acumulador, producto) => ({
        precioTotal: acumulador.precioTotal + producto.precio,
        stockTotal: acumulador.stockTotal + (producto.precio * producto.stock)
      }),
      { precioTotal: 0, stockTotal: 0 }
    );
    
    return { precioTotal, stockTotal };
  }
  
  const productos = [
    { id_product:1, nombre: 'Camiseta', precio: 50000, stock: 89 },
    { id_product:2, nombre: 'Pantalón', precio: 90000, stock: 44 },
    { id_product:3, nombre: 'Chaqueta', precio: 160000, stock: 23 },
    { id_product:4, nombre: 'Correa', precio: 80000, stock: 104 },
  ];
  
  const resultado = calcularTotales([...productos]);
  
  console.log(`Suma de precios: ${resultado.precioTotal}`);
  console.log(`Valor total del stock: ${resultado.stockTotal}`); 