`Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.`

function array(array) {
   if (array.length <= 1) {
     return array; // No need to shift if the array has 0 or 1 element
   }
 
   let temp = array[0];
 
   for (let i = 1; i < array.length; i++) {
     array[i - 1] = array[i];
   }
 
   array[array.length - 1] = temp;
 
   return array;
 }
 
 let shiftedArray = array([1, 2, 3, 4, 5]);

 console.log(shiftedArray);