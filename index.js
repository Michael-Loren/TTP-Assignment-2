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


//console.log(arr1.reduce((x,y) => x + y));
//console.log(myReduce(arr, (x,y) => x * y));