`Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.`;

function Arr(arr) {
  let index = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];

    index[currentElement] !== undefined
      ? index[currentElement].push(i)
      : (index[currentElement] = [i]);
  }

  return index;
}

const index = Arr([3, 5, 6, 2, 5, 2, 4]);

console.log(index[5] + ` shu indexda`);
