Store = (function() {
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
console.log(Store.getItemCount()); // Output: 2
console.log(Store.getItemQuantity('Apple')); // Output: 10
console.log(Store.getItemQuantity('Banana')); // Output: 20
console.log(Store.getItemQuantity('Orange')); // Output: 0