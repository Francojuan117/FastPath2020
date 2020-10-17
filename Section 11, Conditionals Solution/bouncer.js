
var age = prompt("Hey pal, gotta check ID for Age")


if(age < 0){
  console.log("That cant be right! Saids here you aint even born yet!")
}
if(age === 21){
  console.log("allright you bearly legal bud, come on in!")
}

if(age % 2 !== 0) {
 console.log("Yoh your age is an odd number you get 3% off your 3rd shot -_-");
}

if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square, here a math bar thats a big deal!");
}
