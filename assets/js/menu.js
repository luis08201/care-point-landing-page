let burgerBtn = document.getElementById("burgerBtn");

burgerBtn.addEventListener("click", () =>{
    let nav = document.getElementById("nav");
    nav.classList.toggle("show");
})