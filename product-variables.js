console.log("NYKAA BEAUTY PRODUCTS INVENTORY SYSTEM");
//Inventory of the prodct1:
console.log("Inventory of the prodct1:")
//Summary of the prodct:
const Nameoftheproduct1= "Nykaa Matte Lipstick";
let Priceoftheproduct1 = 599;
const Ratingoftheproduct1 = 4.5;
const InStockofproduct1 = true;
let DiscountPercentofproduct1 = 15;
//Print the product summary:
console.log(`Nameoftheproduct1:${Nameoftheproduct1 }`);
console.log(`Priceoftheproduct1: ₹${Priceoftheproduct1.toFixed(2)}`);
console.log(`Ratingoftheproduct1:${Ratingoftheproduct1}`);
console.log(`InStockofproduct1:${InStockofproduct1}`);
console.log(`DiscountPercentofproduct1:${DiscountPercentofproduct1}%`)

//Before discount price of the product1:
let BeforediscountPriceoftheproduct1 = 599;
console.log(`Before discount Price of the product1: ₹${BeforediscountPriceoftheproduct1.toFixed(2)}`);

//Define Discount of the product1:
let Amountofthediscount1 = Priceoftheproduct1 * (DiscountPercentofproduct1 / 100);
console.log(`Discount price of product1: ₹${Amountofthediscount1}`);
             
// Define after discount Finalprice of the prodct1:
let FinalPriceofproduct1 = Priceoftheproduct1 - Amountofthediscount1;
console.log(`After discount Final price of product1: ₹${FinalPriceofproduct1}`);

//Buy the product1 details after discount:
let Displayoftheproduct1 = `
PRODUCT 1:
Name: ${Nameoftheproduct1}
Original Price: ₹${Priceoftheproduct1.toFixed(2)}
Discount: ${DiscountPercentofproduct1}%
Discount Amount: ₹${Amountofthediscount1.toFixed(2)}
Final Price: ₹${FinalPriceofproduct1.toFixed(2)}
You Save: ₹${Amountofthediscount1.toFixed(2)} (${DiscountPercentofproduct1}%)
Rating: ${Ratingoftheproduct1}/5
Stock Avaliable: ${InStockofproduct1 ? "Yes" : "No"}
Type of price: ${typeof Priceoftheproduct1 }
Type of name: ${typeof Nameoftheproduct1}
`;
console.log(Displayoftheproduct1);

//Inventory of the prodct2:
console.log("Inventory of the prodct2:")
//Summary of the prodct:
const Nameoftheproduct2= "Kaya Gluta Glow Face Serum";
let Priceoftheproduct2 = 629;
const Ratingoftheproduct2 = 4.2;
const InStockofproduct2 = false;
let DiscountPercentofproduct2 = 30;
//Print the product summary:
console.log(`Nameoftheproduct2:${Nameoftheproduct2 }`);
console.log(`Priceoftheproduct2: ₹${Priceoftheproduct2.toFixed(2)}`);
console.log(`Ratingoftheproduct2:${Ratingoftheproduct2}`);
console.log(`InStockofproduct2:${InStockofproduct2}`);
console.log(`DiscountPercentofproduct2:${DiscountPercentofproduct2}%`)

//Before discount price of the product2:
let BeforediscountPriceoftheproduct2 = 699;
console.log(`Before discount Price of the product2: ₹${BeforediscountPriceoftheproduct2.toFixed(2)}`);

//Define Discount of the product2:
let Amountofthediscount2 = Priceoftheproduct2* (DiscountPercentofproduct2 / 100);
console.log(`Discount price of product2: ₹${Amountofthediscount2}`);
             
// Define after discount Finalprice of the prodct2:
let FinalPriceofproduct2 = Priceoftheproduct2 - Amountofthediscount2;
console.log(`After discount Final price of product2: ₹${FinalPriceofproduct2}`);

