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

function mergeSort(arr) {

    console.log("This was printed recursively");
    
    //Base Case : n == 1
    if (arr.length <= 1) {
        return arr;
    }

    let splitArr1 = [];
    let splitArr2 = [];
    let middle = Math.floor(arr.length / 2); 
   

    for (let i = 0; i < middle; i++) {
        splitArr1.push(arr[i]);
    }

    for (let i = middle; i < arr.length; i++) {
        splitArr2.push(arr[i]);
    }

    let leftSorted = mergeSort(splitArr1);
    let rightSorted = mergeSort(splitArr2);

    return merge(leftSorted, rightSorted);


}


function merge(arr1, arr2){
    let merged = [];
    let i = 0;
    let j = 0;

    while ( i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length){
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length){
       merged.push(arr2[j]);
       j++;
    }
    
    return merged;
}
