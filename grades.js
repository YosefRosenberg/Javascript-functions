var score;
var grade;

function assignGrade(score) {
  if(score >= 90){
    grade = "A;"
  } else if (score >= 80){
    grade = "B;"
  } else if (score >= 70){
    grade = "C;"
  } else if (score >= 60){
    grade = "D;"
  } else {
    grade = "F;"
  }

  console.log("Your grade is " + grade + ".");
};

assignGrade(50);
assignGrade(89);
assignGrade(67);
assignGrade(78);