//Buy the product2 details after discount:
let Displayoftheproduct2 = `
PRODUCT 2:
Name: ${Nameoftheproduct2}
Original Price: ₹${Priceoftheproduct2.toFixed(2)}
Discount: ${DiscountPercentofproduct2}%
Discount Amount: ₹${Amountofthediscount2.toFixed(2)}
Final Price: ₹${FinalPriceofproduct2.toFixed(2)}
You Save: ₹${Amountofthediscount2.toFixed(2)} (${DiscountPercentofproduct2}%)
Rating: ${Ratingoftheproduct2}/5
Stock Avaliable: ${InStockofproduct2 ? "Yes" : "No"}
Type of price: ${typeof Priceoftheproduct2}
Type of name: ${typeof Nameoftheproduct2}
`;
console.log(Displayoftheproduct2);


//Inventory of the prodct3:
console.log("Inventory of the prodct3:")
//Summary of the prodct:
const Nameoftheproduct3= "Schwarzkopf Professional OSiS"
let Priceoftheproduct3 = 1247;
const Ratingoftheproduct3 = 4.4;
const InStockofproduct3 = true;
let DiscountPercentofproduct3= 14;
//Print the product summary:
console.log(`Nameoftheproduct3:${Nameoftheproduct3 }`);
console.log(`Priceoftheproduct3: ₹${Priceoftheproduct3.toFixed(2)}`);
console.log(`Ratingoftheproduct3:${Ratingoftheproduct3}`);
console.log(`InStockofproduct3:${InStockofproduct3}`);
console.log(`DiscountPercentofproduct3:${DiscountPercentofproduct3}%`)

//Before discount price of the product3:
let BeforediscountPriceoftheproduct3= 1247;
console.log(`Before discount Price of the product3: ₹${BeforediscountPriceoftheproduct3.toFixed(2)}`);

//Define Discount of the product3:
let Amountofthediscount3 = Priceoftheproduct3* (DiscountPercentofproduct3 / 100);
console.log(`Discount price of product3: ₹${Amountofthediscount3}`);
             
// Define after discount Finalprice of the prodct3:
let FinalPriceofproduct3= Priceoftheproduct3- Amountofthediscount3;
console.log(`After discount Final price of product3: ₹${FinalPriceofproduct3}`);

//Buy the product2 details after discount:
let Displayoftheproduct3= `
PRODUCT 3:
Name: ${Nameoftheproduct3}
Original Price: ₹${Priceoftheproduct3.toFixed(2)}
Discount: ${DiscountPercentofproduct3}%
Discount Amount: ₹${Amountofthediscount3.toFixed(2)}
Final Price: ₹${FinalPriceofproduct3.toFixed(2)}
You Save: ₹${Amountofthediscount3.toFixed(2)} (${DiscountPercentofproduct2}%)
Rating: ${Ratingoftheproduct3}/5
Stock Avaliable: ${InStockofproduct3 ? "Yes" : "No"}
Type of price: ${typeof Priceoftheproduct3}
Type of name: ${typeof Nameoftheproduct3}
`;
console.log(Displayoftheproduct3);

//Inventory of the prodct4:
console.log("Inventory of the prodct4:");
//Summary of the prodct:
const Nameoftheproduct4= "Bella Vita Organic Vibrant Color Nail Polish - Wine Spill";
let Priceoftheproduct4 = 99;
const Ratingoftheproduct4 = 4.4;
const InStockofproduct4 = false;
let DiscountPercentofproduct4= 50;
//Print the product summary:
console.log(`Nameoftheproduct4:${Nameoftheproduct4}`);
console.log(`Priceoftheproduct4: ₹${Priceoftheproduct4.toFixed(2)}`);
console.log(`Ratingoftheproduct4:${Ratingoftheproduct4}`);
console.log(`InStockofproduct4:${InStockofproduct4}`);
console.log(`DiscountPercentofproduct4:${DiscountPercentofproduct4}%`)

//Before discount price of the product4:
let BeforediscountPriceoftheproduct4= 1247;
console.log(`Before discount Price of the product4: ₹${BeforediscountPriceoftheproduct4.toFixed(2)}`);

//Define Discount of the product4:
let Amountofthediscount4 = Priceoftheproduct4* (DiscountPercentofproduct4/ 100);
console.log(`Discount price of product4: ₹${Amountofthediscount4}`);
             
