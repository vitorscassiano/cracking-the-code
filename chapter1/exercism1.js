/*
 * Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
 */

function uniqueString(string){
    let hash = {};
    let unique = true;
    for(x of string) {
        // (hash[x]) ? hash[x] += 1 : hash[x] = 1;
        if(hash[x]){
            unique=false
            break;
        } else {
            hash[x] = 1;
        }
    }
    // Loop again to verify if there is value > 1;
    return unique;
}

function main(){
    console.log(uniqueString('Implement'));
    console.log(uniqueString('determine'));
    console.log(uniqueString('characters'));
    console.log(uniqueString('abcdefghijlmnopqrstuvxz'));
}

main();
