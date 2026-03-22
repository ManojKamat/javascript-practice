// Module example using IIFE (Immediately Invoked Function Expression)

Store = (function () {
    let itemCount = 0,
        godown = [];

    function addItem(itemName, quantity) {
        if (godown[itemName]) {
            godown[itemName] += quantity;
        } else {
            godown[itemName] = quantity;
        }
        itemCount++;
    }

    function getItemCount() {
        return itemCount;
    }

    function getItemQuantity(itemName) {
        return godown[itemName] || 0;
    }

    return {
        addItem,
        getItemCount,
        getItemQuantity
    };
})();

// Example usage:
Store.addItem('Apple', 10);
Store.addItem('Banana', 20);
// console.log(Store.getItemCount()); // Output: 2
// console.log(Store.getItemQuantity('Apple')); // Output: 10
// console.log(Store.getItemQuantity('Banana')); // Output: 20
// console.log(Store.getItemQuantity('Orange')); // Output: 0

// Simulations for inventory calculations
Store.Inventory = (function () {
    function unitPrice(totalItems, quantity) {
        return totalItems / quantity;
    }
    function totalWeight(weightPerItem, quantity) {
        return weightPerItem * quantity;
    }
    return {
        unitPrice,
        totalWeight
    };
})();


// Dependency Injection example
Store.BillingCalculator = (function (Inventory) {
    function bulkDiscount(pricePerKg, quantity) {
        const totalWeight = Inventory.totalWeight(pricePerKg, quantity);
        return (totalWeight * 0.95).toFixed(2); // 5% discount for bulk purchases
    }
    return {
        bulkDiscount
    };
})(Store.Inventory);

// Example usage of BillingCalculator
const pricePerKg = 100;
const quantity = 50;
const discountedPrice = Store.BillingCalculator.bulkDiscount(pricePerKg, quantity);
console.log(`Discounted Price per Kg: ${discountedPrice}`); // Output: Discounted Price per Kg: 90  



console.log("Store modules", Object.keys(Store));
console.log("Endpoints in Inventory module", Object.keys(Store.Inventory));
console.log("Endpoints in BillingCalculator module", Object.keys(Store.BillingCalculator));
