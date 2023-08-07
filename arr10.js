`Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[3], A[4], A[n-3], A[n-4], ...`

function array(arr) {
   let n = arr.length;
   let res = [];
 
   for (let i = 0; i < Math.ceil(n / 2); i++) {
     res.push(arr[i], arr[n - 1 - i]);
   }
 
   if (n % 2 !== 0) {
     res.push(arr[Math.floor(n / 2)]);
   }
 
   return res;
 }

 let res = array([1, 2, 3, 4, 5, 6, 7]);
 console.log(res);