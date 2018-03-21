/*
 *
 * Design an algorithm and write code to remove the duplicate characters in a string
 * without using any additional buffer. NOTE: One or two additional variables are fine.
 * An extra copy of the array is not.
 * FOLLOW UP
 * Write the test cases for this method.
 *
 */

function _removeIndex(index, array){
    array.splice(index, 1)
}

function removeDuplicate(array){
    array = array.split('')
    for(x in array){
        for(y in array){
            (array[x] == array[y]) ? _removeIndex(y, array) : null
        }
    }
    return array;
}

function main(){
    console.log(removeDuplicate('Implement'));
    console.log(removeDuplicate('determine'));
    console.log(removeDuplicate('characters'));
    console.log(removeDuplicate('abcdefghijlmnopqrstuvxz'));
}

main();
