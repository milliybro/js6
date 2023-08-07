`Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.`

function Arr(array, k, m) {
   if (k < 0 || m >= array.length || k >= m) {
     return array;
   }
 
   array.splice(k, m - k + 1);
 
   return array;
 }
 
 let array = [1, 2, 3, 4, 5, 6, 7];
 let k = 2;
 let m = 4;
 
 let res = Arr(array, k, m);
 
 console.log(res);
 console.log(res.length+` ta`);