let accordeonBtn = document.querySelectorAll(".about__creativity--item");

for (let i = 0; i < accordeonBtn.length; i++) {
  const mainAccordeon = accordeonBtn[i];

  mainAccordeon.addEventListener("click", () => {
    for (let j = 0; j < accordeonBtn.length; j++) {
      const subAccordeon = accordeonBtn[j];      
      subAccordeon.classList.remove("active");
    }
    mainAccordeon.classList.toggle("active");
  });
}
