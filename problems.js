// Title Case a Sentence
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replace(updatedTitle[st].charAt(0), updatedTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
}
// Splice and slice
function frankenSplice(arr1, arr2, n) {
    //method 2
    let finalArr = [];
    for (let i = 0; i < n; i++) {
        finalArr.push(arr2[i]);
    }
    finalArr.push(arr1.slice(0,));
    finalArr.push(arr2.slice(n,));
    return finalArr;

    //method 2
    let finalArr = [...arr2];
    finalArr.splice(n, 0, ...arr1);
    return finalArr;

}
// Falsy Bouncer
function bouncer(arr) {
    //method 1
    let finalArr = [];
    for (let i = 0; i < arr.length; i++)
        if (arr[i]) finalArr.push(arr[i]);
    return finalArr;
    //method 2
    return arr.filter(Boolean);
}
// Wherre do I belong  
function getIndexToIns(arr, num) {
    arr.push(num);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr.indexOf(num);

    //method 2
    let index = arr.sort(curr, next => curr - num).indexOf(currNum => num <= currNum);
    return index === -1 ? arr.length : index;
}
//Mutations
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
//Chunky Monkey
function chunkArrayInGroups(arr, size) {
    // method 1
    let finalArr = [];
    while (arr.length > 0) {
        finalArr.push(arr.splice(0, size));
    }
    //method 2
    for (let i = 0; i < arr.length; i += size) {
        finalArr.push(arr.slice(i, i + size));
    }

    return finalArr;
}
// Wherefore art thou
function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source);
    //method 1
    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
    //method 2
    return collection.filer(function (obj) {
        for (let i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) && obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
            return true;
        }
    });
}
//Spinal Test Case
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
// Pig Latin
function translatePigLatin(str) {
    let testRegex = /^[^aeiou]+/;
    let consonants = str.match(testRegex);
    return consonants !== null ? str.replace(testRegex, "").concat(consonants).concat("ay") : str.concat("way");
}
// Search and Replace
function myReplace(str, before, after) {
    // method 1
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1);
    }
    else {
        after = after[0].toLowerCase() + after.substring(1);
    }
    return str.replace(before, after);
    //method 2
    let beforeIndex = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}
// DNA Pairing
function pairElement(str) {
    let finalArr = [];
    let check = function (char) {
        switch (char) {
            case "A":
                finalArr.push(["A", "T"]);
            case "T":
                finalArr.push(["T", "A"]);
            case "C":
                finalArr.push(["C", "G"]);
            case "G":
                finalArr.push(["G", "C"]);
        }
    }
    for (let i = 0; i < str.length; i++) {
        check(str[i]);
    }
    return finalArr;
}
//Missing Letters
function fearNotLetter(str) {
    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
//Sorted Union
function uniteUnique(arr) {
    let finalArray = [];
    for (let i = 0; i < arguments.length; i++) {
        let arrayArguments = arguments[i];

        for (let j = 0; j < arrayArguments.length; j++) {
            if (finalArray.indexOf(arrayArguments[j]) < 0) {
                finalArray.push(arrayArguments[j]);
            }
        }
    }
    return finalArray;
}
//Sorted Union
function uniteUnique(arr) {
    let finalArray = [];
    for (let i = 0; i < arguments.length; i++) {
        let arrayArguments = arguments[i];

        for (let j = 0; j < arrayArguments.length; j++) {
            if (finalArray.indexOf(arrayArguments[j]) < 0) {
                finalArray.push(arrayArguments[j]);
            }
        }
    }
    return finalArray;
}
//Convert HTML Entities
function convertHTML(str) {
    let array = str.split("");
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case "<":
                array[i] = "&lt;";
                break;
            case ">":
                array[i] = "&gt;";
                break;
            case "'":
                array[i] = "&apos;";
                break;
            case '"':
                array[i] = "&quot;";
                break;
            case "&":
                array[i] = "&amp;";
                break;
        }
    }
    return array.join("");
}
// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    //method 1
    if (num <= 0) return 0;
    const arrFib = [1, 1];
    let nextFib = 0;
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
    //method 2
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
// Sum All Primes
function sumPrimes(num) {
    let prime = Array.from({ length: n + 1 }, (_, i) => true);
    for (let p = 2; p * p <= num; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= num; i += p) {
                prime[i] = false;
            }
        }
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (prime[i] == true) {
            sum += i;
        }
    }
    return sum;
}
// Smallest Common Multiple
function smallEstCommons(arr) {
    // method 1
    let maxDivisor = Math.max(arr[0], arr[1]);
    let minDivisor = Math.min(arr[0], arr[1]);
    let divisorRange = maxDivisor - minDivisor + 1;

    let maxMultiple = 1;
    for (let i = minDivisor; i <= maxDivisor; i++) {
        maxMultiple *= i;
    }
    for (let multiple = maxDivisor; multiple <= maxMultiple; multiple += maxDivisor) {
        let actualDivisors = 0;
        for (let i = minDivisor; i <= maxDivisor; i++) {
            if (multiple % i === 0) {
                actualDivisors += 1;
            }
        }
        if (actualDivisors === divisorRange) {
            return multiple;
        }
    }
    // method 2
    let multiple = maxDivisor;
    for (let i = maxDivisor; i >= minDivisor; i--) {
        if (multiple % i != 0) {
            multiple += maxDivisor;
            i = maxDivisor;
        }
    }
    return multiple;
}
// Drop it
function dropElements(arr, func) {
    // method 1
    let originalLength = arr.length;
    for (let i = 0; i < originalLength; i++) {
        if (func(arr[0]) == false) {
            arr.shift();
        }
        else {
            break;
        }
    }
    return arr;
    // method 2
    while (arr.length > 0 || !func(arr[0])) {
        arr.shift();
    }
    return arr;

    //method 3
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
// Steamroller
function steamrollArray(arr) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            finalArray.push(...streamrollArray(arr[i]));
        }
        else {
            finalArray.push(arr[i]);
        }
    }
    return finalArray;
}
// Binary Agents
function binaryAgent(str) {
    return str.split(" ").map(item => String.fromCharCode(parseInt(item, 2))).join("");
}
// Everything Be True
function truthCheck(collection, pre) {
    //method 1
    let counter = 0;
    for (let element in collection) {
        if (collection[element].hasOwnProperty(pre) && Boolean(collection[element][pre])) {
            counter++;
        }
    }
    return counter == collection.length;
    // method 2
    return collection.every(element => element.hasOwnProperty(pre) && Boolean(element[pre]));
}
// Arguments Optimal
function addTogether() {
    const [firstArg, secondArg] = arguments;
    if (typeof (firstArg) !== "number") return undefined;
    if (secondArg === undefined) return second => addTogether(firstArg, secondArg);
    if (typeof (secondArg) === "number") return firstArg + secondArg;
}
// Make a Person
const Person = function (firstAndLast) {
    let fullName = firstAndLast;
    this.setFirstName = function (first) {
        fullName = first + " " + fullName.split(" ")[1];
    };
    this.setLastName = function (last) {
        fullName = fullName.split(" ")[0] + " " + last;
    };
    this.setFullName = function (firstAndLast) {
        fullName = fullName = firstAndLast;
    };
    this.getFullName = function () {
        return fullName;
    };
    this.getFirstName = function () {
        return fullName.split(" ")[0];
    }
    this.getLastName = function () {
        return fullName.split(" ")[1];
    }

};
// Map the Debris
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function (obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };
    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
}