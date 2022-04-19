//Binary search in js
function binarySearch(arr, elem) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor(left + right / 2);

    while (arr[middle] !== elem && left <= right) {
        if (elem < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor(left + right / 2);

    }
    return arr[middle] == elem ? middle : -1
}

console.log(binarySearch([2, 5, 44, 66, 7, 5, 23, 65, 78, 55], 5));

const tree = {
    "Jane Mayer": ["Baraka Tumuti", "Sarah Lee", "David Heinsburg"],
    "Baraka Tumuti": ["Abida Begum"],
    "Sarah Lee": ["David Gibbly", "Kelsey Hamming"],
    "David Heinsburg": [],
    "Abida Begum": ["Dave Bunt", "James Ray"],
    "David Gibbly": [],
    "Kelsey Hamming": [],
    "Dave Bunt": [],
    "James Ray": [],
}



function sortTree(tree, str) {
    var result = [];
    for (key in tree) {
        //  console.log("keys :" + key)
        if (str == key) {
            result = result.concat(tree[key]);
        }
        if (result.length > 0) {
            for (i = 0; i < result.length; i++) {
                if (result[i] === key) {
                    var temp = key.toString()
                    result = result.concat(tree[temp]);
                }
            }
        }
    }
    return result;
}
console.log(sortTree(tree, 'Jane Mayer'));