// QUESTION 4
// Write a JavaScript function to find the difference between two arrays.

// Test Data:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


(difference = (array1, array2)) => {
    let difference = [];

    for (let i =0; i < array1.length; i++){
        if (!array2.includes(array[i])){
            difference.push(array1[i]);
        }
    }
    return difference;

    let array1 = [1, 2, 3];
    let array2 = [100, 2, 1, 10];

    let difference  = difference(array1, array2);
    console.log(difference);







