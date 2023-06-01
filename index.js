const burger = document.querySelector(".header-burger");
const mobLinks = document.querySelectorAll(".mobile-nav-link");



burger.addEventListener("click", ()=>{
    document.getElementById("mobile-nav").classList.toggle("display-none");
})

mobLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        console.log("clicked!")
        document.getElementById("mobile-nav").classList.add("display-none");
    })
})