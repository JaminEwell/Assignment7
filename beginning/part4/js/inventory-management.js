/*eslint-env browser*/


function display_menu() {
    "use strict";
    window.console.log("Welcome to Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update product inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display(inventory) {
    "use strict";
    var i = 1;
    inventory.forEach(function(product) {
        window.console.log(String(i) + ". " + product);
        i += 1;
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var sku = window.prompt("Enter the sku number");
    var quantity = window.prompt("Enter the new stock quantity");

    for (var product in inventory) {
        if (inventory[product][0] == sku) {
            inventory[product][2] = quantity;
        }
    }
    window.console.log("Quantity for " + sku + " was updated");
    window.console.log("");
}

function main() {
    "use strict";
    var inventory, command;

    display_menu();

    inventory = [
        [1225434, "soap", 3, 2.00],
        [1923862, "hair gel", 10, 1.50],
        [1129931, "toothbrush", 50, 4.00],
        [3223784, "toothpaste", 30, 2.50],
        [4223799, "mouthwash", 5, 6.00]
    ];

    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();