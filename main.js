const isEqualToo100 = (a, b) =>
    a === 100 || b === 100 || (a + b) === 100;
// console.log(isEqualToo100(10, 90))
// console.log(isEqualToo100(40, 60))
// console.log(isEqualToo100(10, 50))


const getFileExtension = (str) =>
    str.slice(str.lastIndexOf('.'));
// console.log(getFileExtension('in.html'))

const moveCharsForward =
    (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
// console.log(moveCharsForward('abcd'))

const addOrCheckNew =
    (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;
//console.log(addOrCheckNew('New! abcd'))

const makeNewStr =
    (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
// console.log(makeNewStr('as'))
// console.log(makeNewStr('asdfghjkl'))

const newStr = (str) =>
    str.slice(0, str.length / 2)
// console.log(newStr('abcd'))

const addStr = (str1, str2) => str1.slice(1) + str2.slice(1)
// console.log(addStr("sadas", "asdd"))

const closeTo100 =
    (a, b) => (100 - a) < (100 - b) ? a : b
// console.log(closeTo100(77, 67))

const countChar = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
    countChar(str, char) >= 2 && countChar(str, char) <= 4;
//console.log(contains2To4("ooooh", "o"))

const countEvenNumber = (arr) =>
    arr.filter(num => num % 2 === 0).length;
// console.log(countEvenNumber([2, 4, 6, 9, 11, 23]));

const createArr = (num) => {
    const returnArray = [];
    for (i = 1; i <= num; i += 1) {
        returnArray.push(i);
    }
    return returnArray;
};

// console.log(countEvenNumber(createArr(10)))

const checkAscOrder = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) return false;
    }
    return true;
}

const largestEven = (arr) =>
    Math.max(...arr.filter(num => num % 2 === 0));
//console.log(largestEven([1, 2, 3, 4, 80, 55, 95]))

const changeFrstNum = (str) => str.replace(/[0-9]/, $)
//console.log("a1c2e")

const leapYear = (year) => year % 4 === 0;
// console.log(leapYear(2016))

let arr = [1, 2, 3, 1, 1, 1, 4, 5]
//const removeDups = (arr) => arr.filter((index, value) => arr.indexOf(value) == index)


const sortArr = (arr) => {
    let j = arr.length - 1;
    let i = 0
    while (i < j) {
        let left = arr[i]
        let right = arr[j]
        if (left === 0) {
            i++
        } if (right === 1) {
            j--
        } if (left == 1 && right == 0) {
            arr[i] = right;
            arr[j] = left;
        }
    }
    return arr;
}

//console.log(sortArr([1, 0, 1, 0, 0, 1, 1]))


const sortArr2 = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 1) {

        }
    }
}





function greatestNum(arr) {
    let greatest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (greatest < arr[i]) {
            greatest = arr[i];
        }
    }
    return greatest;
}

//console.log(greatestNum([100, 2, 3, 4, 60, 2, 99]))

var fnumbers = function (q) {
    if (q === 1) {
        return [0, 1]
    } else {
        var z = fnumbers(q - 1);
        z.push(z[z.length - 2] + z[z.length - 1]);
        return z;
    }
};

//console.log(fnumbers(9));


const findNonPairElement = (A) => {

    var sum = 1;

    for (i = 0; i < A.length; i++) {
        sum *= A[i]
    }

    for (i = 0; i < A.length; i++) {
        var resto = sum % Math.pow(A[i], 2)


        if (resto !== 0) {
            return A[i];
        } else {
            sum /= A[i];
        }
    }

}

//console.log(findNonPairElement([4, 4, 3, 2, 2, 6, 3]))


//Function to shift array as per given num

const shiftArr = (arr, num) => {

}

const lowestArrI = (arr) => {
    var lowest = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    return lowest;
}

//console.log(lowestArrI([6, 2, 3, 4, 5]))

