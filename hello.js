// function sayHello(name = "unknown name") {
//   console.log("Hello, " + name);
// }

// sayHello("fulano");
// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");
// sayHello();

function returnSayHello(name) {
  console.log ("this function 'doesnt' print")
  return "Hello, " + name;
}

var greeting = returnSayHello('John');
console.log(greeting);