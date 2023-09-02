
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
