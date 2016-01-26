var num1;
var num2;
var biggerNum;

function greaterNum(num1, num2) {
  if (num1 > num2) {
    biggerNum = num1;
  } else if (num2 > num1) {
    biggerNum = num2;
  } else {
    console.log("Numbers are the same!");
  }
  console.log("The bigger number of " + num1 + " & " + num2 + " is " + biggerNum + "." )
}

greaterNum(5,10);
greaterNum(6,70);
