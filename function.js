
/*

//1)Anonymous function:Anonymous function means Nameless (or) no name Directly we can't called the anonymous
//function

function(){  

}
document.write(function());


//(i) express fucntion
let sum1=function(){ 
   
    document.write("Output::Hello")
}
sum1()
document.write("<br>")
document.write("<br>")
document.write("<br>")


//2)Name fucntion:To create fucntion and fucntion name and call the fucntion name  
function demo(a,b){
    result=a+b
    return result;
}
 demo() 
 document.write("Adding two numbers=")
document.write(demo(10,4)) 
document.write("<br>")
document.write("<br>")
document.write("<br>")



function sum(num1,num2){
if (num1==num2) {
    document.write("Condition is true")
    document.write("<br>") 
    if (num1>num2) {
        document.write("num1 is greeter than num2")
    } else{
        document.write("num1 and num2 are equals")  
    }
    var result=num1+num2
} else {
    document.write("Condition is false") 
    var result=num1-num2
} 
return result;
}
//console.log(sum(12,8))
console.log(sum(4,4))



//3)IIFE(immediately invoke function expression):when we want execute  a fucntion immediately 
//where they create,IIFE used,
//syntax:(fucntion)(parameters);
(function (){

document.write("Adding two numbers=")
})
();



//4)Arrow fucntion: To reduce the sytax of the fucntion we can go for Arrow function

//syntax:()=>{}

let x=(a,b)=>{
    var  result=a+b
    return result;
}
    document.write(x(2,1))
    


//function call :It can be used to invoking a method with an owner object as an arrgument.

const person = {
    fullName: function(city) {
      console.log(this.firstName + " " + this.lastName+" "+ "from"+" "+city)
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName:"Albert",
    lastName: "Doe"
  }
  person.fullName.call(person2,"bangalore")

  //function apply:

  const persons = {
    fullName: function(city) {
      console.log(this.firstName + " " + this.lastName+" "+ "from"+" "+city)
    }
  }
  
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const person4 = {
    firstName:"Albert",
    lastName: "Doe"
  }
  //person.fullName.apply(person4,["bangalore"])
  person.fullName.bind(person4,["bangalore"])

//bind function
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }

  //synchronous:	synchronous basically  that means you can only execute one thing at a time 
	console.log("suri");
	console.log("naik");
	console.log("banavath");


//asynchronous:asynchronous means that you can execute mutable things at a time and you  don't have
 //to finish executing the current things	in order move on to  next one ;
 
  console.log("suri");
	console.log("naik");
	
  
  setTimeout(()=>{
	console.log("aa");
	},5000);
 
	console.log("banavath");
  console.log("banavath");
  console.log("banavath");
  console.log("banavath");
  
	

  //callback fucntion:the function  whic is being passed as a parameter is called call back fucntion.
  //

function demo(a,b,test){
let result=a+b*test;
return result
}
function test(){
  let result= 6
  return result;
}
console.log(demo(5,8,test()));



//hoisting:Calling (or) Utilizing the variable before initialization or declaring is called hoisting.

console.log(a)//(o/p:undefined)
 var a=20;
   

 // ==> if we try to hoisting let ,const we get  reference error:
  
    //console.log(b);//(o/p: error)
	 //let b=20
   
	 //console.log(c);//(o/p: error)
	//const c=20;

*/



//A JavaScript Promise object contains both the producing code and calls to the consuming code
//"Producing code" is code that can take some time
//"Consuming code" is code that must wait for the result


//Promise:promise is handeling asynchronous function 
// Promises they are  3 state
//Pending
//Fulfilled or Resolved
//Reject or error

//syntax:let promise=new Promise();

let promise=new Promise((Resolved,Reject)=>{
let demo="true"
  if (demo==0) {
  Resolved("condition is true");
  } else {
  Reject("condition is false");
  
  }

});
let a=10;
// console.log(promise);

