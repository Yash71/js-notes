# Javascript
JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

Variable names can be made up of numbers, letters, and $ or _, *but may not contain spaces or start with a number.

JS is case-sensitive. One can use camel case to define the variable. In camel case, multiword variable has first letter of variable in lower case and fironest letter of every word as upper case and rest as lower case.

```var``` keyword has a problem with it. One can overwrite the values of a variable if it is declared using var. To prevent this problem one can use let keyword.

One can use ```const``` keyword to declare the variables. It has all the features of ```let``` keyword + it makes the variable read-only. Variables declared using ```const``` are generally in upper case (immutable) and other variables can be declared using camel case (mutable).
Arrays with const declaration are mutable. One can use change an object present in the array but cannot use the same variable identifier to point it to a different array.

The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers

```Math.floor(5/2)=2``` floor function can be used to round up the value to its predecessor

```\\``` (adds a backslash) ```\'```( adds a single quote)``` \" ```(adds a double quote) ```\n``` (escape to the newline) ```\t``` ( add an extra tabspace)

To find the length of the string, use length function. ```<string>.length``` returns the length of <string>

Unlike strings, arrays are mutable even though they are declared using 'const' keyword.
<hr>
  
```push()```: Used to insert element at the end of the array. <br>
```pop()```: Used to remove element from the end of the array. It returns the pop element which can be stored in a variable for further operations. <br>
``` shift()```: Used to remove element from the beginning of the array. It returns the shifted element which can be stored in a variable for further operations.<br>
``` unshift()```: Used to insert element at the beginning of the array.
<hr>
Both global and local variables can have same name but precedence of local variable is higher as compared to global variable.
<hr>
For comparing two different data types, it must convert one type to another. This is known as Type Coercion.
  
Comparison operators that perform type coercion: equality(```==```), not equal(```!=```), greater than(```>```), greater than or equal to(```>=```), less than(```<```), less than or equal to(```<=```). <br>
Comparison operators that do not perform type corercion: strict equality(```===```), strictly not equal (```!==```).  
Strict equality(===) doesn't perform type conversion. equality operator(==) performs type conversion.
```Typeof()```: determines the type of variable or value.  
Strictly not equal (```!==```) returns false where strictly equal(```===```) returns true. Strictly not equal won't convert the data types.
<hr>
  
Objects are very similar to array. Elements can be accessed through properties. They can be used to store data in structured way and can be used for real world entities.
There are two ways to access the properties of an object: dot notation and bracket notation.
Dot notation can be used when the property name is known to the user.
Bracket notation can be used for the property which contain spaces between them. Eg. ```Obj1["my name"];```
dynamic collection of propery name:
  ``` JS 
  const obj1={
    "dogName"="doberman"
  };
  
  function accessProperty(var){
    
  const firstName="Name";
  return var+firstName;
  }
  
  const property= accessProperty("dog");
  console.log(obj1[property]);
```
a property can be added or modified using dot or bracket notation.
a property can be deleted using ```delete <property>```.
to search a propery, use ```hasOwnProperty(<property_name>)```

``` JS records[id][prop] = records[id][prop] || []; ```// this is called shortcircuit evaluation
  Here the prop array is initialised if it does not exists and then the next line is executed.
<hr>  
difference between while and do while loop: **do while loop will always execute once at any cost.**
<hr>
  
```  Math.random()```: generates a random decimal number between 0(inclusive) and 1(exclusive). It can return 0 but never returns 1
To generate whole numbers from 0 to 9: Use Math.random() and multiply it with 10. Later use Math.floor to round down the number to nearest whole number
   ```  Math.floor(Math.random()*10);  // generates 0,1,2,3,4,5,6,7,8,9```
  
To generate a random whole number between a given range, use the following formula:
   ```  Math.floor(Math.random()*(max-min+1))+min; ```
<hr>
  
``` JS  parseInt()```: To parse a string and return an integer 
``` JS  parseInt(string, radix) ```: radix specifies the base of the number in the string. It can be between 2 and 36  
<hr>  
Ternary Operators can be used for nested if-else statments. 
  
## ES6 
``` Object.freeze() ```: to prevent data mutation. An attempt to change the object will be rejected with an error thrown if the script is running in strict mode.
<hr>
  
Inline function declaration:
  ``` JS
  const myFunc = function() {
  const myVar = "value";
  return myVar;
}
  ```
