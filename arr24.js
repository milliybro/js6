`Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.`


function Arr(array) {
   let min = 0;
   let max = 0;
 
   for (let i = 1; i < array.length; i++) {
     if (array[i] < array[min]) {
       min = i;
     }
     if (array[i] > array[max]) {
       max = i;
     }
   }
 
   let modifiedArray = array.slice();
 
   modifiedArray[min-1] = 0;
   modifiedArray[max+1] = 0;
 
   return modifiedArray;
 }
 
 let array = [5, 9, 8, 3, 1];
 let modifiedArray = Arr(array);
 
 console.log(modifiedArray);