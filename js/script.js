// we create from js a container into our HTML
const boxsquare = document.createElement('div');
// console.log(boxsquare);

//we give our div the classes we want
boxsquare.className = 'd-flex justify-content-between align-content-center gap-2';
// also add ID to the div
boxsquare.setAttribute('id','ls-container');
// console.log(boxsquare);

let numBox = 100;
let tmpHtml = '';

boxsquare.innerHTML = tmpHtml;

// we create a for loop that need to count untill 100
for (let i = 1; i <= numBox; i++) {
    // if i is % for 15 the result must be a FizzBuzz
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    }
    // if i is % for 3 the result must be a Fizz
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    // if i is % for 5 the result must be a Buzz
    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}