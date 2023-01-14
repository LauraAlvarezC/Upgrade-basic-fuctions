//**Iteración #6: Valores únicos**
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  let duplicados = [];

  for (let i = 0; i <= param.length - 1; i++) {
    for (let j = 0; j <= param.length - 1; j++) {
      if (param[i] === param[j] && param.indexOf(param[i]) !== i) {
        duplicados.push(param[i]);
      }
    }
  }

  return duplicados;
}

const result = removeDuplicates(duplicates);
console.log(result);
