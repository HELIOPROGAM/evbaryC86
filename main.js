StudentArray = [];

function submit()
{

var displayStudentArray = [];


for (var j = 1; j <= 4; j++)
{
var nameOfTheStudent =document.getElementById("nameOfTheStudent"+j).value;
console.log(nameOfTheStudent);
StudentArray.push(nameOfTheStudent);
}

console.log(StudentArray);


var lenghtOfNameOfStudentsArray = StudentArray.length;
 console.log(lenghtOfNameOfStudentsArray);





 for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
 {
    displayStudentArray.push("<h4>NOME - "+ StudentArray[k] + "</h4>");
    console.log(displayStudentArray);
    StudentArray.push(nameOfTheStudent);
 }


 document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

 var removeCommas = displayStudentArray.join(" ");

 console.log(removeCommas);
 document.getElementById("displayNameWithCommas").innerHTML = removeCommas;
 document.getyElementById("submitButton").style.display = "none";


 document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


 document.getElementById("submitButton").style.display = "none";


 document.getElementById("sortbutton").style.display = "inline-block";

}
function sorting()
{

   nameOfTheStudentArray.sort();
   console.log(nameOfTheStudentArray);

   var displayStudentArraySorting = [];

   var leghtOfNameOfStudentsArray = nameOfTheStudentArray.lenght;

   for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
   {
      displayStudentArraySorting.push("<h4>NOME - " + nameOfTheStudentArray[k] + "</h4>")

      console.log(displayStudentArraySorting);

   }

   var removeCommas = displayStudentArraySorting.join(" ");
   console.log(removeCommas);

   document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

   




var removeCommas = displayStudentArraySorting.join(" ");
console.log(removeCommas);

document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}

function new_update()
{
   document.getElementById("displayNameWithoutCommas").innerHTML = "<h1>" + nameOfTheStudent +"</h1>";




