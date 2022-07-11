window.addEventListener("scroll", ()=>{
    let header = document.querySelector(".header__top");
    header.classList.toggle("sticky", window.scrollY > 0);
})