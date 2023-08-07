`Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
Input: n = 5, A = 2, B = 3
Output: [2, 3, 5, 10, 20]`;

let arr = [];

function prev(n, A, B) {
  let sum = A;
  for (let i = 1; i <= n; i++) {
    arr[0] = A;
    arr[1] = B;
    sum += arr[i];
    arr.push(sum);
  }
  return arr;
}

let res = prev(3, 2, 3);
console.log(res);
