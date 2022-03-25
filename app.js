//10:34 - 10:37

function darius() {
    alert("Something is here")
}

function human() {
    var n = prompt("What's your name?")
    return n
} // 10

function temp() {
    var t = prompt("What's your temperature?")
    return t
} // 20

function ctof(x) {
    var cf = ((x * 9) / 5) + 32
    return cf
} // 20

function ftoc() {
    var fc = ((x - 32) * 5) / 9 
    return fc
} // 

function taylor() {
    alert("the end")
}

function program() {
    human()
    darius()
    temp()
    ftoc()
    ctof()
    taylor()

    var q = prompt("If you want to play again, press 1.")

    if (q == "1") {
        program() // recursive function 
    } else {
        alert("Thank you for playing.")
    }

}

program()