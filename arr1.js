`Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
Input: 5
Output: [2, 4, 16, 32, 64]`;

function getLevel2(n) {
   let arr = [];
   let mul = 1;

   let num = 2;
 
   while (mul <= n) {
     arr.push(num);
     num = num * 2;
     mul++;
   }
 
   return arr;
 }

let res = getLevel2(5);
console.log(res);