//task 1
var a = 1;
while (a<10){
if (a<9)
a++;
else{
alert(a);
break;}}

//task 2
if (currentHour < 12) {
console.log("Good morning!");
} else {
console.log("Good day!");}

//task 3
var body =
document.getElementsByTagName("body")[0];
function handler() {
alert("The body was clicked!");
}

body.addeventListener('click', handler);
