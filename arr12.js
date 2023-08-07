`Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
Input: [10, false, “”, “Abdulaziz”, null]
Output:
Truthy: [10, “Abdulaziz”]
Falsy: [false, “”, null]`

function truthyFalsy(arr) {
   let truthy = [];
   let falsy = [];
 
   for (let i = 0; i < arr.length; i++) {
     if (arr[i]) {
       truthy.push(arr[i]);
     } else {
       falsy.push(arr[i]);
     }
   }
 
   return {
     truthy: truthy,
     falsy: falsy
   };
 }

 let res = truthyFalsy([10, false, ``, `Abdulaziz`, null]);
 console.log('Truthy:', res.truthy);
 console.log('Falsy:', res.falsy);