//Write a function called “addFive”
//Given a number, “addFive” returns 5 added to that number

function addfive(a,b,c){
    a=a+5;
    b=b+5;
    c=c+5;
    console.log(a,b,c);
    return +5
}
addfive(5,0,-5);


//Write a function called “getOpposite”.
//Given a number, return its opposite
var num = "5a";
function getOpposite(num) {
if(Number.isInteger(num)){return num*(-1);}
else{return -1}
}
var opposite = getOpposite(num)
console.log(opposite);


//Fill in your code that takes an number minutes and converts it to seconds.
let min = 3;
function toSeconds(min) {return min*60;}
let seconds = toSeconds(min)
console.log(seconds)


//Create a function that takes a string and returns it as an integer.
var mystr = "60";
function toInteger(mystr) {return parseInt(mystr);
}
var myint = toInteger(mystr)
console.log(myint);


//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 20;
function nextNumber(myint) {return myint+1;}
var myNextint = nextNumber(myint)
console.log(myNextint);


//Create a function that takes an array and returns the first element.
var arr = [300, 2, 50];
function getFirstElement(arr) {return arr[0];}
var data = getFirstElement(arr)
console.log(data);


//Convert Hours into Seconds
//Write a function that converts hours into seconds.
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    for (i = 0; i < arr.length; i++){
    arr[i] = 3600*arr[i];
    }
    return arr
    }
    var data = hourToSeconds(arr)
    console.log(data);


//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1, num2)
{ return num1 * num2 }
var peri = findPerimeter(6,7)
console.log(peri);


//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    if(num1+num2 < 100){
    return true}
    else{
    return false
    }
    }
    var res = lessThan100(22,15)
    console.log(res);


//Old macdonald had a farm:
//MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
function CountAnimals(tur,horse,pigs) {
    var a = 2*tur;
    var b = 4*(horse+pigs);
    return a+b
    }
    var legs = CountAnimals(2,3,5)
    console.log(legs);


//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
    if(num1%5===0){return true}
    else{return false}
    }
    var divisible = divisibleByFive(5)
    console.log(divisible);


//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.
function isEven(num){
    if(parseInt(num)==num){
    if(num%2===0){return true}
    else{return false}
    }
    else{return -1} 
    }
    var even = isEven(5)
    console.log(even);


//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
    if((num1%2!=0)&&(num2%2!=0)){return true}
    else{return false}
   }
   console.log(areBothOdd(1,5));


//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName){
    if((firstName!='')&&(lastName!='')){return firstName + ' ' + lastName}
    else{return firstName + lastName}
   }
console.log(getFullName("guvi","geek"));


//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
    if(typeof(word1)===String){return word1.length}
    else{return -1}
   }
console.log(getLengthOfWord("kaveen"));


//Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
var d1 = (x1-x2)*(x1-x2);d2=(y1-y2)*(y1-y2);
return d1+d2
}
console.log(getDistance(100, 100, 400, 300));


//Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array,n)
{return array[n-1]}
console.log(getNthElement([5,8,9],2));


////Write a function called “getLastElement”.
//Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array)
{return array[array.length-1]}
console.log(getLastElement([4,8,9]));


//Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {return obj.key}
   console.log(getProperty(obj,'mykey'))


//Write a function called “addProperty”.
//Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {
    mykey: "value"
   };
   function addProperty(obj, key)
   {obj.key=true; return obj}
console.log(addProperty(obj, "mykey"));


//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar){
    const positive = ar.filter(num => num > -1);
    return positive;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
    var data = [];
    for (var i=0; i<=n; i++){
     data.push(2**i);
    }
    return data
  }
  console.log(powersOfTwo(2));


//Find the maximum number in an array of numbers
function findMax(ar)
{
var ma = ar[0];
for(i=0;i<ar.length;i++){
if(ma<ar[i]){ma = ar[i];}
}
return ma
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);


//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   var data = s.split('').reverse().join('');
   return data
}


//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
{const ar = ar1.concat(ar2);
return ar;
}}


//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{ 
   let k=s.split(' ')
   let sum = 0;
for (let i = 0; i < k.length; i++) {
    sum += ++k[i];
    return sum
}}