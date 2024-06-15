// _____ Ejercicio 1 _____ 
// Event listeners

let imagenOne = document.getElementById("img_border_js")
imagenOne.addEventListener("click", addBorderToImg);

let borderImg = false

// Funciones

function addBorderToImg () {
    if (borderImg === false){    
        imagenOne.style.border = "Solid 2px red"
        borderImg = true
    } else {
        imagenOne.style.border = ""
        borderImg = false
    }
}

// _____ Ejercicio 2 _____ 
// Event listeners 

let inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(function(input) {
        input.addEventListener("change", cantidadTotal);
    });

// Funciones
function cantidadTotal() {
    let object1 = parseInt(document.getElementById("object_1").value) || 0;
    let object2 = parseInt(document.getElementById("object_2").value) || 0;
    let object3 = parseInt(document.getElementById("object_3").value) || 0;

    let Total = parseInt(object1 + object2 + object3);

    if (Total > 10) {
        document.querySelector('.cantidad_total').innerHTML = "demasiados"
    } else {
        document.querySelector('.cantidad_total').innerHTML = parseInt(Total);
    }
}

cantidadTotal();

// _____ Ejercicio 3 _____ 
// Event listener
document
.getElementById("btnVerificar")
.addEventListener("click", verificarPassord )

// Funcion

function verificarPassord () {
    let select1 = document.getElementById("select_1").value;
    let select2 = document.getElementById("select_2").value;
    let select3 = document.getElementById("select_3").value;

    let password = select1 + select2 + select3; 

    if (password === "911") {
        document.querySelector(".password_text").innerHTML = "Password 1 correcto";
    } else if (password === "714") {
        document.querySelector(".password_text").innerHTML = "Password 2 correcto";
    } else {
        document.querySelector(".password_text").innerHTML = "Password incorrecto";
    }
}