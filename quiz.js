// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 64

/* your code starts here */
function square(x) {
    console.log(x*x);
    }

function cube(x) {
    console.log(x*x*x);
    }

function quad(x) {
    console.log(square(x)*square(x));
    }

/* your code ends here */

//Question 1 check
if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}


function sum(numbers, twiceOrhalf){
    var x = numbers.add;
    /*iknow the function above is wrong*/

    if(twiceOrHalf == undefined){
        return }
        if (twiceOrHalf !== false){
            return 2*y
}
        if


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

/* your code ends here */

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}