function solution(N) {
    var enable_print = N % 10;

    while (N > 0) {
        if (enable_print == 0 && N % 10 == 0) {
            enable_print = 1;
        }
        else if (enable_print == 1) {
            process.stdout.write((N % 10).toString());
        }
        N = Math.floor(N / 10);
    }
}
//console.log(solution(133456))

function solution1(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var binary = Number(N).toString(2);
    var oneArr = []
    var zerosArr = []

    for (j = 0; j < binary.length; j++) {
        if (binary[j] == 0) {
            zerosArr.push(j)
        }
    }
    if (zerosArr.length == 0) {
        return 0;
    }
    for (i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            if (i == 0) {
                oneArr.push(1);
            }
            else {
                oneArr.push(i);
            }
        }
    }
    var maxdiff = 0;
    for (i = 0; i < oneArr.length; i++) {
        if (maxdiff < Math.abs(oneArr[i] - oneArr[i + 1])) {
            maxdiff = Math.abs(oneArr[i] - oneArr[i + 1])
        }
    }
    return maxdiff;
}

//console.log(solution1(32));










// Javascript program for the above approach

let MaxValue = 2147483647;

// Function to check if the current
// string is balanced or not
function balanced(small, caps) {

    // For every character, check if
    // there exists uppercase as well
    // as lowercase characters
    for (let i = 0; i < 26; i++) {
        if (small[i] != 0 && (caps[i] == 0))
            return false;

        else if ((small[i] == 0) && (caps[i] != 0))
            return false;
    }
    return true;
}

// Function to find smallest length substring
// in the given string which is balanced
function smallestBalancedSubstring(s) {

    // Store frequency of
    // lowercase characters
    let small = new Array(26);
    let i;

    // Stores frequency of
    // uppercase characters
    let caps = new Array(26);
    small.fill(0);
    caps.fill(0);

    // Count frequency of characters
    for (i = 0; i < s.length; i++) {
        if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90)
            caps[s[i].charCodeAt() - 65]++;
        else
            small[s[i].charCodeAt() - 97]++;
    }

    // Mark those characters which
    // are not present in both
    // lowercase and uppercase
    let mp = new Map();

    for (i = 0; i < 26; i++) {
        if (small[i] != 0 && caps[i] == 0) {
            mp.set(String.fromCharCode(i + 97), 1);
        }
        else if (caps[i] != 0 && small[i] == 0)
            mp.set(String.fromCharCode(i + 65), 1);
        // mp[char(i + 'A')] = 1;
    }

    // Initialize the frequencies
    // back to 0
    small.fill(0);
    caps.fill(0);

    // Marks the start and
    // end of current substring
    i = 0;
    let st = 0;

    // Marks the start and end
    // of required substring
    let start = -1, end = -1;

    // Stores the length of
    // smallest balanced substring
    let minm = MaxValue;

    while (i < s.length) {
        if (mp.has(s[i])) {

            // Remove all characters
            // obtained so far
            while (st < i) {
                if (s[st].charCodeAt() >= 65 &&
                    s[st].charCodeAt() <= 90)
                    caps[s[st].charCodeAt() - 65]--;
                else
                    small[s[st].charCodeAt() - 97]--;

                st++;
            }
            i += 1;
            st = i;
        }
        else {
            if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90)
                caps[s[i].charCodeAt() - 65]++;
            else
                small[s[i].charCodeAt() - 97]++;

            // Remove extra characters from
            // front of the current substring
            while (true) {
                if (s[st].charCodeAt() >= 65 &&
                    s[st].charCodeAt() <= 90 &&
                    caps[s[st].charCodeAt() - 65] > 1) {
                    caps[s[st].charCodeAt() - 65]--;
                    st++;
                }
                else if (s[st].charCodeAt() >= 97 &&
                    s[st].charCodeAt() <= 122 &&
                    small[s[st].charCodeAt() - 97] > 1) {
                    small[s[st].charCodeAt() - 97]--;
                    st++;
                }
                else
                    break;
            }

            // If substring (st, i) is balanced
            if (balanced(small, caps)) {
                if (minm > (i - st + 1)) {
                    minm = i - st + 1;
                    start = st;
                    end = i;
                }
            }
            i += 1;
        }
    }

    // No balanced substring
    if (start == -1 || end == -1)
        document.write(-1 + "</br>");

    // Store answer string
    else {
        let ans = "";
        for (let j = start; j <= end; j++)
            ans += s[j];

        document.write(ans + "</br>");
    }
}

