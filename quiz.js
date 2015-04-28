// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 64 (256?!!!!!???)

/* your code starts here */

function square(arg) {
  return(arg*arg)
};

function cube(arg) {
  return(square(arg)*arg)
};

function quad(arg) {
  return(square(arg)*square(arg))
}

/* your code ends here */

//Question 1 check
if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}


// Question 2
// write a function sum(numbers, twiceOrHalf).
// It should expect an array of numbers as the first argument
// and an optional flag, twiceOrHalf, as the second argument.
// If the flag is undefined, sum should return the total of the numbers in the array
// If the flag is truthy, it should return twice that sum
// If the flag is falsy but not undefined, it should return half that sum

/* your code starts here */

function sum(numbers, twiceOrHalf) {
  var numbersArray=[numbers];
  var totalNumbers=/*Total the numbers array*/

  if (twiceOrHalf === undefined) {return (/*Total of the numbers in the array*/)}

  if (twiceOrHalf !== false) {return (/*Total*/*2)}

  if (twiceOrHalf !==undefined && twiceOrHalf !== true) {/*Total*/*0.5}



}


/* your code ends here */

//Question 2 check
var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}


// Question 3
// write a function, max() that loops through zero or more arguments
// and returns the largest number in that list

/* your code starts here */
fuction max(arg1, arg2, arg3){

}

/* your code ends here */

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
