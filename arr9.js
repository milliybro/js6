`Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.`;

function evenOdd(arr) {
  let odd = arr.filter((_, index) => index % 2 !== 0);
  let even = arr.filter((_, index) => index % 2 === 0);

  let sortedOdd = odd.sort((a, b) => a - b);
  let sortedEven = even.sort((a, b) => b - a);

  return sortedOdd.concat(sortedEven);
}

let res = evenOdd([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(res);
