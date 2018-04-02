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

function isUnique(word){
    let a = [];
    for(char of word) {
        if(a[char]) return false;
        a[char] = 1;
    }

    return true;
}

function isUniqueAscii(word){
    let a = [];
    for(w in word){
        let charCode = word.charCodeAt(w);
        if(a[charCode] > 0) return false;
        a[charCode] = 1;
    }
    return true;
}

function isUniqueChars(word) {
    let checker = 0;
    for (i in word){
        let val = word[i] - 'a';
        console.log(val);
        console.log(word[i]);
        if((checker & (1 << val)) > 0) return false;
        checker |= (1 << val);
    }
    return true;
}

function main(){
    console.time('hash');
    console.log(uniqueString('characters'));
    console.log(uniqueString('abcdefghijlmnopqrstuvxz'));
    console.timeEnd('hash');

    console.time('array');
    console.log(isUnique('characters'));
    console.log(isUnique('abcdefghijlmnopqrstuvxz'));
    console.timeEnd('array');

    //console.time('bitwise');
    //console.log(isUniqueChars('characters'));
    //console.log(isUniqueChars('abcdefghijlmnopqrstuvxz'));
    //console.timeEnd('bitwise');

    console.time('charcode')
    console.log(isUnique("characters"));
    console.log(isUnique("abcdefghijlmnopqrstuvxz"));
    console.timeEnd('charcode')
}

main();
