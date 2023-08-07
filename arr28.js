`Array28. Given an array consisting of n elements. Create a program that deletes one of the same neighbors among the elements of the array.`


function getSingleArr(arr) {
  let res = [];
  for (let el of arr) {
    if (!res.includes(el)) {
      res.push(el);
    }
  }
  return res;
}

let arr = [1, 2, 2, 3, 4, 4, 5];

let res = getSingleArr(arr);

console.log(res);