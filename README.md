Fibonacci and Merge Sort Project
This project showcases two classic algorithms in separate JavaScript files:

fibonacci.js: Contains the iterative (fibs) and recursive (fibsRec) implementations of the Fibonacci sequence.
mergesort.js: Contains the recursive Merge Sort implementation (mergeSort) and its helper function (merge).
File Structure
Copy
project-folder
├─ fibonacci.js
└─ mergesort.js
Fibonacci (fibonacci.js)
fibs(n): Iteratively generates the first n numbers of the Fibonacci sequence.
fibsRec(n): Recursively generates the first n numbers of the Fibonacci sequence.
Example usage within fibonacci.js:

js
Copy
console.log(fibs(8));      // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8));   // [0, 1, 1, 2, 3, 5, 8, 13]
Merge Sort (mergesort.js)
mergeSort(arr): Recursively sorts the provided array using the Merge Sort algorithm.
merge(arr1, arr2): Merges two sorted arrays into one sorted array.
Example usage within mergesort.js:

js
Copy
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110]));       // [79, 100, 105, 110]
How to Run
Make sure you have Node.js installed.
In your terminal, navigate to the folder containing these files.
Run each file with Node:
bash
Copy
node fibonacci.js
node mergesort.js
Look at the console output to confirm that everything is working.