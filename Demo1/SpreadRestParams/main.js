//Spread
//before using Spread
const tools=['hammer', 'rock'];
const others=['paper','wood'];
// const allTools= tools.concat(others);
// console.log(allTools);
//after
const allTool=[...tools,...others]
console.log(allTool);