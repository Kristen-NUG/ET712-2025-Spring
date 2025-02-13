/*Homework 2: Control Flows, Loops, and Functions
Student Name: Kristen Grant*/
console.log(`Kristen Grant ET712 Homework 2`)

console.log(`---------- Program 1: Name_Counting Function ----------`)
function name_counting(){
    let names = ['Eleanor', 'Penelope', 'Daisy', 'Lorie', 'Aj', 'Sam', 'Theodore', 'Ella', 'Bella', 'Amber', 'Steph', 'Elizabeth', 'Olivander', 'Nathan', 'Courtney']
    let count = 0;
    for (let i = 0; i < names.length; i++){
        if (names[i].length <= 5){
            count++;
        }
    }
    console.log(`These are the list of names: ${names}.`)
    console.log(`There are ${count} names with 5 or fewer characters in the array.`)
}