//A simple java script programme to demnostrate difference b/w var,let and const variables:

console.log("------- USING VAR EXAMPLES--------");
//using var keyword to create variable:
 var Nameofproduct ="Levi's Men's Solid Regular Fit T-Shirt";
 console.log("Name of original product:",Nameofproduct);

 //Reasign the value to varkey variable:
 Nameofproduct="Levi's Men's Printed Regular Fit T-Shirt";
 console.log("Name of Updated product:",Nameofproduct)

 //Redeclaring the var variable:
 var Nameofproduct="Levi's Men's Slim Fit T-Shirt";
 console.log("Name of redeclared product:",Nameofproduct);

 console.log("------- USING LET EXAMPLES--------");
 //using let keyword to create variable:
 let Nameofproductprice=400;
 console.log("Original product price:",Nameofproductprice);

 //Reasign the value to letkey variable:
 Nameofproductprice=500;
 console.log("Updated product price:",Nameofproductprice);

 //We cant redeclare the let variable:

 console.log("------- USING CONST EXAMPLES--------");
//using let keyword to create variable:
 const Nameofproductbrand="Levi's";
 console.log("Name of original product brand:",Nameofproductbrand);

//we can not reasign and redeclare the const variable:

//we use const with object:
const productDetails = {
                            Color: "Red",
                            Size: "XL",
                            Fittype:"SlimFit"
                       };
    console.log("Original product details:", productDetails);
    
// We can modify properties of const objects:
    productDetails.Size="M",
    console.log("Updated product details:", productDetails);
    
// But cannot reassign the object itself
// productDetails = { color: "White", Fittype:CrossFit" }; // TypeError
    