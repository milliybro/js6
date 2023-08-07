`Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 4 8 6 9 7 5`;

function evenOdd(arr) {
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.unshift(arr[i]);
  }

  return even.concat(odd);
}

let res = evenOdd([4, 5, 7, 8, 6, 9]);
console.log(res);
