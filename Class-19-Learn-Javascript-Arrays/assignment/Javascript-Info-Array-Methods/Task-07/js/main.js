// Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

/* Pseudo Code
- Array of user objects, meaning objects that are stored in an array
- Eache Object has user.name
- Write code that converts (tranforms) user.names into an array of names
- Hence use map
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)

alert( names ); // John, Pete, Mary