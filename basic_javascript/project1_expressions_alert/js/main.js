document.writeln("Hello, World!<br>");                      // printing Hello World

var a = "This is a string!<br>";                            // variable a is a string
document.writeln(a);                                        // printing variable a

document.writeln ("Lisa told Bart, \"Knock it off, Bart! Or I\'ll tell dad!\""
+ "\"Eat my shorts!\" Bart responded.<br>");                // escape characters in strings

document.writeln ("\"Be who you are and say what you feel,"
+ " because those who mind don't matter and those who matter don\'t mind.\""
+ " - Dr. Seuss<br>");                                      // concatenating strings with plus operator to print a full quote

var b = "Concantenated " + "string.<br>";                   //concatenating strings and storing in variable b
document.writeln(b);                                        //printing variable b

var Family = "The Simpsons", Dad = "Homer", Mom = "Marge",  // assigning multiple variables in one statement
    Daughter = "Lisa", Son = "Bart";                        // multiple variables in one statement
document.writeln(Dad + "<br>");                             // printing one variable "Dad" as a string

document.writeln(5 + 5 + "<br>");                           // adding two numbers and printing the result     

