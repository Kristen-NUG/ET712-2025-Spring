/*Homework 2: Control Flows, Loops, and Functions
Student Name: Kristen Grant*/
console.log(`Kristen Grant ET712 Homework 2`)

console.log(`---------- Program 1: Name_Counting Function ----------`)
function name_counting(){
    let names = ['Eleanor', ' Penelope', ' Daisy', ' Lorie', ' Aj', ' Sam', ' Theodore', ' Ella', ' Bella', ' Amber', ' Steph', ' Elizabeth', ' Olivander', ' Nathan', ' and Courtney']
    let count = 0;
    for (let i = 0; i < names.length; i++){
        let nt = names[i].trim();
        if (nt.length <= 5){
            count++;
        }
    }
    console.log(`These are the list of names: ${names}.`)
    console.log(`There are ${names.length} names in the array.`)
    console.log(`There are ${count} names with 5 or fewer characters in the array.`)
}

console.log(`---------- Program 2: CheckNum Function ----------`)
function checkNum(){
    let num = prompt(parseInt(`Please enter a number:`));
    let check = isNaN(num);
    if (num % 2 === 0){
        console.log(`The number ${num} is even.`);
    } else {
        console.log(`The number ${num} is odd.`);
    }
    if (check === true){
        console.log(`The input is not a number. Please enter a number.`);
        continue until; (check === false);
}
}