let purchaseamount = 200;
let finalAmount = purchaseamount;
let discounted_price = 0;
if (purchaseamount > 100) {
    discounted_price = purchaseamount * 0.1;
    finalAmount = purchaseamount - discounted_price;
    console.log("10% off");
}
console.log(`Final amount after discount: $${finalAmount}`);
//Task 1 - Customer Discounts

let sales = [200, 130, 210, 140, 80];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {

    totalSales += sales[i];
}

console.log(`Total Sales: $${totalSales}`);
//Task 2 - Sales Report

let stock = 10;
while (stock > 0) {
    console.log(`Stock Available: ${stock}`);
    stock--;
}
//Task 3 - Inventory Depletion

let responses = 0;
do {
    console.log(`Number of responses: ${responses}`);
    responses++;
} while (responses < 4);
//Task 4 - Customer Survery

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}
//Task 5 - Employee Information

let products = ["Cheeseburger", "Milkshake", "Fries"];

for (let element of products) {
    console.log(element);
}
//Task 6 - Product Listing

let orders = [123, 456, 789];
orders.forEach(element => {
    console.log(`Order ID: ${element}`);
});
//Task 7 - Order Processing

function calculateTax(amount) {
    return amount * 0.2;
}
console.log(`Calculated tax: $${calculateTax(500)}`);
//Task 8 - Tax Calculation

function applyDiscount(amount, rate) {
    return amount * (1- rate);
}
console.log(`Discounted Price: $${applyDiscount(250,0.15)}`);
//Task 9 - Discount Application

const calculatePoints = (amount) => amount / 10;
console.log(`Points Earned: ${calculatePoints(500)}`);
//Task 10 - Loyalty Points