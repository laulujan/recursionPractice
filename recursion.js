// Escribe una función que reciba como parámetro un número n y
// regrese el factorial de ese número de manera recursiva;

// Ejemplo:

// const factor = factorial( 5 );

// factor = 120

function factorial(n){
    if(n>0){
        return -1;
    }
    else if(n == 0){
        return 1;
    }
    else{
        return(n*factorial(n -1));
    }
}

//factorial con while

function recursividad(n){
    let f = 1;
    while(n > 0){
        f += f * n;
        --n;
    }
    return f;

}
console.log(recursividad(4));


// Ejercicio - Escalera Recursiva:

// Escribe una función que reciba como parámetros una cadena s
// y un número n y imprima de manera recursiva la cadena en
// forma de escalera.

// Ejemplo:

// recursiveStair( “Hola!!”, 0 );

// // H

// // ol

// // a!!

function recursiveStair(cadena, index){
   if(index > cadena.length){
       if(cadena.length != 0){
           console.log(cadena);
       }
       return;
   }else{
       console.log(cadena.substring(0, index++));
       cadena = cadena.slice(index, cadena.length);
       recursiveStair(cadena, index);
   }
}

let cadena = "Hola!!";
console.log(recursiveStair(cadena, 0));


function recursiveStair(cadena, index, newCadena){
    if(index > cadena.length){
        if(cadena.length !== 0){
            newCadena.push(cadena);
        }
        return newCadena;
    }else{
        newCadena.push(cadena.substring(0, ++index));
        cadena = cadena.slice(index, cadena.length);
        return recursiveStair(cadena, index, newCadena);
    }
 }
 
 let cadena = "Hola!!";
 console.log(recursiveStair(cadena, 0, []));

// Ejercicio - Módulo Recursivo:

// Escribe una función que reciba como parámetros dos números
// n1 y n2 y regrese el módulo de la operación n1/n2, si usar
// las operaciones % y /.

// Ejemplo:

// const modulo = recursiveModulo( 10, 3 );

// // modulo = 1;

function recursiveModule(n1, n2){
    if( n1 < n2){
        return n1
    }else{
        return recursiveModule(n1-n2, n2);
    }
}

console.log(recursiveModule(10, 3));

// Ejercicio - Valor Máximo Recursivo:

// Escribe una función que reciba como parámetros un arreglo de
// números a[] y dos números n1 y n2 y regrese el valor máximo
// dentro del arreglo sin usar ciclos.

// Ejemplo:

// const max = maxValue([1,5,20,6,9],0,0 );

// // max = 20;

function maxValue(arr, index, max){
    if(index >=arr.length){
        return max;
    }if(max < arr[index]){
        max= arr[index];
    }
    return maxValue(arr, index +1, max)
}

console.log(maxValue([1,5,20,6,9],0,0));

//MEDIA Y MODA
// Escribe una función que reciba como parámetros un arreglo de números a[] regrese la media y moda de esos valores.
// const data = calc([1,5,20,6,9,20,10,50,2,5,5]);
// data.moda = 5; data.media = 9; 

const data = [1,5,20,6,9,20,10,50,2,5,5];
function average(data, index, sum){
    sum += data[index];

    if (index === data.length-1){
        return sum
    } else {
      return average(data, index+1, sum);
    }
}

console.log(average(data, 0, 0));

//media
let arr = [1,5,20,6,9,20,10,50,2,5,5];
let middle = Math.floor(arr.length/2)
function media(arr, index){
  if(index == middle-1){
    return arr[index];
  }
  return media(arr, index+1);
}

console.log(media(arr,0));

//moda

function moda(data,index, mode, maxNumber){
    if (typeof mode[data[index]] == 'undefined') {
        mode[data[index]] = 1;
    } else {
        mode[data[index]] = mode[data[index]]+1;   
    }

    if (mode[data[index]] > data[maxNumber]) {
      maxNumber = data[index]
    }
    if (index == 0) {
        return maxNumber
    } else {
        return moda(data, index-1, mode, maxNumber)
    }
}

var arr = [1,2,3,4,5,6,700,10,10,7,8]
console.log(moda(arr, arr.length-1, {}, 0))