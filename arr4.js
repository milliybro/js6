`Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 5 7 9 toqlar soni = 3`

function arrayOdd(arr) {
   let index = arr.filter((_, index) => index % 2 == 0);
   let sorted = index.sort((a, b) => a - b);
   console.log(sorted.join(`,`));
   return sorted.length;
 }
 
 let res = [4, 5, 7, 8, 6, 9];
 let odd= arrayOdd(res)
 let count = arrayOdd(res);
 console.log(count+` ta`);
