// if 2 arr are given as input check if square of 1st arr elements is present in 2nd
//Approach 1 with nested loop - for of & indexOf Big O = O(n^2)


const checkArr = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let val of arr1) {
        var checkIndex = arr2.indexOf(arr1[val] ** 2)
        if (checkIndex == -1) {
            return false;
        } else {
            arr2.slice(checkIndex, 1)
        }
        return true;
    }
}

//console.log(checkArr([2, 5, 4, 3], [14, 25, 16]));

//Approach 2 with object way

const checkArrSquare = (arr1, arr2) => {

    let obj1 = {}
    let obj2 = {}

    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1
    }

    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1
    }
    for (let key in obj1) {
        if (!(key ** 2 in obj2)) {
            return false;
        }
        if ((obj1[key] != obj2[key ** 2])) {
            return false;
        }
    }
    return true

}
// console.log(checkArrSquare([2, 5, 5, 4, 3], [4, 25, 16, 25, 9]));


//Check if 2 string are anagram or not

const checkIFStringAreAnagrams = (str1, str2) => {
    var objStr1 = {}
    var objStr2 = {}

    if (str1.length != str2.length) {
        return false;
    }

    for (let key of str1) {
        objStr1[key] = (objStr1[key] || 0) + 1
    }

    for (let key of str2) {
        objStr2[key] = (objStr2[key] || 0) + 1
    }

    for (let key in objStr1) {
        if (!(key in objStr2)) {
            return false;
        }
        if (objStr1[key] != objStr2[key]) {
            return false
        }
    }

    return true
}

// console.log(checkIFStringAreAnagrams("anurag", "grauna"));


// Double pointers to find unique number in sorted array

const findUniqueVal = (A) => {

    var i = 0;
    for (var j = 1; j < A.length - 1; j++) {
        if (A[i] != A[j]) {
            i++
            A[i] = A[j]
        }
    }
    return (A + " Unique elements are " + (i + 1));


}


// console.log(findUniqueVal([1, 1, 1, 2, 2, 3, 4, 4, 6]))


const sameFrequency = (num1, num2) => {

    var str1 = num1.toString()
    var str2 = num2.toString()

    if (str1.length != str2.length) {
        return false;
    }

    var obj1 = {}
    var obj2 = {}

    for (let val of str1) {
        obj1[val] = (obj1[val] || 0) + 1
    }

    for (let val of str2) {
        obj2[val] = (obj2[val] || 0) + 1
    }

    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            return false
        }
    }

    console.log(obj1)
    console.log(obj2)

    return true;
}

// console.log(sameFrequency(1233, 1233))


function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

//console.log(areThereDuplicates(1, 2, 3, 4, 5, 3));

function areThereDuplicates2(...args) {
    args.sort((a, b) => a < b)
    let start = 0;
    let next = 1;

    while (next < args.length) {
        if (args[start] = args[next]) {
            return true;
        }
        start++;
        next++;
    }

    return false

}
//console.log(areThereDuplicates2(1, 2, 3, 4, 5, 3));



function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3(1, 2, 3, 4, 5, 6));


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
console.log("merge sort " + mergeSort[66, 55, 78, 3])