Arrow function declaration:
  ``` JS 
  const myFunc = () => {
  const myVar = "value";
  return myVar;
}
  ```
  when there is no function body, one can omit the return keyword and the curly brackets.
    ``` JS const myFunc = () => "value"; ```
One can pass the parameters in arrow functions. For a single parameter brackets can be omitted
  ``` JS 
  const doubler = item => item * 2;
  doubler(4);
  ```
  <hr>
  
One can use the rest parameter to take a variable number of arguments. These arguments are stored in array that can be accessed later inside the function.
  ``` JS
  function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));
  ```
spread operator is used to expand arrays and other exxpressions in places where multiple parameters or elements are expected.
  ``` JS
  const arr = [6, 89, 3, 45];
  const maximus = Math.max(...arr);
  ```
It only works in-place, like in an arugment to a function or in an array literal. The following code will not work:
  ``` JS
  const spreaded=...arr;
  ```
  <hr>
  
Destructuring assignment is used for neatly assigning values taken directly from an object.
  ``` JS
  const user = { name: 'John Doe', age: 34 };
  const name = user.name; //Joh Doe
  const age = user.age; //34
  
  const{name,age}=user; // John Doe, 34
  ```
It can also be used to assign the object values to other variables
  ```JS
  const user = { name: 'John Doe', age: 34 }; 
  const { name: userName, age: userAge } = user; // get the value of user.name and assign it to variable userName
  ```
Destructuring arrays:
  ```JS
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b);
  ```
 commas can be used to reach the desired index:
  ```JS
  const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c); //prints 1,2,5
  ```
  <hr>
  
 strings can be created using template literals
  template literals allows you to create multi-line strings and to use string interpolation features to creat strings
  ```JS
  const person = {
  name: "Zodiac Hasbro",
  age: 56
  };

  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

  console.log(greeting);
  ```
 defining functions within objects:
  ``` JS
  const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  }; 
  ```
  <hr>
  
 Getters functions are meant to simply return the value of an object's private variable to the user without the user directly accessing the private variable.<br>
 Setter functions are meant to modify the value of an object's private variable beased on the value passed into the setter function.
  ``` JS
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
  ```
  <hr>
  
To use a function in several different JS files, you need to export it.
  ``` JS
 export const add = (x, y) => {
  return x + y;
}
```
export default: this can be used if only one value is being exported from a file. It is also used to create a fallback value for a file or a module.
  ```JS
  export default function add(x, y) {
    return x + y;
  }
  export default function(x, y) {
    return x + y;
  }
  ```
  only one value can be a default export in each module or file.
  it cannot be used with var, let or const
To import and exported function from a file, use the following syntax:
  ``` JS
  import { add } from './math_functions.js';
  ```
Use * to import everything from a file
  ``` JS
  import * as myMathModule from "./math_functions.js";
  ```
  To access the functions using the given object
  ``` JS
  myMathModule.add(2,3);
  myMathModule.subtract(3,1);
  ```
To import a default export, use the following syntax:
  ```JS
  import add from "./math_functions.js"; //here add is not a function but a variable name which can be changed by user preference.
  ```
<hr>
  
Promise in JS is a constructor functions, so you need to use the new keyword to create one. 
It takes two arguemnts, with two parametes - ```resolve``` and ```reject```
  ```JS
  const myPromise=new Promise((resolve,reject)=>{
  
  });
  ```
Promise has three states: ```pending```, ```fulfilled```, ```rejected```
```resolve``` parameter is used when you want your promise to succeed.
```reject``` paramtere is used when you want it to fail.
  ``` JS
  const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
  });
  ```
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the ```then``` method. The ```then``` method is executed immediately after your promise is fulfilled with resolve.  
  ```JS 
  myPromise.then(result => {
  
  });
  ```
```catch``` is the method used and executed immediately after a promise's ```reject``` method is called.
  ``` JS
  myPromise.catch(error=>{
  
  });
  ```
  <hr>
  
## Regular Expressions
Regular expressions are used in programming languages to match parts of strings. If you want to find the word ```the``` in the string ```The dog chased the cat```, you can use ```\the```.
  
```.test()```  method takes regex, applies it to a string and returnds ```true``` or ```false```.
  ``` JS
  let testStr = "freeCodeCamp";
  let testRegex = /Code/;
  testRegex.test(testStr); //returns true
  ```  
To search for multiple substrings, one can use ```|``` operator.
  ``` JS
  let petString="James has a pet cat.";
  let petRegex=/dog|cat|bird|fish/;
  let result=petRegex.test(petString);
  ```
