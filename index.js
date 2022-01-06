//foreach
function myEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}
let arr = [1, 4, 9, 16]

//myEach(arr, (item) => console.log(item)); // output: 2 3 4 5


function myMap(arr, callback) {
    let newarr = []; //if push does NOT create a new array object each time, this is more efficient
    for (let i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i]));
    }
    return newarr;

}

//const map1 = myMap(arr, x => x * 2);
//console.log(map1); // output: [ 2, 8, 18, 32 ]






function myFilter(arr, callback) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = myFilter(words, word => word.length > 6);
//console.log(result);




function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

//console.log(mySome(arr, (item) => item % 2 === 0)); //check if has even

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

//console.log(myEvery(arr, (x) => x < 20)); //check if every below 20



function myReduce(arr, callback){
    let r = arr[0];
    for (let i = 1; i < arr.length; i++){
         r = callback(arr[i], r);
    }
    return r;
}


//onsole.log(arr1.reduce((x,y) => x + y));
//console.log(myReduce(arr, (x,y) => x * y));



function myInclude(arr, target){
    for (const i of arr){
        if (i === target){
            return true;
        }
    }
    return false;
}

//for (let i = 0; i < 12; i++)
//console.log(myInclude([2,3,4,5,6,7,8], i))


function myIndexOf(arr, target){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target){
            return i;
        }
    }
    return -1;
}

//console.log(myIndexOf([2,3,7,54,54,13,6,2,23,25],3));



function myPush(arr, val){
    let len = arr.length;
    arr[len] = val;
    len++;
    arr.length = len;
    return arr;

}

//console.log(myPush([2,3], 5));


function myLastIndex(arr, target){
    for (let i = arr.length; i >= 0; i--){
        if (arr[i] == target){
            return i;
        }
    }
    return -1;
}

//console.log(myLastIndex([2,3,7,54,54,13,6,2,23,25],54));

function grabKeys(arr){
    let ret = [];
    for (const i in arr){
        ret.push(i);
    }
    return ret;
}

let objs = {a : 3, b : 6, c : 9};
//console.log(grabKeys(objs));


function grabValues(arr){
    let ret = [];
    for (const i in arr){
        ret.push(arr[i]);
    }
    return ret;
}
console.log(grabValues(objs));
