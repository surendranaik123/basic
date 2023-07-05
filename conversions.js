// Type casting:converting one datatype to another datatype is konw as type of casting.

// they are two type casting(1)implicity casting
//                           (2)explicity casting

//  (1)implicity casting:js  engine converting one datatype to another datatype is called implicity  

// console.log(5+5)
// console.log("5"+5+5)
// console.log(8-"5")
// console.log(8-"helo")
// console.log("8"-"45")
// console.log("20"+"23")
// console.log("Hello"+45)
// console.log(5*"10")

// let a=prompt("Enter A value")
// let b=prompt("Enter B value")
   

// let c=a-b

// console.log(c)

// let a="6"
// let b="1"

// let c=a+b
// console.log(c)

// (2)explicity casting:the process of coverting from one type of value to onther type of value force fully 
//                     is called explicity

//                     =>in explicity we have two type:(i) Number()
//                                                     (ii)String() 
 
// //(i)Number:converting string() to Number()
let a=20
    b="10"
    c=5
    d="Hello"
    // console.log(Number(a)+Number(b));
    // console.log(Number(a)+Number(c)); 
    // console.log(Number(b)+Number(d));
// (ii)String():converting Number() to string()
    console.log(String(a)+Number(b));
    console.log(String(a)+String(c));
    console.log(String(a)+String(d));


    // Api(Application Programming Interface): A Web API is an application programming interface for the Web.
        
    //      API types:rest api,soap api,grophql api
    
    //          example:convergetion between client and webServer 
    //              =>Client give Request for webServer
    //              =>webserver return give Response to Client