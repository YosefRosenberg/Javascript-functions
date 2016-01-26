var languages;
var sp;
var fr;
var hb;

function helloWorld(languages) {
  if (languages === "sp") {
    console.log("Hola, Como estas?")
  }
    else if (languages === "fr") {
      console.log("Bonjour, Sava?")
    }
    else if (languages === "hb") {
      console.log("Shalom, Ma Shlomcha")
    }
    else {
      console.log("Hello World")
    }
  }
  helloWorld("sp");
  helloWorld("fr");
  helloWorld("hb");
  helloWorld();
