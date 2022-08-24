/**Built-in
 * 1.alert
 * 2.console
 * 3.confirm
 * 4.prompt
 * 5.set timeout
 * 6.set interval
 * 
 */
var fullName="Nguyen Van A";

//1
// alert(fullName);
//2
// console.log(fullName," la ho ten");
//3
// confirm('Xac nhan du tuoi');
//4
// prompt('Nhap thong tin');
// 5
// setTimeout(function() {
// alert('Thong bao');
//},1000 ) //thuc thi doan code sau ms
//6
setInterval(function() {
   console.log('Day la log'+Math.random());    
},1000) //thuc thi lien tuc doan code trong ms