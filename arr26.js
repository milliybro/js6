`Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi Arr(arr, k) nomli funksiya tuzilsin.`

function Arr(arr, k) {
if (k < 0 || k >= arr.length) {
console.log("Invalid index");
return arr; 
}

let newArr = arr.slice(0, k).concat(arr.slice(k + 1));

return newArr;
}

let arr = [1, 2, 3, 4, 5];
let k = 2;

let res = Arr(arr, k-1);

console.log(res);