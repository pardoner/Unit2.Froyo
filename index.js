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

//Can you build an object to track which flavors you have observed so far?//
function ordersTable(orders) {
    const orders_table = {};
    // in each loop:
    //orders[i] == "pistachio"
    for(i=0; i < orders.length; i++) {
        let order = orders[i];
        //check existance of a key
        //tried: if (order)
        if (orders_table[order]) {
            orders_table[order] ++;
        } else {
            orders_table[order] = 1;
        } 
// do something to orders table
        }
    return orders_table;
    }

    let output = ordersTable(orders)
    // console.log(output);
    console.table(output);
    

