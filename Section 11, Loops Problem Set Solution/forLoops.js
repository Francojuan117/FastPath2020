// all number -10 and 19
console.log("Print all the numbers between -10 and 19.")
for(i = -10; i <= 19; i++){
  console.log(i + " is a number between -10 and 19");
}
// all even 10 & 40
console.log("Print all the even numbers between 10 and 40");
for(x = 10; x <= 40; x++){
  if(x % 2 === 0){
  console.log(x + " is an even number between 10 and 40.");
  }
}

// all odd 300 & 333
console.log("Print all the odd numbers between 300 and 333.");
for(z = 300; z <= 333; z ++){
  if(z % 2 !== 0){
    console.log(z + " is an odd number between 300 and 333.");
  }
}
// all divisible by 5 nd 3  between 5 & 50
console.log("Print all the numbers divisible by 5 and 3 between 5-50.");

for(y = 5; y <= 50; y++){
  if(y % 5 === 0 && y % 3 === 0){
    console.log(y + " is a number divisible by 5 and 3 and is between 5 and 50.");
  }
}
