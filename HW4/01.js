function countLetters(str){
    const result = new Map();
    for(let char of str){
        if(result.has(char)){
            result.set(char, result.get(char) + 1);
        }else{
            result.set(char, 1);
        }
    }
    return result;
}

console.log(countLetters("banana"));