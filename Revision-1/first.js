console.log("This is used to print the message in console");
a=5;
console.log(typeof a);

// to declare a variable in js we use let and to declare a constant we use const as well as for class 

const Insta = {
    userName: "Varunxchhabra",
    age: 21,
    isFollow: true

}

// that how you declare a class don't forget to use = sign when you are declareing it 

console.log(Insta);

console.log(typeof Insta.isFollow);

// declaration and modification of variable and constant NOTE- constant can't be modified

let age = "abc"

console.log(age);

age = 4;


console.log(age);

const PI = 3.14;

// PI=5; IF i Do this it will Throw an error

console.log(PI);


// also one inserting thing

const b = "123";
console.log("b is equal to " + b);
console.log("b is type of "+ typeof b);

let c = b+1;

console.log("c is equal to "+ c);
console.log("c is type of "+ typeof c);

//  only in this it will give output as 1231 and it is string rest is number only and it stays the 123 but it change the type like in b instead of 
// "123" you do ac the out will be NaN which mean not a number but here comes the interesting thing it will says it is number in type of 

let d = b-1;
console.log ("d is equal to "+ d);
console.log("d is type of" + typeof d);

let e = b*1;
console.log("e is equal to " + e);
console.log("e is type of " + typeof e);

let f = b/1;
console.log("f is equal to " + f)
console.log("f is type of " + typeof f);
