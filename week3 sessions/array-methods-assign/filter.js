// QUESTION 5
//Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function filterArrayValues(arr) {
    return arr.filter(function(element) {
        return element !== false && element !== null && element !== 0 && element !== "";
    });
} 

console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0]));












