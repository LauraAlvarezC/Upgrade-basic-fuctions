//Completa la función que tomando un array de strings como argumento devuelva el más largo,
//en caso de que dos strings tenga la misma longitud deverá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let highestValue

function findLongestWord(param) {
  
   for(let i=0; i<= param.length-1 ; i++){
      //console.log(param[i])
      if(highestValue === undefined){
         highestValue = param[i].length
      }
      if(param[i].length > highestValue){ 
         highestValue = param[i].length
      }
      
   }
}
 
findLongestWord(avengers)

console.log(highestValue)

