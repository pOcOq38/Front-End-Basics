//Exercise 1
//declare the function, take the parameter name
function greet(name) {
  let greeting = `Hello there ${name}`;
  //alert(greeting);
}
greet("Rach");

function exercise() {
  let name = document.getElementById("inputName").value;
  alert(`Hello, ${name}! Nice to meet you.`);
  console.log(`Just greeted ${name}`);
}

//Exercise 2
let cnt = 0;

function add() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);

  let sum = a + b;

  alert(sum);
  console.log(`result: ${sum}`);

  cnt += 1;
  console.log(`count: ${cnt}`);
}
function sub() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let sum = a - b;
  alert(sum);
  console.log(`result: ${sum}`);

  cnt += 1;
  console.log(`count: ${cnt}`);
}
function divi() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let sum = a / b;
  alert(sum);
  console.log(`result: ${sum}`);

  cnt += 1;
  console.log(`count: ${cnt}`);
}
function mul() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let sum = a * b;
  alert(sum);
  console.log(`result: ${sum}`);

  cnt += 1;
  console.log(`count: ${cnt}`);
}
