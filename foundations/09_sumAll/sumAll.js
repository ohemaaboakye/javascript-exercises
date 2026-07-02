/* directions: Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```
*/

const sumAll = function(num1, num2) {

    let errorMessage = "ERROR";

    if (num1 < 0 || num2 < 0){
        return errorMessage;
    } else if (!Number.isFinite(num1) || (!Number.isFinite(num2))){
        return errorMessage;
    } else if (!Number.isInteger(num1) || (!Number.isInteger(num2))){
        return errorMessage;
    }

    let min = 0;
    let max = 0;

    if (num1 < num2){
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }


    let sum = 0;

    for (let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
