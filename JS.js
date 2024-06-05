//-----task-1-----
function sayHello(name1) {
    console.log("Hello,",name1,"!");
}
sayHello('Alice'); 
sayHello('Bob');

//-----task-2-----
function square(num) {
    console.log(num*num) ;
}
square(5);

//-----task-3-----
function multiply(num1,num2) {
    console.log(num1*num2)
}
multiply(4,5);

//-----task-4-----
let car1={make:"Toyota",model:"Camry",year:"(2023)"} 
function getCarInfo(car) {
    console.log(car.make,car.model,car.year);
}
getCarInfo(car1)

//-----task-5-----
let colors = ["Red","Green","Blue"];
function PrintsElement(element){
    for (let i in element){
        console.log(element[i])
    }
}
PrintsElement(colors);

//-----task-6-----
function length(str){
    let x = 0 ;
    for (let i in str){
        x+=1;
    }
    console.log(x);
}
length("hello")

//-----task-7-----
function uppercase(str){
   let x = str.toUpperCase();
   console.log(x)
}
uppercase("ahmad khallaf")

//-----task-8-----
function splString(str){
    let x = str.split(" ");
    console.log(x); 
}
splString("ahmad khallaf");