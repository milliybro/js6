`Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeSum(arr) nomli funksiya tuzilsin.`

function rangeSum(arr, K, L) {
   let sum = 0;
   
   for (let i = 0; i < arr.length; i++) {
     if (i < K || i > L) {
       sum += arr[i];
     }
   }
   
   return sum;
 }
 
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
 let res = rangeSum(arr, 2, 7);
 console.log(res);