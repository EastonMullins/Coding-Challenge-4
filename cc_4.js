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