// Given string
let s = "azABaabba";

//smallestBalancedSubstring(s)

// This code is contributed by decode2207


// function solutions(A) {

//     var count = 0;
//     var found = false;

//     for (i = 0; i < A.length - 1; i++) {
//         if (A[i] == A[i + 1]) {
//             count++;
//         }
//         else if (((i + 2) < A.length) && !found) {
//             if ((A[i] == 0 && A[i + 1] == 1 && A[i + 2] == 0) || (A[i] == 1 && A[i + 1] == 0 && A[i + 2] == 1)) {
//                 found = true;
//                 count = count++;
//             }
//             else if ((A[i] == 1 && A[i + 1] == 0 && A[i + 2] == 0) || (A[i] == 0 && A[i + 1] == 1 && A[i + 2] == 1)) {
//                 found = true;
//                 count = count++;
//             }
//         }
//     }

//     return count;
// }

//console.log(solutions([0, 1, 1, 0]))



// Codility Challenge 1
// Counting highest no of occurance of 0 between 1 eg - [010001001] => return 3

const codilityChallenge1 = (N) => {

    var binaryN = Number(N).toString(2).split('')
    var maxBinaryDiff = 0;
    var arrOfOne = []

    for (i = 0; i < binaryN.length; i++) {
        if (binaryN[i] == 1) {
            arrOfOne.push(i + 1);
        }
    }

    for (i = 0; i < arrOfOne.length; i++) {
        if (arrOfOne.length > 2) {
            if (maxBinaryDiff < Math.abs(arrOfOne[i] - arrOfOne[i + 1])) {
                maxBinaryDiff = Math.abs(arrOfOne[i] - arrOfOne[i + 1])
            }
        }
    }
    //console.log(binaryN)
    //console.log(arrOfOne)

    if (maxBinaryDiff == 0 || maxBinaryDiff == 1) {
        return maxBinaryDiff
    }
    else {
        return maxBinaryDiff - 1

    }
}

//console.log(codilityChallenge1(11));



//Codility Challenge 2 shift array by K 
const codilityChallenge2 = (k, arr) => {

    for (i = 0; i < k; i++) {
        lastElement = arr.pop()
        arr.unshift(lastElement)
        console.log(lastElement)
    }

    return arr;
}

//console.log(codilityChallenge2(5, [1, 2, 3, 4]));

//Codility Challenge 3
const codilityChalenge3 = (A) => {

    for (i = 0; i < A.length; i++) {

        if (A.filter(ch => ch === A[i]).length % 2 != 0) {
            return A[i];
        }
    }
}

console.log(codilityChalenge3([2, 4, 6, 2, 5, 4, 6]))


//0 0 1 0 2 0 1 

const printSeq = (N) => {
    var arr = []
    for (i = 0; i < N; i++) {
        arr.push(i);
        if (arr.filter(num => num == arr[arr.length - 1]).length > 2) {
            arr.push(i - arr.lastIndexOf(i))
        } else {
            arr.push(0);
        }
    }
    return arr;
}


console.log(printSeq(15));

//Code to count number of each char in string
const countStrChar = (str) => {
    var stringCharCount = {};
    for (var char of str) {
        char = char.toLowerCase()
        if (stringCharCount[char] > 0) {
            stringCharCount[char]++;
        } else {
            stringCharCount[char] = 1
        }
    }
    return stringCharCount;
}

console.log(countStrChar("Hi hello"))