The above ```test``` methods won't return true if there is a difference in the case( uppercase or lowercase). To ignore the case, use  ```i``` flag.
  ``` JS
  let myString="freeCodeCamp";
  let fccRegex=/freecodecamp/i;
  let result=fccRegex.test(myString);
  ```
<hr>
  
One can laso extract the actual matches you found with the ```.match()``` method.
Apply the moethod on a string and pass ion the regex inside the parentheses.  
  ``` JS
  "Hello, World!".match(/Hello/); // returns ["Hello"]
  let ourStr = "Regular expressions";
  let ourRegex = /expressions/;
  ourStr.match(ourRegex); // returns ["expressions"]
  ```
  <hr>
  
To search or extract a pattern more than once, you can use the ```g``` flag.
  ``` JS
  let testStr="Repeat, Repeat, Repeat";
  let ourRegex=/Repeat/g;
  testStr.match(ourRegex); // returns ["Repeat", "Repeat", "Repeat"]
  ```
  <hr>
  
To search for similar patterns, use wildcard character ```.```
  ``` JS
  let humStr = "I'll hum a song";
  let hugStr = "Bear hug";
  let huRegex = /hu./;
  huRegex.test(humStr); //returns true
  huRegex.test(hugStr); //returns true
  ```
  <hr>
  
One can create a regex with character classes which allows us to define a group of characters to match by placing them inside square brackets.
  ``` JS
  let bigStr = "big";
  let bagStr = "bag";
  let bugStr = "bug";
  let bogStr = "bog";
  let bgRegex = /b[aiu]g/;
  bigStr.match(bgRegex); //returns ["big"]
  bagStr.match(bgRegex); //returns ["bag"]
  bugStr.match(bgRegex); //returns ["bug"]
  bogStr.match(bgRegex); //returns null
  ```
To match cahracters sets within a given range, one can use the hypen ```-``` character.
  ``` JS
  let catStr = "cat";
  let batStr = "bat";
  let matStr = "mat";
  let bgRegex = /[a-e]at/;
  catStr.match(bgRegex); // returns ["cat"]
  batStr.match(bgRegex); // returns ["bat"]
  matStr.match(bgRegex); // returns null
  ```
To create a set of characters which don't match use caret ```^``` character after the first opening square bracket and before the characters you don't want to match.  
  ``` JS
 let quoteSample = "3 blind mice.";
 let myRegex = /[^1-9aeiou]/ig; 
 let result = quoteSample.match(myRegex); 
  ```
To match characters that occur zero or more times use ```*```   
 ``` JS
 let soccerWord = "gooooooooal!";
 let gPhrase = "gut feeling";
 let oPhrase = "over the moon";
 let goRegex = /go*/;
 soccerWord.match(goRegex); //returns ["goooooooo"]
 gPhrase.match(goRegex); // returns ["g"]
 oPhrase.match(goRegex); //returns null
 ```
In regex, greedy match find the longest possible part of string that fits the regex patern and returns it as a match.
lazy mathc finds the smallest possible part of the string that satisfies the regex pattern.
Regex expressions are by default greedy but to change it to lazy matching use ```?```
  <hr>
  
Caret character ```^``` inside character set creates a neagted character set. Outside the character set, is is used to search for patterns at the beginning of the strings
  ``` JS
  let firstString = "Ricky is first and can be found.";
  let firstRegex = /^Ricky/;
  firstRegex.test(firstString); // returns true
  let notFirst = "You can't find Ricky now.";
  firstRegex.test(notFirst) // returns false
  ```
Dollar ```$``` character can be used to search for patterns at the end of the strings
  ``` JS
  let theEnding = "This is a never ending story";
  let storyRegex = /story$/;
  storyRegex.test(theEnding);
  let noEnding = "Sometimes a story will have to end";
  storyRegex.test(noEnding);
  ```
  <hr>
  
The closes character class in JS to match the alphabet is ```\w``` which is equal to ```[A-Z-a-z-0-9_]```
  ``` JS
  let longHand = /[A-Za-z0-9_]+/;
  let shortHand = /\w+/;
  let numbers = "42";
  let varNames = "important_var";
  longHand.test(numbers); // returns true
  shortHand.test(numbers); // returns true
  longHand.test(varNames); // returns true
  longHand.test(varNames); // returns true
  ```
  <hr>
  