// Define after discount Finalprice of the prodct4:
let FinalPriceofproduct4= Priceoftheproduct4- Amountofthediscount4;
console.log(`After discount Final price of product4: ₹${FinalPriceofproduct4}`);

//Buy the product2 details after discount:
let Displayoftheproduct4= `
PRODUCT 4:
Name: ${Nameoftheproduct4}
Original Price: ₹${Priceoftheproduct4.toFixed(2)}
Discount: ${DiscountPercentofproduct4}%
Discount Amount: ₹${Amountofthediscount4.toFixed(2)}
Final Price: ₹${FinalPriceofproduct4.toFixed(2)}
You Save: ₹${Amountofthediscount4.toFixed(2)} (${DiscountPercentofproduct4}%)
Rating: ${Ratingoftheproduct4}/5
Stock Avaliable: ${InStockofproduct4 ? "Yes" : "No"}
Type of price: ${typeof Priceoftheproduct4}
Type of name: ${typeof Nameoftheproduct4}
`;
console.log(Displayoftheproduct4);


//Inventory of the prodct5:
console.log("Inventory of the prodct5:")
//Summary of the prodct:
const Nameoftheproduct5= "Lotus Botanicals Skin Brightening Night Cream "
let Priceoftheproduct5= 419;
const Ratingoftheproduct5 = 4.3;
const InStockofproduct5= true;
let DiscountPercentofproduct5= 38;
//Print the product summary:
console.log(`Nameoftheproduct5:${Nameoftheproduct5}`);
console.log(`Priceoftheproduct5:₹${Priceoftheproduct5.toFixed(2)}`);
console.log(`Ratingoftheproduct5:${Ratingoftheproduct5}`);
console.log(`InStockofproduct5:${InStockofproduct5}`);
console.log(`DiscountPercentofproduct5:${DiscountPercentofproduct5}%`)

//Before discount price of the product5:
let BeforediscountPriceoftheproduct5= 1247;
console.log(`Before discount Price of the product5: ₹${BeforediscountPriceoftheproduct5.toFixed(2)}`);

//Define Discount of the product5:
let Amountofthediscount5 = Priceoftheproduct5* (DiscountPercentofproduct5/ 100);
console.log(`Discount price of product5: ₹${Amountofthediscount5}`);
             
// Define after discount Finalprice of the prodct4:
let FinalPriceofproduct5= Priceoftheproduct5- Amountofthediscount5;
console.log(`After discount Final price of product5: ₹${FinalPriceofproduct5}`);

//Buy the product2 details after discount:
let Displayoftheproduct5= `
PRODUCT 5:
Name: ${Nameoftheproduct5}
Original Price: ₹${Priceoftheproduct5.toFixed(2)}
Discount: ${DiscountPercentofproduct5}%
Discount Amount: ₹${Amountofthediscount5.toFixed(2)}
Final Price: ₹${FinalPriceofproduct5.toFixed(2)}
You Save: ₹${Amountofthediscount5.toFixed(2)} (${DiscountPercentofproduct5}%)
Rating: ${Ratingoftheproduct5}/5
Stock Avaliable: ${InStockofproduct5 ? "Yes" : "No"}
Type of price: ${typeof Priceoftheproduct5}
Type of name: ${typeof Nameoftheproduct5}
`;
console.log(Displayoftheproduct5);


// Inventory summary:
let TotalProducts = 5;
let AvaliableProducts = 3;
let TotalInventoryValue = Priceoftheproduct1+Priceoftheproduct2+Priceoftheproduct3+Priceoftheproduct4+Priceoftheproduct5;
let TotalDiscountValue =  Amountofthediscount1+Amountofthediscount2+ Amountofthediscount3+ Amountofthediscount4+ Amountofthediscount5; // Add others
//Print the Inventroy summary:
console.log(`\nINVENTORY SUMMARY:`);
console.log(`-----------------`);
console.log(`Total Products: ${TotalProducts}`);
console.log(`AvaliableProducts : ${AvaliableProducts}`);
console.log(`Total Inventory Value: ₹${TotalInventoryValue.toFixed(2)}`);
console.log(`Total Discount Value: ₹${TotalDiscountValue.toFixed(2)}`);