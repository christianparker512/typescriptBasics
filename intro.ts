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

function getSum(a: number, b: number , c? : number): number {
  // return a + b;
  if (c != undefined) { return a + b + c }
  return a + b;
} 
// let ans = getSum(10, 100);
let ans = getSum(10, 20, 300);
console.log(ans);

function getSum2(...nums: number[]): number {
  let ans: number = 0;
  for (let num of nums) {
    ans = ans + num
  }
  return ans;
}
console.log(getSum2(1, 2));
console.log(getSum2(1, 2, 3));
console.log(getSum2(1, 2, 3,4,5,6));
console.log(getSum2(1, 2,3,4,5,6,7,8));