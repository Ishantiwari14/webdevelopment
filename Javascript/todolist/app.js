let choice = prompt("What would you like to do?").toLowerCase();
console.log(choice)

const todos = [];
while (choice != 'quit') {

    if (choice === 'new') {
        const item = prompt("Enter a TODO").toUpperCase();
        todos.push(item);
        console.log(`${item} added to list`);

    } else if (choice === 'list') {
        console.log("********")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log("********")

    } else if (choice === 'delete') {
        const deleteIndex = parseInt(prompt("Type the index of the item you would like to delete."));
        while (!deleteIndex) {
            deleteIndex = prompt("Please enter the index number.");
        }

        const deletedItem = todos.splice(deleteIndex, 1);
        console.log(`${deletedItem} deleted`)

    } else {
        choice = prompt('Please enter a valid command!').toLowerCase();

    }
    choice = prompt("What would you like to do?").toLowerCase();


}

console.log("App exited");