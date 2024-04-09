let numArray = [1, 2, 3, 4, 5];
let textArray = ["Who", "What", "Where", "Why"];
let mixedArray = [1, "string", true, ["oh no"]];

// Empty Array: []
let emptyArray = [];

// Array indexes refer to individual values
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]) // banana

// length will tell you how many values
console.log(fruits.length) // 3

/*
    Trick to get the last element of any array:
    use index [array.length - 1]
*/
console.log(fruits[fruits.length - 1]); // cherry

/*
    Using a specified index in the array can
    change the value.
    You can also add a value at a specified
    index if that index is not currently populated
*/
fruits[0] = "apricot" //Replaces 'apple' with 'apricot'

/*
    Index 3 was originally not populated (undefined).
    This will provide the value 'elderberry' at index 3
*/
fruits[3] = "elderberry"

/*
    Every method is unique in their own way.

    Some methods return an item you may or may not use.
    Some methods do NOT return anything.

    Some methods require one, two, or more parameters.
    Some methods do not require any parameters.

    Some methods change the original array after performing the action
    Some methods do not change the original array

    MDN is your best resource.

    Array Methods:

    push() - adds an element to the end of the array
    unshift() - adds an element at the start of the array
    pop() - removes the last element of the array
    shift() - removes the first element of the array
    reverse() - reverses the order of your array
    slice() - used to create a subset of your array
    join() - mainly used for an array of strings: you can combine the array of strings to make on big string
    split() - STRING method. Used to split a string into an array
*/
