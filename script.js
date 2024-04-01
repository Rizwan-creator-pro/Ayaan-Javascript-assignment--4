let equation = ""
function handleGetValue(value) {
    equation += value
    document.getElementById("display").innerHTML = equation
}
function handleCalculate() {
    const result = eval(equation)
    document.getElementById("display").innerHTML = result
    equation = result
}
function clearAll() {
    equation = ""
    document.getElementById("display").innerHTML = ""
}
function sliceWord() {
    if (equation) {
        equation = equation.slice(0, equation.length - 1);
        document.getElementById("display").innerHTML = equation;
        
    }
    else {
        
        result = result.slice(0, result.length - 1)
        document.getElementById("display").innerHTML = result;
    }
    
}
