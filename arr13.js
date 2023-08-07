`Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi OddMin(arr) nomli funksiya tuzilsin.`;

function OddMin(arr) {
  let odd = arr.filter((num) => num % 2 !== 0);

  if (odd.length == 0) {
    return undefined;
  }

  return Math.min(...odd);
}

const res = OddMin([2, 4, 6, 3, 5]);
console.log(res);
