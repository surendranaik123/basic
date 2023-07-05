//Array : array is a collection of homegeneous and heterogeneous 
//Array=[1,"suri",true,null,undefined]
//Syntax:let arr=[123,"hi,true"]



//1)push: adding the element in the end of array.it will affect the original array.
let arr=[1,2,3,"suri"]
arr.push(true)
console.log(arr);

//2)unshift: adding the element in the starting the of array.it will affect the original array.
arr.unshift(true)
console.log(arr);

//3)pop: delete the element in the ending the of array.it will affect the original array.
arr.pop()
console.log(arr);

//4)shift: delete the element in the starting the of array.it will affect the original array.
arr.shift()
console.log(arr);

//5)slice: remove the elemet 
let a=arr.slice(1,2)
console.log(a);

//6)splice: remove the elemet and add the element
arr.splice(0,1,"hello");
console.log(arr);

//7)indexof: it is showing index only
let b=arr.indexOf('hello');
console.log(b);

//8)revers: element are arrenge revers  
arr.reverse();
console.log(arr);

//9)join: element are join arrays
let c=arr.join("hey")
console.log(c);

