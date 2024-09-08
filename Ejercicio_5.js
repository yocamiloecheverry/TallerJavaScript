/*Dado un arreglo de objetos JSON que representan productos, escribe una función que
devuelva un nuevo arreglo que contenga solo los productos que tengan un precio mayor
a $80000 y una cantidad inferior a 100, luego a cada producto se debe agregar una
nueva propiedad "product_tax_value" que represente el precio con el impuesto del 19% y una propiedad “product_total_value” de valor más el impuesto calculado. Utiliza el
spread operator, la función map y filter.*/

function obtenerProductosFiltrados(productos) {
    return productos
      .filter(producto => producto.precio > 80000 && producto.stock < 100)  
      .map(producto => {
        const product_tax_value = producto.precio * 0.19;  
        const product_total_value = producto.precio + product_tax_value;  
        return {
          ...producto,                     
          product_tax_value,               
          product_total_value              
        };
      });
  }
  
  const productos = [
    { id_product:1, nombre: 'Camiseta', precio: 50000, stock: 89 },
    { id_product:2, nombre: 'Pantalón', precio: 90000, stock: 44 },
    { id_product:3, nombre: 'Chaqueta', precio: 160000, stock: 23 },
    { id_product:4, nombre: 'Correa', precio: 80000, stock: 104 },
  ];
  
  const resultado = obtenerProductosFiltrados([...productos]);
  
  console.log(resultado);