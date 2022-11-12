## Variables
`variable` - is a container for storing data. A `variable` can store any data type--strings, arrays, objects and it can even store a function in JS! Think of a `variable` as a box where you organize your items/data. If you need to find a piece of data, just go to its variable box to get it. 

`variable declaration` - to “declare” a variable is to put the variable in its box. in javascript, you can “declare” a variable by using const for variables which don’t change and let or var for variables that you will change.
```javascript
const CONSTANT = "DO NOT CHANGE THIS VALUE"
let variable = "this value is changeable"
var variable = "so is this one!"
```


## Data Types
`data types` - are different ways to store your data or information. In real life, you store books on bookshelves, clothes on hangers, etc. In code, you store numbers in integers, word characters in strings, etc

  

`string` - is a data type which is used to store characters–-it is a bunch of characters that are in quotation marks.

```javascript
const stringExample = "This is a string yall"
```

  `integer` - an `integer `is how we store numbers. You can store a number in a string like “5”, but in order for JS to understand there is a number, it needs to be stored as an integer 5.
  
```javascript
const integerExample = 57
```

`object` - is a data type which has a “name:value” pair. You can store any value at a place with its name on it in an `object`. An `object` can be compared to a real life object. It is a noun that has actions it can do and items it has. A bookshelf object has shelves and actions like store a book.

```javascript
// The below object is a collection of
// songs and the name of their artist
const objectExample = {
	lost_one: "Jazmin Sullivan",
	speak_to_me: "Ari Lennox",
	free_mind: "TEMS",
	by_your_side: "Sade",
}
```

`dot notation` - is how you locate an item in an object. In order to get an item from an object, tell the object the items name and the item you want will be returned. Think of `dot notation` like the Dewy Decimal System in the library. If a librarian knows the book’s name, they can find the book on the shelf.

```javascript
// Let's find out who is the artist 
// who created "Lost One" by using dot notation
const artist = objectExample.lost_one
// this returns "Jazmin Sullivan"
console.log(artist)
```

  

`array` - is a data type which stores a list of items. Think of an array like a 50 page CD case that you’ve never seen before. To get to the CD you want, you have to flip through the case until you find it. Each page is an item in an `array`, so you can flip from the first item 0, to the next 1, until the end of the `array`, 49.

```javascript
const arrayExample = ["Jazmin Sullivan", "Ari Lennox", "TEMS", "Sade"]
```

  

`indexing` - Unlike an object, you cannot tell an array the name of an item you’re looking for. In order to get an item from an array, you have to know its number in the order of list. This is called `indexing` or “getting an item by its `index`” Because arrays are ordered, you can get an item at its exact position in the array, starting at number 0.

```javascript
// let's find out which artist 
// is the second entry in our example array
const artistTwo = arrayExample[1]
// this returns "Ari Lennox"
console.log(artistTwo)
```

## Functions
`looping` - can execute the same block of code within the `loop` as many times as you want. A `loop` is another effective way to find an item in an array. It is also a great way to perform work that you have to do again and again. Think of a `for loop` like chopping a carrot. Until we reach the end of the carrot, we chop it into pieces.

