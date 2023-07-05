
//let a=Number(prompt("Enter your A value"))
//console.log(a);

//let b=Number(prompt("Enter your b value"))
//console.log(b);
/*
//if condition
if (a>b) {

    document.writeln("condition::(a>b)");
    document.writeln("<br>")
    document.writeln("<br>")
    document.writeln("condition is true");
    document.writeln("<br>")
    document.writeln("<br>")
    document.writeln("A value is greater than B value ");
}



//if else condition

if (a<=b) {
    document.writeln("That condition is true");
  document.writeln("<br>")
  
    if (a==b) {
        document.writeln("A and B values are equals");
        document.writeln("<br>")
    } else {
        document.writeln("A value is less than B value");
        document.writeln("<br>")
    }
} else  {
    document.writeln("That condition is  false")
    document.writeln("<br>")
    if (a==b) {
        document.writeln("A and B values are equals");
        document.writeln("<br>")
    } else {
   
        document.writeln("A  value is greater than B value ");
        document.writeln("<br>")
    }
}

//if elseif condition

if (a==b) {
    document.writeln("A and B values are equals");
    document.writeln("<br>")
} else if(a>b){
    
    document.writeln("A  value is greater than B value ");
    document.writeln("<br>")
}else{


    document.writeln("A  value is less than B value ");
    document.writeln("<br>")
}
*/
let day=new Date()
switch (day.getDay()) {
    case 0:
        document.write("Today is Sunday");
        document.write("<br>");
        document.write("=============");
        document.write("<br>");
        document.write("Date::");
        document.write(day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear());
        document.write("<br>");
        document.write("Time::");
        document.write(day.getHours()+":"+day.getMinutes()+":"+day.getSeconds());
    
        break;

    case 1:
        document.write("Today is Monday");
        document.write("<br>");
        document.write("=============");
        document.write("<br>");
        document.write("Date::");
        document.write(day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear());
        document.write("<br>");
        document.write("Time::");
        document.write(day.getHours()+":"+day.getMinutes()+":"+day.getSeconds());
        break;

    case 2:
        document.write("Today is Tuesday");
        document.write("<br>");
        document.write("=============");
        document.write("<br>");
        document.write("Date::");
        document.write(day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear());
        document.write("<br>");
        document.write("Time::");
        document.write(day.getHours()+":"+day.getMinutes()+":"+day.getSeconds());
        break;

    case 3:
        document.write("Today is Wednesday");
        document.write("<br>");
        document.write("=============");
        document.write("<br>");
        document.write("Date::");
        document.write(day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear());
        document.write("<br>");
        document.write("Time::");
        document.write(day.getHours()+":"+day.getMinutes()+":"+day.getSeconds());
        break;
    
    case 4:
        document.write("Today is Thursday");
        document.write("<br>");
        document.write("=============");
        document.write("<br>");
        document.write("Date::");
        document.write(day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear());
        document.write("<br>");
        document.write("Time::");
        document.write(day.getHours()+":"+day.getMinutes()+":"+day.getSeconds());
            break;

            case 5:
                document.write("Today is Friday");
                document.write("<br>");
                document.write("=============");
                document.write("<br>");
                document.write("Date::");
                document.write(day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear());
                document.write("<br>");
                document.write("Time::");
                document.write(day.getHours()+":"+day.getMinutes()+":"+day.getSeconds());
        break;

       default:
        document.write("Today is Saturday");
        document.write("<br>");
        document.write("=============");
        document.write("<br>");
        document.write("Date::");
        document.write(day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear());
        document.write("<br>");
        document.write("Time::");
        document.write(day.getHours()+":"+day.getMinutes()+":"+day.getSeconds());
        break;
}