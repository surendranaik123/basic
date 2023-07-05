//JSON( JavaScript Object Notation)
//JSON is a lightweight data-interchange format
//JSON is used to send data between computers and it is language independent

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[8].lastName;