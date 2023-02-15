function Solve(val) {
    var cal = document.getElementById('screen');
    cal.value += val 
}

function Result() {
    var num1 = document.getElementById('screen').value;
    var num2 = eval(num1)
    document.getElementById('screen').value = num2
}

function Clear() {
    var inp = document.getElementById('screen')
    inp.value = ''
}

function Back() {
    var ev = document.getElementById('screen')
    ev.value = ev.value.slice(0,-1)
}