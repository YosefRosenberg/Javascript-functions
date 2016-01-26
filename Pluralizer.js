var noun;
var number;

function pluralize (number, noun) {
  if((noun === "mouse") && number > 1){
    noun = "mice";
  } else if (number > 1) {
   noun = noun + "s";
 };
 console.log(number + " " + noun);
};

pluralize(5,"cat");
pluralize(5,"mouse");
pluralize(1,"mouse");
