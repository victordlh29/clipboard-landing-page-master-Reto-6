function changeImage() {
    // Vareable
    let color = "rgb(0, 0, 0)";
    // Obtener una referencia al elemento de footer por su ID
    const Element = document.getElementById("main-content");
    const ColorActual = window.getComputedStyle(Element).backgroundColor;
    const h1element = document.querySelectorAll("h1");
    const h3element = document.querySelectorAll("h3");
    const h4element = document.querySelectorAll("h4");
    const h6element = document.querySelectorAll("h6");
    const DomImage = document.getElementById("dom");

    if (ColorActual === color) {
        Element.style.backgroundColor = "rgba(255, 255, 255, 100)";
        h1element.forEach((h1element) => {
            h1element.style.color = "rgba(0, 0, 0)";
        });
        h3element.forEach((h3element) => {
            h3element.style.color = "rgba(0, 0, 0)";
        });
        h6element.forEach((h6element) => {
            h6element.style.color = "rgba(0, 0, 0)";
        });
        h4element.forEach((h4element) => {
            h4element.style.color = "rgba(0, 0, 0)";
        });
        const newimg = "image/icons/dom_2.png";
        DomImage.src = newimg;
    } else {
        Element.style.backgroundColor = color;
        h1element.forEach((h1element) => {
            h1element.style.color = "rgba(255, 255, 255, 100)";
        });
        h3element.forEach((h3element) => {
            h3element.style.color = "rgba(255, 255, 255, 100)";
        });
        h4element.forEach((h4element) => {
            h4element.style.color = "rgba(255, 255, 255, 100)";
        });
        h6element.forEach((h6element) => {
            h6element.style.color = "rgba(255, 255, 255, 100)";
        });
        const newimg = "image/icons/dom_1.png";
        DomImage.src = newimg;
    }

}

const miFooter = document.getElementById("miFooter");
const cambiarFondoBtn = document.getElementById("cambiarFondoBtn");

cambiarFondoBtn.addEventListener("click", function() {
  miFooter.classList.toggle("fondo-cambiado");
});



