`Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.`

function array(arr, k) {
   return arr.map(element => element + k);
 }
 
 let arr = [9, 15, 11, 65, 3];

 let res = array(arr, 10);
 console.log(res);