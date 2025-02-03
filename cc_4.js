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

console.log (`Total Sales: $${totalSales}`);
//Task 2 - Sales Report