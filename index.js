/*console.log("hello.....");
document.writeln("Test");
var a=20;
var b=30;
console.log(a);

if (a==b) {
    console.log(true)
} else {
    console.log(false) 
}*/


//Object:Key and values

//Literal Method
let obj={
username:"suri",
password:"naik"

}
console.log(obj)

//new keyword
let a= new Object({
username:"suri",
password:"suri123"
})
console.log(a)


//object Method

//object.entries
console.log(Object.entries(a))

//object.keys
console.log(Object.keys(a))

//object.values
console.log(Object.values(a))
 
//object seal :only value is updated
Object.seal(a)
a.password="suri12345"
console.log(a)

//object.sealed:only check sealed condition that true or false
console.log(Object.isSealed(a))

//object.freeze:not update value and key
Object.freeze(a)
a.password="suri12345"
console.log(a)

//object.is frozen: only check freeze condition that true or false
 console.log(Object.isFrozen(a))

 const b={
    name:"assd",
    age:23
 }
 //delete
delete(b.age)
console.log(b)

//inside object method 
//math
//time
//date

//math
//1.math.round()
console.log(Math.round(11.7))
console.log(Math.round(11.2))

//2.math.ciel()
console.log(Math.ceil(11.7))
console.log(Math.ceil(11.2))

//3.math.floor
console.log(Math.floor(11.7))
console.log(Math.floor(11.2))

//4.math.sqrt
console.log(Math.sqrt(25))
console.log(Math.sqrt(225))

//5.math.cbrt()
console.log(Math.cbrt(225))

//6.math.random()
console.log(Math.random()*10)


//date
let x=new Date();
console.log(x.getDay())
console.log(x.getDate())
console.log(x.getMonth()+1)//default strat with 0
console.log(x.getFullYear())
console.log(x.getDate()+":"+(x.getMonth()+1)+":"+x.getFullYear())


//time
console.log(x.getHours())
console.log(x.getMinutes())
console.log(x.getSeconds())
console.log(x.getMilliseconds())
console.log(x.getHours()+":"+x.getMinutes()+":"+x.getSeconds()+":"+x.getMilliseconds())

//date and time
console.log(x.getDate()+":"+(x.getMonth()+1)+":"+x.getFullYear())
console.log(x.getHours()+":"+x.getMinutes()+":"+x.getSeconds())