To search for opposite of alphanumerics use ```\W```
  ``` JS
  let shortHand = /\W/;
  let numbers = "42%";
  let sentence = "Coding!";
  numbers.match(shortHand); // returns ["%"]
  sentence.match(shortHand); // returns ["!"]
  ```
<hr>
  
For digit characters use ```\d```
For non-digit characters use ```\D``` ([^0-9])  
  
<hr>  

To match white spaces use ```\s```. This contains the character set of return, tab, form feed, and new line characters [\r\t\f\n\v]
To match non-white spaces use ```\S``` [^\r\t\f\n\v]
  
<hr>
  
To match a certain range of patterns, use quantity specifiers with curly brackets ```{ ```and ```}```   
  ``` JS
  let A4 = "aaaah";
  let A2 = "aah";
  let multipleA = /a{3,5}h/;
  multipleA.test(A4); // returns true since a appears 4 times which lies in the range of 3 and 5
  multipleA.test(A2); //return false since a appears only 2 times which doesn't lie in the range of 3 and 5
  ```
To specify the lower number of patterns, keep the first number followed by a comma
  ``` JS
  let A4 = "haaaah";
  let A2 = "haah";
  let A100 = "h" + "a".repeat(100) + "h";
  let multipleA = /ha{3,}h/;
  multipleA.test(A4); //returns true
  multipleA.test(A2); //returns false
  multipleA.test(A100); //returns true
  ```
To specify the certain number of matches, just use a single number between the braces.
  ``` JS
  let A4 = "haaaah";
  let A3 = "haaah";
  let A100 = "h" + "a".repeat(100) + "h";
  let multipleHA = /ha{3}h/;
  multipleHA.test(A4); // returns false
  multipleHA.test(A3); // returns true
  multipleHA.test(A100); // returns false
  ```
  <hr>
  
To search for the parts of the patterns if they exist or not, use ```?``` .
**When using this symbol, the previous element is optional**    
  ``` JS
  let american = "color";
  let british = "colour";
  let rainbowRegex= /colou?r/;
  rainbowRegex.test(american); // returns true
  rainbowRegex.test(british); // returns true
 ``` 
 <hr>
  
Lookaheads are patterns to look-ahead in your string to check for patterns further along. There are two types of look-aheads: positive and negative lookahead
A positive lookahead will look to make sure the elemen in the search pattern is there, but won't actually match it. ```(?=...)```, ```...```  is the required part that is not matched.
A negative lookahead will look to make sure the element in the search pattern is not there. ```(?!...)```
  ``` JS
  let quit = "qu";
  let noquit = "qt";
  let quRegex= /q(?=u)/;
  let qRegex = /q(?!u)/;
  quit.match(quRegex);
  noquit.match(qRegex);
  ```
  <hr>
  
To check for the group of characters using a regualar expression, use parentheses.
  ``` JS
  let testStr = "Pumpkin";
  let testRegex = /P(engu|umpk)in/;
  testRegex.test(testStr);
  ```
  <hr>
  
To replace a string use ```.replace()```
  ``` JS
  let wrongText = "The sky is silver.";
  let silverRegex = /silver/;
  wrongText.replace(silverRegex, "blue");    
  ```
  <hr>
  
## Basic Data Structures
  
TO remove consecutive elements from anywhere in the array use ```splice()``` . 
  
Splice accepts 3 parameters, out which 2 are integers. 1st parameter represents the starting index from where the removal will begin and the 2nd parameter represents the number of elements to be removed.
  ``` JS
  let array = ['today', 'was', 'not', 'so', 'great'];
  array.splice(2, 2); // returns ['today', 'was', 'great']
  ```
  
The third parameter of ```splice``` can be used to add elements to the index from where the element were removed
  ``` JS
  const numbers = [10, 11, 12, 12, 15];
  const startIndex = 3;
  const amountToDelete = 1;

  numbers.splice(startIndex, amountToDelete, 13, 14);
  console.log(numbers);
  ```
<hr>

To extract elements from the array, use ```slice()```. It accepts two parameters: startIndex and endIndex. The endIndex won't be included in extraction.
  ``` JS
  let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
  let todaysWeather = weatherConditions.slice(1, 3); // returns ['snow', 'sleet']
  ```
To insert the elements of one array into an arbitrary position in another array
  
  ``` JS
  // arr1=[1,2,3] arr2=[4,5]
  let finalArr=arr2.slice();
  for(let i=0;i<arr1.length;i++){
    finalArr.splice(n,0,arr1[i]);
    n++;                                    
  }
  ```
