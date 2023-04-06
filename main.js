const btns = document.querySelectorAll(".btn");

/*
btns.forEach(btn => {
    btn.addEventListener("click", e=> {
        removeColor();
        btn.style.color = "cyan"; 
        if(btn.innerHTML!="curriculum") {
            let hola = btn.innerHTML;
            let add = document.getElementById(hola);
            removeClassHidden();
            add.classList.remove("hidden");
        }
    })
})

function removeColor() {
    btns.forEach(btn => {
        if(btn.style.color=="cyan") {
            btn.style.color="white";
        }
    })
}

function removeClassHidden() {
    btns.forEach(btn=> {
        if(btn.innerHTML!="curriculum") {
            let hola = btn.innerHTML;
            let add = document.getElementById(hola);
            if(!add.classList.contains("hidden")) {
                add.classList.add("hidden");
            }
        }
    } )
}*/

const mobile = document.querySelector(".menu-movil");
const navegacionPrincipal = document.querySelector(".navegacion-principal");
    // Menu Responsive

    mobile.addEventListener("click", e=> {
        if(!navegacionPrincipal.classList.contains("hidden")) {
            navegacionPrincipal.classList.add("hidden");
        } else {
            navegacionPrincipal.classList.remove("hidden");
        }
    })

const mode = document.querySelector(".mode");

    mode.addEventListener("click", e=> {
        if(mode.classList.contains("active")) {
            mode.src="img/light-mode.png";
            mode.classList.remove("active");
            document.body.style.backgroundColor = "red";
        } else {
            mode.src="img/dark-mode.png";
            mode.classList.add("active");
            document.body.style.backgroundColor = "black";
        }
    })

    // $('.mobile').on('click', function() {
    //     $('.navegacion-principal').slideToggle();

    // });