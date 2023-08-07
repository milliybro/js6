`Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
Input: [1, 5, 6, 1, 5, 7, 2]
Output: [6, 7, 2]`

function getElementsOneTime(arr) {
   let count = {};
   let result = [];

   for (let i = 0; i < arr.length; i++) {
     let element = arr[i];
     count[element] = (count[element] || 0) + 1;
   }
 
   for (let i = 0; i < arr.length; i++) {
     let element = arr[i];
     if (count[element] === 1) {
       result.push(element);
     }
   }
 
   return result;
 }

 let res = getElementsOneTime([1, 5, 6, 1, 5, 7, 2]);
 
 console.log(res);