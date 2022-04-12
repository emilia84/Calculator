function addValue(){
    // get the operands value
    var input_a = document.getElementById('input_a').value;
    var input_b = document.getElementById('input_b').value;
    var output;
    // parse to integer. You can use: parseInt(input, 10);
    input_a = parseInt(input_a);
    input_b = parseInt(input_b);
    // perform operation
    input_a + input_b;
    // creating the text output
    output = input_a + " + " + input_b + " = " + (input_a+input_b);
    // (if you want to check) print out in console
    document.getElementById('output').value = output;
    console.log(output);
    // change the text area
    document.mycalculator.output.value = text;
}

function mulValue(){
    var input_a = document.getElementById('input_a').value;
    var input_b = document.getElementById('input_b').value;
    var output;
    input_a = parseInt(input_a);
    input_b = parseInt(input_b);
    output = input_a + " x " + input_b + " = " + input_a*input_b;
    document.getElementById('output').value = output;
    console.log(output);
    document.mycalculator.output.value = text;
}

function divValue(){
    var input_a = document.getElementById('input_a').value;
    var input_b = document.getElementById('input_b').value;
    var output;
    input_a = parseInt(input_a);
    input_b = parseInt(input_b);
    output = input_a + " : " + input_b + " = " + input_a/input_b;
    document.getElementById('output').value = output;
    console.log(output);
    document.mycalculator.output.value = text;
}

