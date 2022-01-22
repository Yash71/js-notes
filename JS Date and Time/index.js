let today=new Date();
console.log(today); // prints current's time and date
console.log(typeof(today)); // prints object

let otherDate=new Date('09-02-2002 4:32:23') //Date(mm-dd-yyyy);
console.log(otherDate)

console.log(today.getDay()); // prints index of the current day
console.log(today.getHours()); // prints hour
console.log(today.getMinutes()); //prints minutes
console.log(today.getSeconds()); //prints seconds 

today.setDate(2); //sets the date to 2
console.log(today);

today.setMonth(08); //sets the month to september
console.log(today);

today.setFullYear(2002); //sets the year to 2002
console.log(today);