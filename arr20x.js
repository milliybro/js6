`Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.`

function array(a) {
   let b = [];
   
   for (let i = 0; i < a.length - 1; i++) {
     b.push([a[i], a[i+1]]);
   }
   
   return b;
 }

 const b = array([1, 2, 3, 4, 5]);
 console.log(b);