<hr>
  
To copy the array to another array, use ```...``` opeartor
  ``` JS
  let thisArray = [true, true, undefined, false, null];
  let thatArray = [...thisArray];
  ```
  <hr>
  
To check if the element in the array exists or not use ```indexOf()```. This would return the position of the element or -1 if its absent.
  ``` JS
  let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
  fruits.indexOf('dates'); // returns 2
  fruits.indexOf('oranges'); // returns -1
  fruits.indexOf('pears'); // returns 1
  ```
  <hr>
  
To itterate through the keys of the object, use for...in loop
  ``` JS
  for(let user in users){
    console.log(user);
  }
  ```
  <hr>
  
To generate an array which contains all the keys stored in the object, use ```Object.keys(<object name>)```
  ``` JS
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  function getArrayOfUsers(obj) { 
    let array=Object.keys(obj);
    return array;
  }
  console.log(getArrayOfUsers(users));
  ```
  <hr>
  
To sort an array in ascending order
  ``` JS
  arr.sort((curr,next) => curr-num);
  ```
  
To sort an array in alphabetical order
  ``` JS
  function alphabetical(arr){
    arr.sort(function(a,b){
      return a===b ? 0:a>b?1:-1;
    });
  return arr;
  }
  ```
  
## Object Oriented Programming  

Dot notation can be a problem while accessing the the object's property. If the variable name changes, any code referencing the original name would need to be changed for proper functioning. To avoid this, use ```this``` keyword.
  ``` JS
  let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
  };
  ```
  <hr>
  
Constructors are functions that create new objects.
Constructors are defined with a capitalized name and use keyword ```this``` to set properties of the object they will create.  
  
```new``` operator is used when calling a constructor. This creates a new instance of ```Bird``` called ```blueBird```.
  ``` JS
  function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }
  let blueBird = new Bird();
  ```
```instanceof``` allows to compare an object to a constructor, returning ```true``` or ```false``` based on whether the object is created with the constructor or not.
  ``` JS
  let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  let crow = new Bird("Alexis", "black");
  crow instanceof Bird;  // returns true
  ```
  <hr>
  
There are two kinds of properties: own properties and prototype properties. Own props. are defined directly on the object instance itself. Prototype properties are defined on the ```prototype```.
  
Properties in the ```prototype``` are shared among all instance of an object
  ``` JS
  Bird.prototype.numLegs=2;
  console.log(duck.numLegs);
  console.log(canary.numLegs);
  ```
```constructor``` property is a reference to the constructor function that created the instance. It's possible to check for this property to find out what kind of object it is. This property can be overwritten.
  ``` JS
  function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
      return true;
    } else {
     return false;
   }
  }
  ```
  <hr>
  
A more efficient way to set the ```prototype``` to a new object that already contains the properties.  
  ``` JS
  function Dog(name) {
  this.name = name;
  }
  Dog.prototype = {
    numLegs:2,
    eat:function(){
      console.log("nom nom nom");
    },
    describe:function(){
      console.log("My name is "+this.name);
    }
  };
  ```
The side effect of manually setting the prototype to a new object is: **it ereases the ```constructor``` property**
If a prototype is manually assigned to the object, define ```constructor``` property.
  ``` JS
  Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
       console.log("My name is " + this.name); 
    }
  };
  ```
  <hr>
  
an object inherits its ```prototype``` directly from the constructor. This can be show with the ```isPrototypeOf``` method.
  ``` JS
  function Bird(name) {
    this.name = name;
  }
  let duck = new Bird("Donald");
  Bird.prototype.isPrototypeOf(duck); // returns true
  ```
All objects in JS have a ```prototype```. An object's prototype itself is an object.
  ``` JS
  function Bird(name) {
    this.name = name;
  }
  typeof Bird.prototype; // returns object
  ```
  The prototype of ```Bird.prototype``` is ```Object.prototype```
  ``` JS 
  Object.prototype.isPrototypeOf(Bird.prototype);
  ```
```hasOwnProperty``` method is defined in ```Object.prototype```, which can be accessed by ```Bird.prototype```, which can be accessed by ```duck```. This is an example of ```prototype``` chain.

<hr>

To inherit the properties from a ```supertype/parent```, one can use inheritance.<br>
**first**, create an instance of the ```supertype```
  ``` JS
  let animal=new Animal();
  ```
