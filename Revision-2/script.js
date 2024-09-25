// this used fo rthe single line comments

/* this is used 
for multiline comments*/

// Airthmetic Operators

let a = 5;
let b = 7;

console.log("Value of a is ",a,"& Value of b is ",b);

console.log("Value of a+b", a+b);
console.log("Value of a-b", a-b);
console.log("Value of a/b", a/b);
console.log("Value of a*b", a*b);
console.log("Value of a%b", a%b);
console.log("Value of a^b you have to do a**b", a**b);

// Unary operators 

// for this it will print the number first and then add it  print vice versa for -
console.log("Value of a=a+1 is can be written as a++ now it will show the value of a first which is ", a++ ,"now the value after addition will be", a);
console.log("Value of a=a-1 is can be written as a-- now it will show the value of a first which is ", a-- ,"now the value after addition will be", a);

// for this it will add the number first and then print vice versa for -

console.log("Value before ++a is ", a, "Value of after ++a is ", ++a );
console.log("Value before --a is ", a, "Value of after --a is ", --a );

// Assignment Operators 
// =, += , -= , *= , %= , **=

let c = a +=4;
console.log("Value of c is a+=4 which will be",c,"\nThis will be visa versa same for other airthmetical operators as well");

// Comparision Operators
//  Theu always return a boolean value 

let result = a==b;
console.log("This is to check the value is equal a == b", result);

result = a!=b;
console.log("This is to check the value is not equal a ! b", result);

result = a === b;
console.log ("Type of a is ", typeof a)
console.log ("Type of b is ", typeof b)
console.log("This is to check the datatype and the value of a is equal b  a === b", result);

result = a !== b;
console.log("This is to check the datatype and the value of a is not equal b  a !== b", result);


// Logical Operators and if else

let age = prompt("Enter the age"); // use to take input in javascript

// this is used of || OR && this and and this is ! not
if (age >= 13 && age <= 19){
    console.log("You are a teen")

} else if(age > 20 && age < 59){
    console.log("You are a youth")
} else{
    console.log("either you are a child or a senior")
}


// Ternary Operators "?" specify the condition , first statement is true : second is not true short way to check if else 

// in ternary operation we use () for mathematical exp and + sign is only work in ternary opertaion not ,
let adultCheck = prompt("Enter you age")

Ans = adultCheck >= 18 ? "You are a adult ":"You are not adult you have " + (18-adultCheck) + " years left to be an adult";

console.log(Ans);


// Questions Problems
alert("Question Problem Start This is an alert message");

let isMultiple = prompt("Enter the Number: ");
 
if(isMultiple %5 == 0){
    console.log(isMultiple,"Is a Multiple of 5");
}else{
    console.log(isMultiple, "Is not a Multiple of 5");
}

// Question -2 
alert("Question 2 Check the grades ")

let grade = prompt("Enter the Marks : ")

// as prompt takes string so 

grade =Number(grade);

if(grade >= 90 && grade <=100){
    console.log("Your Grade is A");
}else if(grade >= 70 && grade <=89){
    console.log("Your Grade is B");
}else if(grade >= 60 && grade <=69){
    console.log("Your Grade is C");
}else if(grade >= 50 && grade <=59){
    console.log("Your Grade is D");
} else {
    console.log("Your Grade is F");
}