```javascript
const carrot = ["carrot piece 1", "carrot piece 2", "carrot piece 3", "carrot piece 4"]

// Let's loop through our carrot, displaying each piece on the console.
for (i = 0; i < carrot.length; i++) {
	// i increments on each loop
	console.log(`this is piece # ${i}:`, carrot[i])
}
```

  

`function` - a `function` is a block of code that you can execute as many times as you call it. Think of a `function` as an action in real life. For instance, to cut a carrot, you have to perform an action. `Functions` are like verbs because they make your program do something.

```javascript
const fullCarrot = "carrot"
function cutCarrot(carrotParameter, numberOfPieces) {
	const carrotPieces = []
	for (i = 0; i < numberOfPieces; i++) {
		carrotPieces.push(`${fullCarrot} piece ${i}`)
    }
    console.log(carrotPieces)
}
```
  

`function declaration` - to declare a `function` is to define what it does. When you first learn to cut a carrot, someone shows you the actions to take. This is what `function declarations` are like.
```javascript
// You can declare a function with a name 
// using the function keyword
function namedFunction {}
// Or you can declare an unnamed function 
//and store it in a variable. This is called 
// an "anonymous function"
const anonymousFunctionVariable = () => {}
```

  

`function call` - to `call` a function is to tell the program to perform a certain action. If someone tells you to cut a carrot, they are, in a way, doing a `function call`.

```javascript
// lets cut our carrot into 10 pieces by passing in 
// the arguments of the fullCarrot and the number 
// of pieces we want
cutCarrot(fullCarrot, 10)
```

  

`parameter` - a `parameter` are items that a function need in order to perform an action. In a function declaration, you must pass in its `parameter(s)` for it to perform an action. Think of it like passing a carrot and a knife to the function cut. They are “passed in” a function at the function declaration.

```javascript
const fullCarrot = "carrot"
// see carrotParameter and numberOfPieces for example
function cutCarrot(carrotParameter, numberOfPieces) {
	const carrotPieces = []
	for (i = 0; i < numberOfPieces; i++) {
		carrotPieces.push(`${fullCarrot} piece ${i}`)
    }
    console.log(carrotPieces)
}
```

  

`argument` - an `argument` is like a parameter as it is “passed in” a function during a function call; however, an argument will have an action performed on it. In the function cut, the `arguments` will be what you perform an action with. You slice into the carrot. Parameters are different than `arguments` because they are like putting the knife and carrot on the cutting board. An `argument` is like when you pick up the items to perform the action. These items are `arguments` for the cut function upon the function call. EVERYONE in CS confuses arguments and parameters.

```javascript
// lets cut our carrot into 10 pieces by passing in 
// the arguments of the fullCarrot and the number 
// of pieces we want
// our arguments here are fullCarrot (the variable) 
// and  10 (the integer)
cutCarrot(fullCarrot, 10)
```
  
  ## APIs

API - an `API` is an _application programming interface_ which is how two computers communicate with each other. An `API` is a way to pass data from one computer to the next. Think of an `API` like two people writing letters to each other. One person may ask the other person, "can you send me a gift" and then other person replies by sending a present in the mail. 

`CRUD` - `CRUD` operations are actions you can perform against an API. You can `CREATE`, `READ`, `UPDATE` or `DESTROY`, which is what `CRUD` stands for. You can `create` a new item in an API, `read` that same item back, `update` the item, or `delete` it from the API.

`get request` - a `get request` is a type of CRUD operation which allows you to ask an API for its data. In other words, you can READ the data from the API. You can get one item or a list of items from an API. A `GET request` is also a READ operation.


`promise` - a `promise` is a type of object that you receive from an API call. A `promise` is like wrapping paper around a present. In order to get to your present, you need to unwrap the paper first. In order to get to your data, you have to unwrap the promise. 

  

`async function` - `async` makes a function return a promise.

`await` - `await` allows a function to unwrap the promise.

  
  
## Debugging Errors
`undefined` - an `undefined` means that you are requesting something that does not exist. This usually happens if you don’t declare a function or variable or if you try to use indexing or dot notation to get an item that doesn’t exist in your array or object. For instance, if your array only has 100 items and you ask for the 101 item, your JS console will tell you that its `undefined`.
```javascript
// this returns an undefined in the console log
console.log(randomThing)
```
  

`SyntaxError` - this error means there is something wrong with your grammar. If you are not precise with the grammar you use to talk to the computer, it will not understand and tell you that in the JS console. Check your code to ensure you used the correct `syntax` to declare a function or variable, create a string or array, close all your braces, etc.enter link description here

  

`console.log` - this logs any message you would like to see to the JS console. It’s like printing out a receipt at Walmart. The `console` is a great way to debug your code if you notice its not working properly. This is where you will see undefined and Syntax errors.
