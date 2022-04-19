function factorialIteration(num) {
    var factorial = 1;
    for (i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

//console.log(factorialIteration(4));

function factorialRecursion(num) {
    if (num == 1) return num;
    return num * factorialRecursion(num - 1);
}
//console.log(factorialRecursion(3))



function collectOddValue(arr) {

    var result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return result;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr);
    return result;
}

//console.log(collectOddValue([1, 2, 3, 4, 5, 6, 78, 9]))



//With helper() recursion
function power(num, pow) {
    let result = 1;
    function helper(helperNum, helperPow) {
        if (helperPow === 0) {
            return;
        }
        if (helperPow > 0) {
            result *= helperNum;
        }
        helperPow--;
        helper(helperNum, helperPow);
    }
    helper(num, pow);
    return result;
}
//console.log(power(3, 3))



//Without helper() recursion
function pow(num, p) {
    if (p === 0) return 1;
    else return num * pow(num, p - 1)
}
//console.log("Pow(3,3) is " + pow(3, 3))



//With helper() recursion
function prodOfArr(arr) {
    var result = 1;
    function helper(helperInput) {
        if (helperInput.length !== 0) {
            result *= helperInput[0]
        }
        if (helperInput.length === 0) {
            return result;
        }

        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}
//console.log(prodOfArr([1, 2, 3, 4]))



//Without helper() recursion
function prodOfArr1(arr) {
    if (arr.length === 0) return 1;

    return arr[0] * prodOfArr1(arr.slice(1));
}

//console.log(prodOfArr1([1, 2, 3, 4]))

function reverse(str) {
    if (str.length === 0) return str;
    return reverse(str.slice(1)) + str[0]
}
console.log(reverse('abc'))

function isPal(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] == str[1];
    if (str[0] === str.slice(-1)) return isPal(str.slice(1, -1))
    return false;
}
console.log("pal solution is " + isPal("ababa"))


//Callback function with recursion
function someRecursive(arr, callback) {
    if (arr.length === 0) return false
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback)
}


function flatArr(arr) {
    resultArr = [];
    for (let i of arr) {
        if (Array.isArray(i)) {
            resultArr = resultArr.concat(flatArr(i))
        } else {
            resultArr.push(i)
        }
    }
    return resultArr;
}

console.log(flatArr([1, 2, 3, [8, [2, 8], 9]]))


