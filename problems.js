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
    let finalArr=[];
    while(arr.length>0){
      finalArr.push(arr.splice(0,size));
    }  
    //method 2
    for(let i=0;i<arr.length;i+=size){
        finalArr.push(arr.slice(i,i+size));
    }

    return finalArr;
  }
