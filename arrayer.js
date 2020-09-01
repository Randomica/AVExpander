const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Give me the allowed vlan: ', function (answer) { // prompts for a question on console, and collects it into "answer"
    var arrayVlan = answer.split(","); // since the list is comma separated, creates an array by splitting the list by comma
    var finals = new Array; // create new array to be polled after our function runs

    arrayVlan.forEach(function (element) { //for each item inside the array, execute the function
        var findDashed = element.indexOf("-"); // check if element contains "-" character
        if (findDashed > 0) { // if element contains dashed - so if "indexOf" of the element is higher than 0
            var separateDashed = element.split("-"); // splits the element by the dash, hence creating an array, splittings the 2 elements
            for (var i = separateDashed[0]; i <= separateDashed[separateDashed.length - 1]; i++) { // takes the first value of the element and while it's minor than the last value of the array, increments i and executes the next function
                finals.push(i) // pushes the value inside the array "finals"
                console.log("Added " + i + " to the array!");
            };

        } else {
            finals.push(element); //pushes all the other elements (those who didn't contain a dash) into the array "finals"
            console.log("Pushed into array element: " + element)
        };

    });

    console.log("Start string: " + arrayVlan);

    console.log("Final string: " + finals);
    rl.close();
});