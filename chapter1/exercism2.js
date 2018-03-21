/*
 * Write code to reverse a C-Style String. (C-String means that “abcd” is represented as five characters, including the null character.)
 */

function reverseString(string){
    let lastPos = string.length - 1;
    let newString = '';
    for(let i = lastPos; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

function main(){
    console.log(reverseString('Implement'));
    console.log(reverseString('determine'));
    console.log(reverseString('characters'));
    console.log(reverseString('abcdefghijlmnopqrstuvxz'));
}

main();
