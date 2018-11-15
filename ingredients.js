var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log(ingredients.length + " is the number");

// Write a while loop that prints out the contents of ingredients:
// var i = 0;
// while (i < ingredients.length){
//   console.log((i + 1) + "- " + ingredients[i]);
//   i++;
// }


// Write a for loop that prints out the contents of ingredients:
// for (var i = 0; i < ingredients.length; i++){
//   console.log((i + 1) + "- " + ingredients[i]);
// }

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 1; i <= ingredients.length; i++){
  console.log((i) + "- " + ingredients[ingredients.length - i]);
}