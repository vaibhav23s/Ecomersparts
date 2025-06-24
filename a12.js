// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newnumber = numbers.map((num)=> {return  num + 10}) //ek tatreka hi ye firt option log lagana mat bhulna

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(numbers);