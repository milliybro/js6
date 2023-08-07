`Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.`;

function NewArray(arr) {
  let Array = [];

  for (let i = 0; i < arr.length; i += 2) {
    Array.push(arr[i]);
  }
  return Array;
}
const Array = NewArray([2, 3, 4, 5, 6]);
console.log(Array);
