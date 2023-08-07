`Array7. n ta elementdan tashkil topgan massiv berilgan (n toq son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.`;

function NewArray(arr) {
  const array = [];
  let index = arr.length - 1;

  while (index >= 0) {
    array.push(arr[index]);
    index -= 2;
  }

  return array;
}

const array = NewArray([1, 2, 3, 4, 5, 6, 7]);
console.log(array);
