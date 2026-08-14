
let inputBox = document.getElementById("inputBox")


let investmentinput = document.getElementById("investmentinput")
let Needinput = document.getElementById("Needinput")
let savainBankinput = document.getElementById("savainBankinput")
let storeOnWallatinput = document.getElementById("storeOnWallatinput")
let wantsinput = document.getElementById("wantsinput")

let btn = document.getElementById("BTN")
btn.addEventListener("click", function () {
    if (inputBox.value == "") {
        alert("Please Enter Your Income")
    }
    else {
        let i = inputBox.value * 50 / 100
        investmentinput.value = i

        let n = inputBox.value * 30 / 100
        Needinput.value = n

        let sb = inputBox.value * 5 / 100
        savainBankinput.value = sb

        let sw = inputBox.value * 5 / 100
        storeOnWallatinput.value = sw

        let w = inputBox.value * 10 / 100
        wantsinput.value = w
    }
})


































