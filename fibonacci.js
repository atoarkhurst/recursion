function fibs(n){
    let arr= [];
    for(x = 0; x < n; x++) {
      if (x == 0 ) {
        arr.push(0);
      } else if (x == 1) {
        arr.push(1)
      } else {
        arr.push(arr[x-1] + arr[x-2]);
      }
    }
    return arr;
}
  
function fibsRec(n) {

    // Base Case
    if (n == 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];

    // get the sequence up to n-1
    const prev = fibsRec(n-1);

    // Add the sum of the last two numbers
    const nextNumber = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, nextNumber];
}
