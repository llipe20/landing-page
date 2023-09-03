
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

//EVENTO menu hamburguer ABRIR
var hamburguer = document.getElementById("box-hamburguer")
var menu = document.getElementById("menu")
var close = document.getElementById("fechar")

window.addEventListener('resize', () => {
    let width = window.innerWidth

    if (width > 800) 
    {
        menu.style.display = 'none'
    }
    else
    {
        menu.style.display = 'flex'
    }

   menu.addEventListener("click", () => {

        if (width < 800)
        {
            hamburguer.style.display = 'flex'
            menu.style.display = 'none'
        }
    })

    //EVENTO menu hamburguer FECHAR
    close.addEventListener("click", () => {

        if (width < 800)
        {
            hamburguer.style.display = 'none'
            menu.style.display = 'flex'
        }
    })
})



