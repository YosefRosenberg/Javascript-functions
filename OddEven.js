var number = 0;

function counter() {
  while (number <= 15){
    if (number % 2 === 0) {
      console.log(number + " is even");
    } else {
      console.log(number + " is odd");
    }
    number++;
  }
}

counter();
