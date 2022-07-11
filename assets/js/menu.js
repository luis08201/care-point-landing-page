let burgerBtn = document.getElementById("burgerBtn");

burgerBtn.addEventListener("click", () =>{
    burgerBtn.classList.toggle("active");
    let nav = document.getElementById("nav");
    nav.classList.toggle("show");

    let bars = document.querySelectorAll(".header__top--bar");

    bars.forEach(bar => {
        if (burgerBtn.classList.contains("active")) {
            bar.classList.add("active");
        } else {
            bar.classList.remove("active");
        }
    })
    
})