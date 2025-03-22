//by creating examples that demonstrate block scope and function scope.

//Block Scope Example:
console.log("\n------ BLOCK SCOPE EXAMPLES -------");

// Using var:
console.log("\nUsing var:");
{
    var ShirtName = "Louis Philippe Men's Solid Classic Fit Shirt";
    //using var inside block:
    console.log("Inside block:",ShirtName );
}
//using var outside block:
console.log("Outside block:",ShirtName );

//using let:
console.log("\nuisng let:");
{
    let TShirtName = "Louis Philippe Men's Regular Fit T-Shirt";
    //using let inside block:
    console.log("Inside block:",TShirtName );
}


//using const:
console.log("\nuisng let:");
{
    const ShirtName = "Louis Philippe Men's Regular Fit Shirt";
    //using let inside block:
    console.log("Inside block:",ShirtName );
}


// using Function Scope Example:
console.log("\n------ FUNCTION SCOPE EXAMPLE ------");

function ProductDetails() {
    // All variables are placed within the function
    var TshirtName = "Louis Philippe Men's Solid Slim Fit T-Shirt";
    let  TshirtSize= "M";
    const TshirtRating = 4.5;
    
    console.log("Inside function:");
    console.log("Product ID (var):",TshirtName );
    console.log("Product Category (let):", TshirtSize);
    console.log("Product Rating (const):", TshirtRating);
}
ProductDetails();


//using For Loop Example:
console.log("\n------ FOR LOOP EXAMPLE ------");
//using var in for loop:
console.log("\nUsing var in loop:");
for (var i = 0; i < 5; i++) {
    console.log("Inside loop:", i);
}
 // var is accessible outside the loop:
console.log("Outside loop:", i); 
//ler is using in for loop:
console.log("\nUsing let in loop:");
for (let j = 0; j < 3; j++) {
    console.log("Inside loop:", j);
}

