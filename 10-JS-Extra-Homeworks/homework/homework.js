// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let result = Object.entries(objeto);
  return result;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  obj = {};
  for (let i = 0; i < string.length; i++){
    let el = string[i];
    let contador = 0;
    for (let j = 0; j < string.length; j++){
      if (string[j] === el){
        contador = contador + 1
      }        
    }
    obj[el] = contador
  }
  return obj    
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mays = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let mins = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let arrMays = [];
  let arrMin = [];  
  let newS = ''
  /*Llena el arreglo de las mayusculas*/
  for (let i = 0; i < s.length; i++){
    let unCap = false;
    for (let j = 0; j < mays.length; j++){
      if (s[i] === mays[j]) {
        arrMays.push(s[i])        
      } 
    }        
  }
  /* Llena el arreglo de las minusculas */
  for (let i = 0; i < s.length; i++){
    for (let j = 0; j < mins.length; j++){
      if (s[i] === mins[j]) {
        arrMin.push(s[i])        
      } 
    }        
  }
  let strMays = arrMays.join('').toString();
  let strMin = arrMin.join('').toString();
  newS = strMays + strMin
  return newS
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let newStr = str.split(' ');
  let newStrInvertido = [];
  for (let i = 0; i < newStr.length; i++){
    let palabra = newStr[i].split('').reverse().join('');
    newStrInvertido.push(palabra)
  }
  strEspejo = newStrInvertido.join(" ");
  return strEspejo
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroInverso = Number(numero.toString().split('').reverse().join(''));    
  if (numeroInverso === numero){
    return "Es capicua"
  } else {
    return "No es capicua"
  }
  
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí  
  let cadenaArray = [];
  for (let i = 0; i < cadena.length; i++){
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      cadenaArray.push(cadena[i]);
    }    
  }
  let cadenaModificada = cadenaArray.join("");
  if (cadena === cadenaModificada){
    return cadena
  }else {
    return cadenaModificada
  }  
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let lngArr = arr.length;
  let temp = "";
  for (let i = 0; i < lngArr; i++){
    for (let j = i + 1; j < lngArr; j++){
      if (arr[i].length > arr[j].length){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  let interseccion = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        interseccion.push(arreglo2[j]);
      }
    }
  }
  return interseccion;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
