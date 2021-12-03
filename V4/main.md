1. Task – Specificity (3 points)

https://specificity.keegan.st/

1 022
2 122
3 121
4 112

The INPUT for password will be white, because only the 1st, the 2nd, and the 4th are applying styles to the password input field and the 2nd has bigger specificity 


1. Task – Media Queries (4 points)
There is a fieldset element with two inputs in the given code snippet. Write CSS statements that format
them as follows:

1. If a user is browsing the web page using a device with a screen wider than 400 pixels, both inputs should be
displayed in one line and have a width of 100px each.
2. Otherwise, the inputs should be displayed on separate lines, however each input and its corresponding label
should be displayed on the same line.
2.css
3. Task – Programming (3 points)
Write a JavaScript function remReal to remove all real numbers (non-integers) or numbers stored as strings
that may not be converted into integers from the array. For example, if the following code snippet is executed,
the first console.log will output [5, 100] and the second console.log will output [1, 3, 5, 7].
3.js
4. Task – DOM Manipulations (2 points)
You are designing a web page, which requires the following functionality: after the page load, input field that
have a class “hide” have to be hidden. You have created a function hideInputs that appears in the following
code snippet and assigned to the onload event of the body element. However, after the page loads, input fields
do not get hidden. Why is it? Explain your answer. Write the correct code to implement the required
functionality.
4.js
First of all, for objects that inherit class Element html atribute class is accessible as list only by the property 'classList' but not 'class'. Second this code instead of checking the value it's assigning because one equal symbol is used. Also classes of an html element are stored in DOMTokenList class that has public method 'contains' for checking
5. Task – Syntax (3 points)
Correct errors in the following code snippets: 

6. Task – Object Orientation (3 points)
The following code snippet uses JavaScript prototype-based inheritance in order to define the concept of "Car".
1) Where is the constructor function in this example?
2) What attributes and methods will be available for the object "vw" after the execution of the following code
lines 1-12? What values will the attributes have? Explain your answers.
3) Write the code that adds a method getInfo to all Car objects after the execution of the above code
fragment. The method must return the information about colors of a car. For example, for VW the method must
output "VW Golf has the following colors: white, blue, red".

