//**Iteración #5: Calcular promedio de strings**

//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {
    let valor = 0
    for(let i=0; i<= param.length-1; i++){
        if(typeof param[i] === 'number'){
            valor +=param[i]
        }
        if(typeof param[i] === 'string'){
   
            valor += param[i].length
        }
    }
    return valor
}
const result = averageWord(mixedElements)
console.log(result)
