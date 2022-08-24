
//var vs. let 
// if(true)
// {
//    var domain = "demovarlet.net"
// }
// console.log(domain); // lỗi

// ==> var không tuân thủ theo block scope, nên let được thay thế để khắc phục

// let vs. const
var a=1;
let b=2;
//let b=3;
const c=3;
// const e;
console.log(a,b,c);

//hoisting
// console.log(d);
// //console.log(b);
// var d=2;
// //let b=1;
