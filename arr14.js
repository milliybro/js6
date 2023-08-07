`Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.`

// toq max

function OddMax(arr) {
   let odd = arr.filter((num) => num % 2 !== 0);
 
   if (odd.length == 0) {
     return undefined;
   }
 
   return Math.max(...odd);
 }
 
 const res = OddMax([2, 4, 6, 3, 5, 9]);
 console.log(res);
 
 //juft max

//  function evenMax(arr) {
//    let odd = arr.filter((num) => num % 2 == 0);
 
//    if (odd.length == 0) {
//      return undefined;
//    }
 
//    return Math.max(...odd);
//  }
 
//  const res1 = evenMax([2, 4, 6, 3, 5, 9]);
//  console.log(res1);