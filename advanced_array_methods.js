let fruits = ["apple", "banana", "cherry"];

/*
    for..of loop:
    Used to avoid having to increment an index counter
    and still accessing each array item.

    You can use this if your code block doesn't
    require the need of an index.
*/
for (let fruit of fruits) {
    console.log(`I like ${fruit} !`);
}

/*
    Iteration methods:

    forEach() - another way to iterate through an array. Returns undefined
    find() - finds the FIRST item that matches. Returns one matching item or undefined if no match
    filter() - accept or reject each item based on a condition. Return an array of your filtered items
    map() - transform each item into a new item. Return an array with the transformed items and the length will be the same of the original array
    reduce() - scans the entire array and reduces the elements into a single result or total. Usually used with an array of numbers
*/

let names = ["Alice", "Bob", "Carol", "Charlie"];

//forEach()
names.forEach((name) => {
    console.log(name.toUpperCase());
})

//find()
let cName = names.find((word) => {
    return word.charAt(0).toUpperCase() === "C";
})
// cName is 'Carol'

let cNames = names.filter((word) => {
    return word.charAt(0).toUpperCase() === "C";
})
// cNames is ["Charlie", "Carol"]

//map()
let upper = names.map((word) => {
    return word.toUpperCase();
})
// upper is ["ALICE", "BOB", "CHARLIE", "CAROL"]

let numbers = [17, 3, 2, 20];
//reduce()
let totalCount = numbers.reduce((accumulator, nextNum) => {
    return accumulator + nextNum;
}, 0)
// totalCount is 42



/*
    Refactoring code from IO session
*/

// Original from IO session
let workers = ["Frank", "Scott", "Paul", "Hollie", "Chris", "Mazat"];
async function findWorker() {
    let foundWorker = false; //Flag for keeping track if we found a valid name in our workers array
    let response = await ask("Give us a staff name who works at Upright: ");

    // 1. Loop through every name in our workers array
    for (let i = 0; i < workers.length; i++) {
        //2. Compare our response to each worker.
        //When it comes to the comparison, we are making every character the same case (all UPPERCASE in this example);
        if (response.toUpperCase() === workers[i].toUpperCase()) {
            foundWorker = true;
        }
    }

    // Using our flag, see if we provided a valid name or not then output it.
    if (foundWorker) {
        console.log("You gave a correct name!")
    } else {
        console.log("That person doesn't work here!")
    }

    rl.close(); //Close the readline interface.
}

// Refactored using array methods
async function findWorkerREFACTORED() {
    let response = await ask("Give us a staff name who works at Upright: ");

    // Using find() method to find a worker that matches our response
    let result = workers.find((worker) => {
        return response.toUpperCase() === worker.toUpperCase();
    });

    // If find() finds a match, 'result' will be given a value.
    // If not, then 'result' is undefined which is falsey
    if (result) {
        console.log("You gave a correct name!");
    } else {
        console.log("That person doesn't work here!");
    }

    rl.close(); //Close the readline interface.
}


/*
    EXTRAS!
*/

// Array Destructuring
// Variables can be defined by destructuring the elements of an array
let names2 = ["Alice", "Bob", "Charlie", "Carol", "David"];
const [name1, name2, name3, name4, name5, name6] = names2;
// name1 => Alice
// name2 => Bob
// name3 => Charlie
// name4 => Carol
// name5 => David
// name6 => undefined

// Rest param (...)
// Using the rest parameter (...) within a function can allow one to call a function with multiple values. No need to identify each parameter
function useArray(...arr) { 
    console.log(arr)
}
// Call useArray with 5 arguments
useArray("Alice", "Bob", "Charlie", "Carol", "David");
// Call useArray with 3 arguments
useArray(1, 2, 3);