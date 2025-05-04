function sumArray(arr){
    let sum = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));