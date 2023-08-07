`Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.`

function localMax(arr) {
   const n = arr.length;
   
   for (let i = n - 2; i > 0; i--) {
     if (arr[i] > arr[i-1] + arr[i+1]) {
       return i;
     }
   }
   
   return -1;
 }
 const res = localMax([1, 3, 5, 2, 6, 4]);
 console.log(res);