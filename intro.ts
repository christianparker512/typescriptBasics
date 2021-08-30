for(let i = 0; i < 10; i++) {
  console.log(i * i);
}

let arr = [10, 20, 30, 40, 50, 60]

//for of statements
for (let elem of arr) {
  console.log(elem);
}

// prints the value of the array
let arr1 = 'Christian Parker'
for (let elem of arr1) {
  console.log(elem);
}
// prints the index value
let arr2 = 'Christian';
for (let eleme in arr2) {
  console.log(eleme);
}

let a: number = 10;
while(a<20) {
  console.log(a);
  a++;
}

let h: number = 10;
do {
  console.log(h);
  h++;
} while (a<20)