//concatenate method
function full_Sentence() {
var part_1 = "I have ";
var part_2 = "made this ";
var part_3 = "into a complete ";
var part_4 = "sentence. ";
var whole_sentence = part_1.concat (part_2, part_3, part_4) ;
document.getElementById ("Concatenate") . innerHTML = whole_sentence;
}
//slice method
function slice_Method() {
var Sentence = "All work and no play makes Johnny a dull boy.";
var Section = Sentence.slice (27,33);
document.getElementById ("Slice") . innerHTML = Section;
}
//toUpperCase method
function upper_Method() {
var text = "Hello World!";
var result = text.toUpperCase();
document.getElementById ("Upper") . innerHTML = result;
}
//string method
function string_Method() {
var X =182;
document.getElementById("Numbers_to_string").innerHTML = X. toString ();
}
//toPrecision method
function precision_Method() {
var X = 12938.3012987376112;
document.getElementById ("Precision") . innerHTML = X. toPrecision (10);
}
//toFixed method
function fixed_Method() {
    var num = 123.456789;
    var fixedNum = num.toFixed(2); // "123.46"
    document.getElementById("Fixed").innerHTML = fixedNum;
}
//valueOf method
function valueOf_Method() {
    var str = new String("Hello World!");
    var val = str.valueOf(); // "Hello World!"
    document.getElementById("ValueOf").innerHTML = val;
}
