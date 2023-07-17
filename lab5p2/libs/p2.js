function readInput() {
    let lists = [];
    let input;
    
    do {
        input = prompt("Enter a positive integer number:");1

        if (input && !isNaN(input) && parseInt(input) > 0) {
            lists.push(parseInt(input));
        }
    } while (!input|| isNaN(input) || parseInt(input) >= 0);

    return lists;
}

function displayStats(list) {
    let answer = list.length > 0 ? list : "that is empty";
    let sum = list.length > 0 ? list.reduce((a, b) => a + b, 0) : 0;
    let average = list.length > 0 ? (sum / list.length).toFixed(2) : 0;
    let min = list.length > 0 ? Math.min(...list) : 0;
    let max = list.length > 0 ? Math.max(...list) : 0;

    alert("For the list " + answer + " ,the average is " + average + " ,the minimum is " + min + " ,and the maximum is " + max);
}


list = readInput();
displayStats(list);