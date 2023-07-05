//Destructuring: Destructuring is the syntax for extracting values from an object property and assigning 
//them to a variable.
/*
const demo={ 
name:'suri',
age:24,
gender:'male'

}
//console.log(demo);

let {name,age,gender}=demo;
console.log(name);
console.log(age);
console.log(gender);



//Ternary Operator:The conditional (ternary) operator is the only JavaScript operator 
  //that takes three operands: a condition followed by a question mark ( ? ), then
  //an expression to execute if the condition is truthy followed by a colon ( : ), and 
  //finally the expression to execute if the condition is falsy
 

  // program to check pass or fail
let marks = prompt('Enter your marks :');
// check the condition
let result = (marks >= 35) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);

*/
//Spread Operator 

function Spread(a,b,...c){
console.log(c);

}
Spread(2,4,5,6,7,8,9)
