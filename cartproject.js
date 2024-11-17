// let cart = [];
// let command = prompt("Please enter a command (add, view, remove, total, quit):");

// while (command !== "quit") {
//     if (command === "add") {  // Adding item
//         let item = prompt("Enter the item to add:");
//         cart.push(item);  // Adds the entered item to the cart
//         console.log(`${item} has been added to the cart.`);
//     } else if (command === "view") {  // Viewing items in cart
//         if (cart.length === 0) {
//             console.log('Your cart is empty.');
//         } else {
//             console.log("Items in your cart:");
//             for (let i = 0; i < cart.length; i++) {
//                 console.log(`${i}: ${cart[i]}`);  // Displays each item with its index
//             }
//         }
//     } else if (command === "remove") {  // Removing item by index
//         let index = parseInt(prompt("Enter the index of the item to delete:"));
//         if (!isNaN(index) && index >= 0 && index < cart.length) {
//             let remItem = cart.splice(index, 1);  // Removes item at specified index
//             console.log(`${remItem} has been removed from the cart.`);
//         } else {
//             console.log("Invalid index. Please try again.");
//         }
//     } else if (command === "total") {  // Displaying total number of items
//         console.log(`You have ${cart.length} item(s) in your cart.`);
//     } else {
//         console.log("Unknown command. Please try again.");  // Handling unknown commands
//     }

//     command = prompt("Please enter a command (add, view, remove, total, quit):");
// }

// console.log("Thank you for using the shopping cart app. Goodbye!");
