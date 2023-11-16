const userInputString = prompt(
    "Choose one or more froyo flavors out of these options",
    "vanilla, chocolate, coffee, strawberry, pistachio"
  );


 const stringArray = userInputString.split(", ");

// Convert the input of strings into an array.
const orders = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  orders.push(str);
}



  /* Can you prompt the user for froyo flavors and store their result?
Can you parse the user input into an array of froyo flavors?
As you iterate through the array of flavors, when should that object be updated?
Is your logic organized into a function?*/

//array of orders
//object of order numbers
//function to get order numbers including a loop to reiterate through as the orders are updated 
//return object of numebr of each flavor in order 

//Can you build an object to track which flavors you have observed so far?//
function OrdersTable(orders) {
    const orders_table = {};
    // in each loop:
    //orders[i] == "pistachio"
    for(i=0; i < orders.length ; i++) {
        let order = orders[i];
        if (order[order]) {
            orders_table[order] += 1;
        } else {
            orders_table[order] = 1;
        } 
// do something to orders table
        }
    return orders_table;
    }

    let output = OrdersTable(orders)
    // console.log(output);
    console.table(output);
    //output should look like:
    // { "pistachio" : 3 }

