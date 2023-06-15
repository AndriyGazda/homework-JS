// let arr = [1, "true", "BMW", "Monday"];
// arr[99] = 21;
// console.log(arr);

// let arr = ['Monday', 'Fall', 2, true, 132, 'true', false, 'yes', 23, true, 'lesson', false, 'art', 'ten', true];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (typeof element === "number") {
//         console.log(element);
//     }
// }
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string" &&  arr[i].length >= 4) {
//         console.log(arr[i])
//     }
// }
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//         console.log(arr[i])
//     }
// }
//

// let arr = [];
// arr[100] = [];
//
//
// for (let i = 0; i < arr.length; i++) {
//         console.log(i)
// }
//
// let arr = [];
// arr[100] = [];
//
//
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0)
//     console.log(i)
// }
//
// let arr = [];
// arr[100] = [];
//
//
// for (let i = 0; i < arr.length; i++) {
//     if (i % 3 === 0)
//     console.log(i)
// }

// let  arr = ['js', 'css', 'jq']
// console.log(arr.shift());
// let  arr = ['js', 'css', 'jq']
// console.log(arr.pop());
// arr.splice(-2,0,'a','b','c')
// console.log(arr)


//
// let arr = [1, 2, 3, 4, 5];
// let sum = ['a', 'b', 'c'];
// let arr1 = [];
//
// for (let i = 0; i < arr.length; i++ ) {
//     arr1.push(arr[i])
//     if (arr[i] === 3) {
//         for (let j = 0; j < sum.length; j++) {
//             arr1.push(sum[j])
//
//         }
//     }
//
// }
// console.log(arr1)
//
// for (let i = 0; i < sum.length; i++) {
//     arr.splice(3+i, 0, sum[i])
// }
// console.log(arr)
//
// let arr = [1, 2, 3, 4, 5];
// let stringArr = ['a', 'b'];
// let resultArr = [];
// for (let i = 0; i < arr.length; i++ ) {
//     resultArr.push(arr[i])
//     if (arr[i] === 1) {
//         for (let j = 0; j < stringArr.length; j++) {
//             resultArr.push(stringArr[j])
//
//         }
//     }
//     if (arr[i] === 4) {
//         resultArr.push('c')
//     }
//     if (arr[i] === 5) {
//         resultArr.push('e')
//     }
// }
// console.log(resultArr)


//
// let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < numberArr.length; i++) {
//     if (numberArr[i] % 2 === 0) {
//         console.log(numberArr[i])
//     }
//
// }
//
//
// let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = [];
//
// for (let i = 0; i < 1; i++) {
//     arr.push(numberArr)
//     console.log(arr[i])
// }
//
// let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrCopy = [];
//
// for (let i = 0; i < numberArr.length; i++) {
//     arrCopy[i] = numberArr[i];
//     console.log(arrCopy)
// }


//=========================================

// let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0
//
// while (i < arrNum.length) {
//     console.log(arrNum[i])
//     i++
// }
//
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i])
// }
//
// let i = 0;
//
// while (i < arrNum.length) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i++
// }
//
// for (let i = 0; i < arrNum.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }
//
// let i = 0;
// while (i < arrNum.length) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i])
//     }
//     i++
// }
//
// for (let i = 0; i < arrNum.length; i++ ) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i])
//     }
// }
//
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 3 === 0) {
//         arrNum[i] = 'Andriy'
//     }
//     console.log(arrNum[i])
// }
//
// for (let i = arrNum.length - 1; i >= 0; i--) {
//     console.log(arrNum[i])
// }


 ///////////////  9999999999999999999
//
// let i = arrNum.length - 1;
//
// while (i >= 0 ) {
//     console.log(arrNum[i])
//     i--
// }
//
// for (let i = arrNum.length - 1; i >= 0; i--) {
//     console.log(arrNum[i])
// }
//
// let i = arrNum.length;
//
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i--
// }
//
// for (let i = arrNum.length; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }
//
// let i = arrNum.length - 1;
// while (i >= 0) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i])
//     }
//     i--
// }
//
// for (let i = arrNum.length; i >= 0 ; i-- ) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(arrNum[i])
//     }
// }
//
// for (let i = arrNum.length - 1; i >= 0; i--) {
//     if (arrNum[i] % 3 === 0) {
//         arrNum[i] = 'Andriy'
//     }
//     console.log(arrNum[i])
// }

// let arr = [];

// for (let i = 1; i <= 50; i++) {
//     let num = i * 2
//     arr.push(num)
// }
// console.log(arr)

// let i = 1;
// while (i <= 100) {
//     if (i % 2 !== 0){
//         arr.push(i)
//     }
//     i++
// }
// console.log(arr)

// for (let i = 0; i < 20; i++) {
//     let random = Math.floor(Math.random() * 100)
//     arr.push(random)
// }
// console.log(arr)

// for (let i = 0; i < 20; i++) {
//     min = Math.ceil(8);
//     max = Math.floor(732);
//     let random = Math.floor( Math.random() * (max - min) + min)
//     arr.push(random)
// }
// console.log(arr)
//









//2


// let arr = [];
// for (let i = 1; i < 20; i++) {
//     if (i % 3 === 0) {
//         let random = Math.floor(Math.random() * 100)
//         arr.push(random)
//     }
// }
// console.log(arr)

// 3
// let arr = []
// for (let i = 1; i < 20; i++) {
//     if (i % 3 === 0) {
//         let random = Math.floor(Math.random() * 100)
//         arr.push(random)
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }

// let arr = [22, 33, 12, 2, 4, 6, 8, 2, 3, 4, 5, 7, 9, 11];
// for (let i = 0; i < arr.length; i++) {
//     if ((i + 1) % 3 === 0){
//         if (arr[i] %  2 === 0) {
//             console.log(arr[i])
//         }
//     }
// }

//4
// let arr = [12, 21, 22, 14, 13, 15, 16, 90, 100, 55, 66];
// let newArr = [];
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

//5
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i])
//     }
// }


//6
// let value = [100, 250, 50, 168, 120, 345, 188];
// let result = 0;
// for (let i = 0; i < value.length; i++) {
//     result += value[i]
// }
// console.log(result / value.length)

//7
// let arr = [10, 20, 13, 30, 14, 20]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//      newArr.push(arr[i] * 5)
// }
// console.log(newArr)

//8
// let arr = [12, 'string', 32, 'yes', true, false, 15]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number' ) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)



///////ГАВНОООО.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 2; i < arr.length; i = i + 3) {
//     console.log(arr[i])
// }




// let arr = [];
// for (let i = 1; i < 20; i++) {
//     if (i % 3 === 0 ) {
//         if (i % 2 !== 0){
//             let random = Math.floor(Math.random() * 50)
//             arr.push(random)
//         }
//     }
// }
// console.log(arr)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = -1; i < 20; i++) {
//     if (i % 3 === 0 ) {
//         if (i % 2 !== 0){
//             console.log(arr[i])
//         }
//     }
//
// }


//Додатково
let arr = [ 'a', 'b', 'c'];
let result = '';

for (let i = 0; i < arr.length; i++) {
   result += arr[i]
}
console.log(result);