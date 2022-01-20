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
    return str.replace(before,after);
}
// DNA Pairing
function pairElement(str){
    let finalArr=[];
    let check=function(char){
        switch(char){
            case "A":
            finalArr.push(["A","T"]);
            case "T":
            finalArr.push(["T","A"]);
            case "C":
            finalArr.push(["C","G"]);
            case "G":
            finalArr.push(["G","C"]);
        }
    }
    for(let i=0;i<str.length;i++){
        check(str[i]);
    }
    return finalArr;
}
//Missing Letters