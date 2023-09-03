
// EVENTO de background na nav fixa
const scrollNav = () => {

    const nav = document.querySelector(".nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 5) 
        {
            nav.style.backgroundColor = 'rgb(0, 0, 34)'    
        }
        else 
        {
           nav.style.backgroundColor = 'transparent'
        }
    });
}

scrollNav()


var hamburguer = document.getElementById("box-hamburguer")
var largura = window.innerWidth
var menu = document.getElementById("menu")
var close = document.getElementById("fechar")

//EVENTO menu hamburguer FECHAR
const fechar = (width) => {

    if (width < 800)
    {
        hamburguer.style.display = 'none'
        menu.classList.remove("invisible")
    }
}

//EVENTO menu hamburguer ABRIR
const abrir = (width) => {

    if (width < 800)
    {
        hamburguer.style.display = 'flex'
        menu.classList.add("invisible")
    }
}

window.addEventListener('resize', () => {
    let width = window.innerWidth

    if(width > 800)
    {
        hamburguer.classList.add("box-hamburguer-desktop")
        hamburguer.style.display = 'flex'
        menu.classList.add("invisible")
    }
    else
    {
        menu.classList.remove("invisible")
        hamburguer.style.display = 'none'
    }

    menu.addEventListener("click", () => {
        abrir(width)
    })
    close.addEventListener("click", () => {
        fechar(width)
    })
})

menu.addEventListener("click", () => {
    abrir(largura)
})
close.addEventListener("click", () => {
    fechar(largura)
})

// EVENTOS para redirecionamentos dos botões
var bottons = document.getElementsByTagName("button")

for (let i = 0; i < bottons.length; i ++) 
{
    let botton = bottons[i]
    botton.addEventListener("click", () => {

        window.open('https://wa.me/qr/O43EG6NVZ3QCE1','_blank')
    })
}




