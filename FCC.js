function sumAll(arr) {                                                                           
  const myArr = [...arr];
  const mysecond = [];
  myArr.sort(function(a,b) {
    return a - b;
  });
  for(let i = myArr[0]; i <= myArr[1]; i++ ){
    mysecond.push(i);
  };
  return mysecond.reduce((sum,next) => sum + next);
}

function sumAll(arr) {                                                                          
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

function sumAll(arr) {                                                                             
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {       
        newArr.push(first[i]);
      }
    }
  };

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);




  return newArr;
};

function destroyer(arr) {                                                                                
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}


function whatIsInAName(collection, source) {                                      metod2
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);                                  
  
  // filter the collection
  return collection.filter(obj => {                                                   //делаем фильтр которые пройдется по всей коллекции
    for (let i = 0; i < souceKeys.length; i++) {                                 //внутри фильтра цикл на каждый из ключей 
      if (!obj.hasOwnProperty(souceKeys[i]) ||  
          obj[souceKeys[i]] !== source[souceKeys[i]]) {            //  и если такого ключа не существует в об || и если этот ключ есть но его знач не соответст 
        return false;                                                                    //    возвращаем фолс и фильтр его не виведет 
      }
    }
    return true;                                                                             // тру возвращается в том случае если этот ключ есть и он соотвеств и когда тру то фильтор выводит даный обьект
  });
}

function spinalCase(str) {                                     
  return str
    .split(/\s|_|(?=[A-Z])/)                                       
    .join("-")
    .toLowerCase();
}


function translatePigLatin(str) {                                                         
  let consonantRegex = /^[^aeiou]+/;                                 //создали переменную которая отбирает негласные  вначале слова
  let myConsonants = str.match(consonantRegex);         //создали переменную которая выбирает эти негласные из нашего слова
  return myConsonants !== null                                     //   условие : если наша переменная непустая , то есть там стоят негласные вначале то в слове
    ? str
        .replace(consonantRegex, "")                                  //  заменяем наши негласные на ничего - пустоту 
        .concat(myConsonants)                                          //   добавляем эти же гласные в конец 
        .concat("ay")                                                       //         к этому всему добавляем ау
    : str.concat("way");                                                    //    в иному случае , если вначале слова гласные то просто s к слову way
}


function myReplace(str, before, after) {                                                        
  if(/^[A-Z]/.test(before)){                                                     // если в слове которое нужно заменить вначале стоит большая буква 
    after = after[0].toUpperCase() + after.substring(1);      // изменить слово которое будем вставлять : первая буква и большой плюс все остальные буквы без изменений
  } else {                                                    //                                если же там нет большой буквы 
    after = after[0].toLowerCase() + after.substring(1)        // новое слово будет начинаться с первой маленькой буквы плюс все остальные буквы как были
  }

  return str.replace(before,after);
} 


function pairElement(str) {                                                      
  const finalArr = [];
  const arrAT = ["A", "T"];
  const arrTA = ["T", "A"];
  const arrCG = ["C", "G"];
  const arrGC = ["G", "C"];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      finalArr.push(arrAT);
    } else if (str[i] === "T") {
      finalArr.push(arrTA);
    } else if (str[i] === "C") {
      finalArr.push(arrCG);
    } else {
      finalArr.push(arrGC);
    }
  };
   
  return finalArr ;
};

function pairElement(str) {                                                              
  // Function to match each character with the base pair
  const matchWithBasePair = function(char) {                              
    switch (char) {
      case 'A':
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };


  // Find pair for every character in the string
  const pairs = [];                                                                                 
  for (let i = 0; i < str.length; i++) {                                                      
    pairs.push(matchWithBasePair(str[i]));            
  }

  return pairs;                                                                                      
}

function fearNotLetter(str) {                                                                
  const allCh = "abcdefghijklmnopqrstuvwxyz";
  let fIndex;
  for (let i = 0; i < allCh.length; i++) {
    if (str[0] == allCh[i]) {
      fIndex = allCh.indexOf(allCh[i]);
    } 
  };
  const cutList = allCh.slice(fIndex);
  for (let k = 0; k < cutList.length; k++) {
    if (cutList[k] !== str[k]) {
      return cutList[k];
    }
  }
}

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {                                                                                     
    /* code of current character */
    const charCode = str.charCodeAt(i);                           

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}


function uniteUnique(arr) {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

function convertHTML(str) {                                                                 
  let temp = str.split("");

  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

function convertHTML(str) {                                                                                  
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");

String.prototype.camelCase=function(){
  if(this == ''){
    return ''
  }
  return this.trim().split(' ').map(el=> el[0].toUpperCase() + el.substring(1)).reduce((acc,el)=>acc+el,'')
}


function solution (roman) {
  const arabic = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   
  return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + arabic[roman], 0);
}


function solution(number){
  const arabic = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
    };

  let result = "";
  for (let key in arabic)
    while ( number >= arabic[key] ) {
      result += key;
      number -= arabic[key];
    }
  return result
}

function addLetters(...letters) {
  if(!letters|| !letters.some(el => typeof el == 'string')){
    return 'z'
  }
  let a = letters.reduce((acc,el) => acc + el.charCodeAt()-96,0);
  while(a > 26){
    a -= 26
  }
  return String.fromCharCode(a+96)
}

function inArray(array1,array2){
  const result = [];
  for(let i = 0; i < array2.length; i++){
    for(let j = 0; j < array1.length; j++){
      if(array2[i].includes(array1[j])){
        result.push(array1[j])
      }
    }
  }
  return [...new Set(result)].sort()
}

function isPrime(num) {
  if (num < 2){ 
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++){
     if (num % i == 0){  
     return false;
     }
  } 
  
return true

}

function deleteNth(arr,n){
  const a = {}
  const result = [];
  for(let i = 0; i < arr.length; i++){
    if(!a[arr[i]]){
      a[arr[i]] = 1
    }else{
      a[arr[i]] += 1
    }
    if(a[arr[i]]<=n){
      result.push(arr[i])
    }
  }
  return result
}

function findMissingLetter(array){
  let res;
  
  const a = array.map(el=>el.toLowerCase())
              .sort()
              .map(el=>el.charCodeAt());
  
  for(let i = a[0]; i < a[a.length-1]; i++){
    if(!a.includes(i)){
      res = i
    }
  }
  if(array[0] == array[0].toUpperCase()){
    return String.fromCharCode(res).toUpperCase()
  }
     return String.fromCharCode(res)      
}

function toCamelCase(str){
  if(str == ''){
    return ''
  }
  str = str.split(/[_-]/);
  const ex = str.slice(1).map(el => el.charAt(0).toUpperCase()+el.substring(1).toLowerCase());
  ex.unshift(str[0]);
  return ex.join('')
}




