/*Homework 1: Control Flow and Loops
Student: Kristen Grant*/
console.log(`Kristen Grant ET712 Homework 1`);

console.log(`---------- Program 1: Conditional Statements ----------`);
// Program 1: Conditional Statements
let data = parseInt(prompt(`Enter a number: `));
if(data>0){
    console.log(`Think positively!`)
    
}
else if(data<0){
        console.log(`Never have negative balance!`)
    }
else if(data==0){
        console.log(`Yin and Yang!`)
    }
else if(isNaN(data)){
        console.log(`Null and void!`)
    }