/* DIRECTIONS
Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

## Hints
Strings in JavaScript are immutable and, therefore, cannot be reversed directly in place. While there is no built-in method for this, several alternative approaches can be used, drawing on the concepts you've been introduced to in the lessons.
*/

const reverseString = function(my_string) {
    //first turn string into array

    let my_array = Array.from(my_string);

    //reverse the array
    let reversed_array = [];
    let j = my_array.length - 1;
    for (let i = 0 ; i < my_array.length; i++){
        reversed_array[j] = my_array[i];
        j -= 1;
    }

    //turn array back into string

    //return final reversed string
    return reversed_array.join("");

};

// Do not edit below this line
module.exports = reverseString;
