const checkbox = document.querySelector("#language")
const pt = document.querySelector(".curriculo-area-pt")
const eng = document.querySelector(".curriculo-area-eng")

checkbox.addEventListener('change', function () {
    if(this.checked === true){
        console.log("Check")
    pt.classList.remove("hidden")
    eng.classList.add("hidden")
    } else {
        console.log("Uncheck")
        pt.classList.toggle("hidden")
        eng.classList.toggle("hidden")
    }
})
