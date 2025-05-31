// Callback -> A function is passed as an argument to another function
//      Used to handle asynchronus operations 
//      like -> reading a file
//      network requests
//      Interacting with datbases 

//      "When you are done call this next"



// function hello() {
//     console.log("Hello");
// }

function hello(callback) {
    console.log("Hello");
    callback();
    // We named the argument function as callback 
}
function goodbye() {
    console.log("Goodbye");
}

/*
hello()
goodbye()
*/
// Tasks will complete asynchrously as
//  function goodbye won't be waiting for slower hello

// Passing the name of the function which will be called after
hello(goodbye);
// Having brackets at end will invoke the function right away


function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayAtConsole(result) {
    console.log(result);
}

sum(displayAtConsole, 10, 11);