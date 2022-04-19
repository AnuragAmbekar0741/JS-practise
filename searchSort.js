function linearSearch(arr, val) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == val) return i;
    }
    return -1;
}
//console.log(linearSearch([8, 2, 3], 8))


//Binary search algorithm
//O(n) = O(logn)
function binarySearch(arr, elem) {
    let left = arr[0];
    let right = arr.length - 1;
    let middle = Math.floor(left + right / 2);

    while (arr[middle] !== elem && left <= right) {
        if (elem < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor(left + right / 2);

    }
    return arr[middle] == elem ? middle : -1
}

//console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))


//Naive sub string search
//O(n) = n^2
function strSearch(str, sub) {
    var subCount = 0;
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < sub.length; j++) {
            if (sub[j] != str[i + j]) break
            if (j === sub.length - 1) subCount++
        }
    }
    return subCount
}

//console.log(strSearch("Hello world", "l"))


//Sorting Algorithms

//Bubble Sort

function bubbleSort(arr) {
    var noSwaps = true;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

//console.log(bubbleSort([23, 44, 11, 66, 39, 19, 8, -1]))

//Selection sort

//  

//console.log(selectionSor([2, 4, 6, 1, 3, 9]))







function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        var min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        if (i != min) {
            var temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr;
}


////console.log(selectionSort([2, 4, 6, 1, 3, 9]))


function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
            console.log(arr)
        }
        arr[j + 1] = currentVal;
        console.log(arr)
    }
    return arr;
}

//console.log(selectionSort([1, 4, 8, 3, 9, 6]))


// Intermidiate sorting algorithms

//Merging and sorting two sorted arrays
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        }
        else {
            result.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

//console.log(merge([2, 5, 7, 8, 44], [1, 4, 6, 9, 33]))
function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([2, 76, 1, 56, 44, 33, 66, 21, 10, 5, 3, 5, 4]))




function pivot(A, start = 0, end = A.length - 1) {

    var pivot = A[start];
    var swapIndex = start;

    function swap(arr, i, j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    for (i = start; i < end; i++) {
        if (pivot > A[i]) {
            swapIndex++
            swap(A, i, swapIndex)
            console.log(A)
        }
    }
    swap(A, start, swapIndex)
    return swapIndex;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))  //3

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
