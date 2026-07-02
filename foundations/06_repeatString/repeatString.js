const repeatString = function(string, num) {
    let error_string = "ERROR";
    if (num < 0) {
        return error_string;
    }
    
    let final_string = "";
    for (let i = 0; i < num; i++){
        final_string += string;
    }

    return final_string;
};

// Do not edit below this line
module.exports = repeatString;