Instead of using above syntax for inheritance, use the following:
  ``` JS
  let animal=Object.create(Animal.prototype);
  ```
**second**, set the ```prototype``` of the child(subtype) to be an instance of parent(supertype)
  ``` JS
  Bird.prototype=Object.create(Animal.prototype);
  ```
When an object inherits its ```prototype``` from another object, it also inherits the supetype's constructor property.
  ``` JS
  function Bird() { }
  Bird.prototype = Object.create(Animal.prototype);
  let duck = new Bird();
  duck.constructor 
  ```
```duck``` and all instances of ```Bird``` should show that they were constructed by ```Bird``` and not ```Animal```. To change it, do the manual setting
  ``` JS
  Bird.prototype.constructor=Bird;
  duck.constructor
  ```
  <hr>
  
For unrelated objects, use *mixins*. It allows other objects to use a collection of functions.
  ``` JS
  let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };
  let bird = {
    name: "Donald",
    numLegs: 2
  };

  let plane = {
    model: "777",
    numPassengers: 524
  };

  flyMixin(bird); // prints Flying, wooosh!
  flyMixin(plane); // prints Flying, wooosh!
  ```
  <hr>
  
A common pattern in JS is to execute a function as soon as it is declared
  ``` JS
  (function () {
    console.log("Chirp, chirp!");
  })();
  ```
  The two parentheses at the end cuase it to be immediately invoked. This pattern is known as an immediately invoked function expression or IIFE

IIFE can be used to group related functionality into a single object or module.
  ``` JS
  let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
  let funModule= (function(){
    return{
      isCuteMixin:function(obj){
        obj.isCute=function(){
          return true;
        };
      },
      singMixin:function(obj){
        obj.singMixin=function(){
          console.log("Singing to an awesome tune");
        };
      }
    }
  })();
  ```
  
## Functional Programming
It is about: Isolated functions(there is no dependence on state of progam, which includes global variables that are subject to change), pure functions (the same input always give the same output), Functions with limited side effect (any mutations to the state of program outside the function are carefully controlled)

### Callbacks
  
Functions that are slipped or passed into another functoin to decide the invocation of that function.
<hr>
  
### First Class Functions  
functions that can be assigned to a variable, passed into another functoin or returned from anothe function. All functions are first class functions  
<hr>
  
### High Order Functions, 
the functions that take a function as an argument, or return a function as a return value

Various operations like increment and decrement mutate the value of the variable, hence they should be avoided as much as possible.  
   
Another principle of functional progamming is to always declare your dependecies explicitly. If a function depends on a variable or object, then pass that variable or object directly into the function as an argument.

  <hr>
  
the ```map``` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.  

```filter``` calls a function on each element of an array and returns a new array containing only the elements for which that function returns ```true```. It does this without mutating the original array.
  
```concat``` joins two arrays and returns a new array without modifying either of the two arrays.
  
```reduce``` method iterates over each item in an array and returns a single value which is achieved via a callback function that is called on each iteration.
In addition to callback function, ```reduce``` takes accumulator as an extra parameter. If this parameter is not given, then the first iteration is skipped and the second iteration gets passed.  
  
```split``` method splits  string into an array of strings.

  <hr>
  
```every``` method checks if every element satisfies a given criteria. If the condition is met for every element, it returns ```true``` whereas if a single element fails to satisfy the criteria, it returns ```false```.  
  ``` JS
  const numbers = [1, 5, 8, 0, 10, 11];
  numbers.every(function(currentValue) {
    return currentValue < 10; // returns false
  });
  ```

```some``` method checks if any element satisfies a given criteria. If the condition is met for a single element, it returns ```true``` els it returns ```false```
  ``` JS
  const numbers = [10, 50, 8, 220, 110, 11];
  numbers.some(function(currentValue) {
    return currentValue < 10;
  });
  ```
  <hr>
  
The arity of a function is the number of arguments it requires. Currying a function means to convert a functoin of N arity into N functions of arity 1.
  ``` JS
  function unCurried(x, y) {
    return x + y;
  }
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  const curried = x => y => x + y
  curried(1)(2)
  ```
This can be useful if you can't supply all the arguments to a function at one time. You can save each each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.
  
Parity application can be described as applying a few arguments to a function at a time and returning another function that is applied to mroe arguments.
  ``` JS
  function impartial(x, y, z) {
    return x + y + z;
  }
  const partialFn = impartial.bind(this, 1, 2);
  partialFn(10); // returns 13
  ```
  

  
  
