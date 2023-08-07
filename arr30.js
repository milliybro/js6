`Array30. arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !`

function Arr(arr, k) {
   return arr.reduce((indices, element, index) => {
     if (element === k) {
       indices.push(index);
     }
     return indices;
   }, []);
 }
 
 let arr = [1, 2, 3, 2, 4, 2, 5]; //massiv
 let k = 2; //k son


 let res = Arr(arr, k);
 
 console.log(res);