//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
let totalSum = 0
let allAverage = 0
function average(param) {
    for(let i=0; i<= param.length-1; i++){
    totalSum += param[i];

    } 
    allAverage = totalSum/ param.length

}
    average(numbers)
    console.log(allAverage)