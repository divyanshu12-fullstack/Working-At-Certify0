// forEach() => Method to apply a specified 
//              function(callback) to each element of array

// Array.forEach(callback)
// element, index, array are provided to callback function 


let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(display);

function display(element) {
    console.log(element);
}

function double(element, index, array) {
    array[index] = element * 2;
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}

numbers.forEach(double);
console.log(numbers);
