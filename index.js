/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/
​
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
function areaRectangle(a, b) {
    console.log(a * b);
 }
​
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
​function crazySum (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(crazySum(10, 20));
  console.log(crazySum(10, 10));
  
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
​function crazyDiff(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }
  
  console.log(crazySum(12));
  console.log(crazyDiff(19));
  console.log(crazyDiff(22));
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
​
/* WRITE YOUR CODE HERE */
function boundary (N) {
    return ((Math.abs(100 - N) <= 20) ||
       (Math.abs(400 - N) <= 20));
  }
  
  console.log(boundary(10));
  console.log(boundary(90));
  console.log(boundary(99));
  console.log(boundary(199));
  console.log(boundary(200));
​
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/
​
/* WRITE YOUR CODE HERE */
​function strivify(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'S') 
    {
      return str1;
    }
    return "S"+str1;
  }
  
  console.log(strivify("Strive"));
  console.log(strivify("trive"));
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
​
/* WRITE YOUR CODE HERE */
function check3and7(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(check3and7(12));
console.log(check3and7(14));
console.log(check3and7(10));
console.log(check3and7(11));
​
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
​
/* WRITE YOUR CODE HERE */
function reverseString(str)
  {
return str.split('').sort().join('');
  }
console.log(reverseString("Strive"));
​
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
​
/* WRITE YOUR CODE HERE */
function upperFirst(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();     
      }
         str = splitStr.join(' '); 
    }
   return str;
   }
   
   titleCase("My Name Is Andrew");
​
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
​
/* WRITE YOUR CODE HERE */
function cutString(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(cutString('a'));
console.log(cutString('ab'));
console.log(cutString('abc'));
​
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
​
/* WRITE YOUR CODE HERE */
​function giveMeRandom(pCount, pMin, pMax) {
    min = pMin < pMax ? pMin : pMax;
    max = pMax > pMin ? pMax : pMin;
    var resultArr = [], randNumber;
    while ( pCount > 0) {
        randNumber = Math.round(min + Math.random() * (max - min));
        if (resultArr.indexOf(randNumber) == -1) {
            resultArr.push(randNumber);
            pCount--;
        }
    }
    return resultArr;
}
​
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
