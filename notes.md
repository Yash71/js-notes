JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

JS is case-sensitive. One can use camel case to define the variable. In camel case, multiword variable has first letter of variable in lower case and fironest letter of every word as upper case and rest as lower case.

var keyword has a problem with it. One can overwrite the values of a variable if it is declared using var. To prevent this problem one can use let keyword.

One can use const keywordto declare the variables. It has all the features of let keyword + it makes the variable read-only. Variables declared using "const" are generally in upper case (immutable) and other variables can be declared using camel case (mutable)

The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers

Math.floor(5/2)=2 floor function can be used to round up the value to its predecessor

\\ (adds a backslash) \'( adds a single quote) \" (adds a double quote) \n (escape to the newline) \t ( add an extra tabspace)

To find the length of the string, use length function. <string>.length returns the length of <string>

Unlike strings, arrays are mutable even though they are declared using 'const' keyword.

push(): Used to insert element at the end of the array.
pop(): Used to remove element from the end of the array. It returns the pop element which can be stored in a variable for further operations.
shift(): Used to remove element from the beginning of the array. It returns the shifted element which can be stored in a variable for further operations.
unshift(): Used to insert element at the beginning of the array.

Both global and local variables can have same name but precedence of local variable is higher as compared to global variable.

For comparing two different data types, it must convert one type to another. This is known as Type Coercion.
  
Comparison operators that perform type coercion: equality(==), not equal(!=), greater than(>), greater than or equal to(>=), less than(<), less than or equal to(<=).
Comparison operators that do not perform type corercion: strict equality(===), strictly not equal (!==).  
Strict equality(===) doesn't perform type conversion. equality operator(==) performs type conversion.
Typeof(): determines the type of variable or value.  
Strictly not equal (!===) returns false where strictly equal(===) returns true. Strictly not equal won't convert the data types.
  
Objects are very similar to array. Elements can be accessed through properties. They can be used to store data in structured way and can be used for real world entities.
There are two ways to access the properties of an object: dot notation and bracket notation.
Dot notation can be used when the property name is known to the user.
Bracket notation can be used for the property which contain spaces between them. Eg. Obj1["my name"];
dynamic collection of propery name:
  const obj1={
    "dogName"="doberman"
  };
  
  function accessProperty(var){
    
  const firstName="Name";
  return var+firstName;
  }
  
  const property= accessProperty("dog");
  console.log(obj1[property]);

a property can be added or modified using dot or bracket notation.
a property can be deleted using delete <property>.
to search a propery, use hasOwnProperty(<property_name>)
  
  
  
  
  
  
