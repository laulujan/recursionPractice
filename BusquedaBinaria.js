// Escribe una función que reciba como parámetros un número y
// un arreglo ordenado de números y regrese el índice del
// número buscado o un -1 si el numero no esta en el arreglo,
// utilizando la búsqueda binaria.

const index = binarySearch([1, 2, 3, 5, 9, 20],  5);

function binarySearch(array, num){
    let limMin = 0;
    let limMax = array.length -1;

    for( let i =limMin; i <= limMax; i++){
        let middle = Math.floor(limMax/2);
        if( num == middle){
            return middle[i];
        }else if(num >= middle){
            limMin=middle;
            middle = Math.floor(limMax - LimMin)/2;



        }
    }

   

}

//
const binarySearch = (array, num) => {
    let limMin = 0;
    let limMax = array.length - 1;
    while(limMin <= limMax) {
      let middle = Math.floor((limMin + limMax) / 2);
      let guess = array[middle];

      if(guess === num) {
        return middle;
      }
      if(guess > num) {
        limMax = middle - 1
      }
      else{
        limMin = middle + 1;
      }
    }
    
    return -1;

}

const index = binarySearch([1,2,3,4,5], 3);
console.log(index);

//BUSQUEDA BINARIA RECURSIVA

function recursiveBinarySearch(array, item){
    let min = 0;
    let max = array.length - 1;

    const recursive = (min, max) => {
        if(min > max){
            return -1;
        }
    
    let middle = Math.floor((min + max)/2);
    let guess = array[middle];
    if(guess==item){
        return middle;
    }
    if(guess > item){
        return recursive(min, middle -1);
    }
    return recursive(middle +1, max);
    }
    return recursive(min, max);
}
const index = recursiveBinarySearch([1,2,3,4,5], 3);
console.log(index);