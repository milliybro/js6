`Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.`;

let summa = 0;
function Arr(arr) {
  let maxSum = arr[0] + arr[1];
  let maxIndex = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    if (sum > maxSum) {
      maxSum = sum;
      maxIndex = i;
    }
  }

  return [arr[maxIndex], arr[maxIndex + 1]];
}

let res = Arr([1, 2, 3, 4, 5]);
console.log(res);
