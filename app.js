// ForEach metodi yordamida

// 1-savol

// const arr = [1, 2, 3, 4, 5]

// function func(arr) {
//     let yangiArr = [];
//     arr.forEach(el => {
//         yangiArr.push(el * el);
//     })

//     return yangiArr
// }

// let natija = func(arr)
// console.log(natija);

// 2-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// function func(arr) {
//     let yangiArr = [];

//     arr.forEach(element => {
//         if (element > 0) {
//             yangiArr.push(element)
//         }
//     });

//     return yangiArr
// }
// let natija = func(arr)
// console.log(natija);


// 3-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// function func(arr) {
//     let yangiArr = [];

//     arr.forEach(element => {
//         yangiArr.push(element * 2)
//     });

//     return yangiArr

// }

// let natija = func(arr)
// console.log(natija);


// 4-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function func(arr) {
//     let sum = 0;

//     arr.forEach(element => {
//         sum += element
//     });

//     return sum
// }

// let natija = func(arr)
// console.log(natija);


// filter metodi 

// 1-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// function func(arr) {
//     return arr.filter(el => el > 0)


// }

// let natija = func(arr)

// console.log(natija);


// 2-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// function func(arr) {
//     return arr.filter(el => el % 2 === 0)

// }
// let natija = func(arr)

// console.log(natija);


// 3-savol

// let arr = ["olma", "nok", "banan", "uch", "Isimlar"]

// function func(arr) {
//     return arr.filter(el => el.length < 5)
// }

// let natija = func(arr)

// console.log(natija);


// 4-savol

// let a = +prompt("Iltimos son kiriting 18 dan kotta bolsin")

// let arr = [];
// for (let i = 10; i <= a; i++) {
//     arr.push(i);
// }

// function func(arr) {
//     return arr.filter(el => el > 18)
// }

// let natija = func(arr)

// console.log(natija);


// map metodi

// 1-savol


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// function func(arr) {
//     return  arr.map(el => el * el)
// }

// let natija = func(arr)

// console.log(natija);


// 2-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function func(arr) {
//     let yangiArr = [];
//     let qoshish = arr.map(el => el + 5)
//     yangiArr.push(qoshish)
//     return yangiArr

// }

// let natija = func(arr)
// console.log(natija);


// 3-savol

// let arr = ["non", "olma", "nok", "behi"]

// function func(arr) {

//     return arr.map( el => el.toUpperCase())

// }

// let natija = func(arr)
// console.log(natija);


// 4-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function func(arr) {
//     return arr.map(el => Math.floor(el ** 0.5));
// }

// let natija = func(arr);
// console.log(natija);


// some/every

// 1-savol


// let arr = [1, 2, 3, -1, -2, -3];

// function func(arr) {
//     return arr.some(el => el < 0);
// }

// let natija = func(arr);
// console.log(natija); 


// 2-savol

// let arr = [
//     "short",
//     "words",
//     "are",
//     "easy",
//     "to",
//     "write",
//     "sometimes",
//     "challenging",
//     "longerword",
//     "concatenation",
//     "substantial"
// ];
// function func(arr) {
//     return arr.some(el => el.lenght > 10)
// }

// let natija = func(arr);
// console.log(natija); 


// 3-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function func(arr) {
//     return arr.every(el => el > 0);
// }

// let natija = func(arr);
// console.log(natija); 


// 4-savol

// let arr = ["HELLO", "WORLD", "THIS", "IS", "AN", "EXAMPLE"];

// function func(arr) {
//     return arr.every(el => el === el.toUpperCase());
// }

// let natija = func(arr);
// console.log(natija); 

// UMUMI

// includes metodi

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function func(arr, el) {
//     return arr.includes(el)
// }

// console.log(func(arr, +prompt("Iltimos 1dan 10gacha son kiriting")));


// indexOf metodi

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// function func(fruits) {

//     return fruits.indexOf("Apple");

// }
// console.log(func(fruits));


// lastIndexOf metodi

// const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];

// function func(fruits) {

//     return fruits.lastIndexOf("Apple");
// }

// console.log(func(fruits));

// find metodi 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11,]

// function func(arr) {
//     return arr.find(el => el > 10)
// }

// console.log(func(arr));


// findIndex metodi 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11,]

// function func(arr) {
//     return arr.findIndex(el => el > 10)
// }

// console.log(func(arr));


// findLast metodi 

// const ages = [3, 10, 18, 20];

// function func(age) {
//   return age > 18;
// }

// console.log(func(20));


// findLastIndex metodi 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     return arr < 8;
// }

// console.log(func(+prompt("Ilitmos son kiriting 1 dan 10 gacha")));


// reverse metodi 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     return arr.reverse()
// }
// console.log(func(arr));


// sort metodi 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     return arr.sort()
// }

// console.log(func(arr));

// forEach  metodi 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     arr.forEach(element => {
//         console.log(element + element);
//     });
// }

// console.log(func(arr));

// filter metodi

// let arr = [-2, 5, -3, 10, -7, 8, 0, 4]

// function func(arr) {
//     return arr.filter(el => el > 0)
// }

// console.log(func(arr));


// map metodi 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function func(arr) {
//     return arr.map(el => el * 2)
// }

// console.log(func(arr));

// some metodi 

// let arr = [1, 2, -3, 4, 5];

// function func(arr) {
//     return arr.some(element => element < 0);
// }

// console.log(func(arr));


// every metodi 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]

// function func(arr) {
//     return arr.every(el => el > 0)
// }

// console.log(func(arr));


// map, filter metodlari bilan 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     let mapMetodi = arr.map(el => el * 3)
//     let fiterMetodi = mapMetodi.filter(el => el > 10)

//     return fiterMetodi
// }

// console.log(func(arr));
