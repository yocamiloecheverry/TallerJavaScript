/*Escribe una función que tome un arreglo de objetos JSON que representan productos, y
devuelva un objeto que contenga la suma de los precios de los productos, la cantidad
total de productos, y el nombre del producto más caro. Utiliza el spread operator, la
función reduce, map y sort para calcular los valores necesarios.*/
// Función para calcular la suma de precios, cantidad total de productos y el producto más caro
function calcularDatos(productos) {
    const { sumaPrecios, cantidadTotal } = productos.reduce(
      (acumulador, producto) => ({
        sumaPrecios: acumulador.sumaPrecios + producto.precio,
        cantidadTotal: acumulador.cantidadTotal + 1,
      }),
      { sumaPrecios: 0, cantidadTotal: 0 }
    );
  
    const productoMasCaro = productos
      .sort((a, b) => b.precio - a.precio)[0].nombre;
  
    return {
      sumaPrecios,
      cantidadTotal,
      productoMasCaro
    };
  }
  
  const productos = [
    { id_product:1, nombre: 'Camiseta', precio: 50000, stock: 89 },
    { id_product:2, nombre: 'Pantalón', precio: 90000, stock: 44 },
    { id_product:3, nombre: 'Chaqueta', precio: 160000, stock: 23 },
    { id_product:4, nombre: 'Correa', precio: 80000, stock: 104 },
  ];
  
  const resultado = calcularDatos([...productos]);
  
  console.log(`Suma de precios: ${resultado.sumaPrecios}`);
  console.log(`Cantidad total de productos: ${resultado.cantidadTotal}`);
  console.log(`Producto más caro: ${resultado.productoMasCaro}`);