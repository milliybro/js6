`Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.`

function evenOdd(arr) {
   let even = arr.filter((_, index) => index % 2 === 0);
   let odd = arr.filter((_, index) => index % 2 !== 0);
   
   return even.concat(odd);
 }
 
 let res = evenOdd([1, 2, 3, 4, 5]);
 console.log(res);