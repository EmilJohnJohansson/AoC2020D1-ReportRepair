fs = require('fs');

function readFile(fileName) {
    data = fs.readFileSync(fileName, 'utf8')
    return data.split('\r\n').map(d => parseInt(d));
}

function findPairSumming(total, arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === total){
                return [arr[i], arr[j]];
            }
        }
    }
    
    return undefined; 
}

function findTrioSumming(total, arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length; j++){
            for (var h = j + 1; h < arr.length; h++){
                if (arr[i] + arr[j] + arr[h] === total){
                    return [arr[i], arr[j], arr[h]];
                }
            }
        }
    }
    
    return undefined; 
}

const input = readFile('input.txt');

var pair = findPairSumming(2020, input);
console.log(pair[0] * pair[1]);

var trio = findTrioSumming(2020, input);
console.log(trio[0] * trio[1] * trio[2]);