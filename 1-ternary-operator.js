// 1. The Ternary Operator - Long Way

var salary = 1500.00;
var message;

if (salary >= 2000.00) {
  message = 'Credit available $4000';
}else {
  message = 'Credit available $2500';
}

console.log('1. The Ternary Operator - Long Way');
console.log(message);

// 1. The Ternary Operator - Short Way & ES6

const salary2 = 3500.00
const message2 = (salary2 >= 2000.00) ? 'Credit available $4000' : 'Credit available $2500'

console.log('1. The Ternary Operator - Short Way & ES6');
console.log(message2);