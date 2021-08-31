function sayHello() {
  console.log("hello Christian");
  console.log("hello Lisa");
  console.log("hello Abby");
}

function sumOfTwo(x: number,y: number) {
  console.log(x + y);
}
sumOfTwo(10, 20);

function getRandomNumber(): number{
  return Math.random();
}
let a = getRandomNumber();
console.log(a);