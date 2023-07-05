var name ="My name is"
  console.log(`${name} suri`)

const str="This is surendra";
//1.str.length
console.log(str.length)
//2.str.tolowercase //it's show small letter
console.log(str.toLowerCase())
//3.str.touppercase //it's show capital letter
console.log(str.toUpperCase())
//4.str.replace 
console.log(str.replace('a','b'))
//5.str.CharAt
console.log(str.charAt(3))
//6.str.indexof
console.log(str.indexOf('i'))
//7.str.split()
console.log(str.split(""))
//8.str.slice()
console.log(str.slice(0,2));
console.log(str.substring(7,0));
console.log(str.substring(3));
//9.join:convet array to string

let a="surendra"
    b=a.split("")
    c=b.reverse()
    d=c.join('')
    e=d.toUpperCase()
    
console.log(e);


console.log(null);

function demo(a,b)

{
    return a+b
}

console.log(demo());

