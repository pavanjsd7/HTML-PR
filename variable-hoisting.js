//hoisting works differently for `var`, `let`, and `const` declarations.

// variable-hoisting.js

// using Hoisting with var variable:
console.log("\n------ HOISTING WITH VAR ------");
//varible calling before declaration:
console.log("Tab before declaration:",TabName ); 
var  TabName= "Samsung Galaxy Tab A9+";
//variable calling after declaration:
console.log("Tab after declaration:", TabName); 

//using Hoisting with let variable:
console.log("\n------ HOISTING WITH LET ------");
let TabPrice = 19999;
//variable calling after declaration:
console.log("Price after declaration:", TabPrice);

//using Hoisting with let variable:
console.log("\n------ HOISTING WITH CONST ------");
const TabBrand = "samsung";
//variable calling after declaration:
console.log("Brand after declaration:", TabBrand);

//using Temporal Dead Zone demonstration
console.log("\n------ TEMPORAL DEAD ZONE ------");
{
    let TabCategory = "Electronic device";
//variable calling after declaration:
    console.log("Category after declaration:", TabCategory);
}


//usig Function hoisting:
console.log("\n------ FUNCTION HOISTING ------");
// Function declarations are fully hoisted
getProductInfo("Samsung Tab"); // This works!

function getProductInfo(name) {
    console.log("Product info for:", name);
}

// Function expressions with var are partially hoisted:
var getProductPrice = function(price) {
    console.log("Product price:", price);
};
getProductPrice(19999); 

// Function expressions with let/const are not hoisted:
const getProductBrand = function(brand) {
    console.log("Product brand:", brand);
};
getProductBrand("Samsung"); 