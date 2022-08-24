/**Object*/
const note = {
    id:1,
    website: 'destructing.com',
    date: "24/08/2022",
}
//cách truyền thống
// const id= note.id
// const website = note.website
// const date = note.date
/**Sử dụng Destructing*/
// const {id,website,date} = note
// console.log(note);
// //In thông tin
// console.log(id);
// console.log(website);
// console.log(date);



/**Arrays */
const dates = ['2022','08','24']
//create variables from arrays
// const year = dates[0]
// const month = dates[1]
// const day = dates[3]

// console.log(year);
// console.log(month);
// console.log(day);

// /**Destructing array values into variables*/
const [year,month,day] = dates
console.log(dates)
