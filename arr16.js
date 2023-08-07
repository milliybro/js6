`Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.`;

function number(arr, R) {
  let res = arr[0];
  let differ = Math.abs(R - res);

  for (let i = 1; i < arr.length; i++) {
    let near = Math.abs(R - arr[i]);

    if (near < differ) {
      differ = near;
      res = arr[i];
    }
  }

  return res;
}

const array = [1, 5, 9, 12, 15];

const res = number(array, 10);
console.log(res);
