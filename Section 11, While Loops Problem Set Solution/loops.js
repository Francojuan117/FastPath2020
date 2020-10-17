// console.log anwsers
//
// all number -10 and 19
console.log("Print all the numbers between -10 and 19.")
 var i = -10
 while(i<=19){
   console.log(i); i++;
 }
// all even 10 & 40
console.log("Print all the even numbers between 10 and 40");
var x = 10;
while(x <= 40){
	if(x % 2 === 0){
		console.log(x + " is an even number.");
	}
	x+=1;
}

// all odd 300 & 333
console.log("Print all the odd numbers between 300 and 333.");
var y = 300;
while(y <= 333){
  if(y % 2 !== 0){
    console.log(y + " is an odd number.")
  }
  y+=1;
}

// all divisible by 5 nd 3  between 5 & 50
console.log("Print all the numbers divisible by 5 and 3 between 5-50.");

var z = 5;
while(z <= 50){
  if(z % 5 === 0 && z % 3 === 0){
    console.log(z + " is divisible by 3 and 5.");
  }
  z+=1;
}
