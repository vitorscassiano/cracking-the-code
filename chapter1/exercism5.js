/*
 * Write a method to replace all spaces in a string with ‘%20’
 */

function replaceSpace(string){
    let nString = '';
    for(x in string) {
        (string[x] == " ") ? nString += '%20' : nString += string[x]
    }
    return nString;
}

function main(){
    console.log(replaceSpace('Implement blabla'));
    console.log(replaceSpace('determine'));
    console.log(replaceSpace('characters'));
    console.log(replaceSpace('abcdefghijlmnopqrstuvxz'));
    console.log(replaceSpace('Write a method to replace all spaces in a string with ‘%20’'));
}

main();
