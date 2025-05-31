// Regular Expression
// flag
let regex1 = /hello/i;
let str1 = "HELLO world";

console.log(regex1.test(str1));

// Create By Calling  RegExp Constructor
let regex2 = new RegExp('hello', 'g');
// test(),  exec(), match(),  replace(), search(), split()
console.log(regex1.exec(str1));
console.log(str1.match(regex1));
// g flag, m flag
let str2 = "hello hello";
console.log(str2.match(regex2));

let regExp3 = /$a{2,}/g
let str3 = "aaabcdsf234567a s";
console.log(str3.match(regExp3));
// ^ , |, .