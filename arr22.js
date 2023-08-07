`Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.`;

function array(arr) {
  const halfLength = arr.length / 2;

  for (let i = 0; i < halfLength; i++) {
    const temp = arr[i];
    arr[i] = arr[i + halfLength];
    arr[i + halfLength] = temp;
  }
  return arr;
}

const res = array([3, 6, 2, 5, 2, 4]);
console.log(res);
