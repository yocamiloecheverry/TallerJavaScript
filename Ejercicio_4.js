/*Dado un arreglo de objetos JSON que representan usuarios, escribe una función que
devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o
más), y para cada usuario se agregue una nueva propiedad "age_in_days" que
represente la edad del usuario en días. Utiliza el spread operator, la función map y filter.*/

function obtenerUsuariosMayores(usuarios) {
    return usuarios
      .filter(usuario => usuario.edad >= 18)  
      .map(usuario => ({
        ...usuario,                           
        age_in_days: usuario.edad * 365       
      }));
  }
  
  const usuarios = [
    { nombre: 'Carlos', edad: 20 },
    { nombre: 'Juana', edad: 17 },
    { nombre: 'Oliver', edad: 25 },
    { nombre: 'Katherine', edad: 30 }
  ];
  
  const resultado = obtenerUsuariosMayores([...usuarios]);
  
  console.log(resultado);