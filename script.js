let valortotalpizza;
let valoratualpizza;
let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = document.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;

})




const valorpizza = document.querySelectorAll("[data-radial]")
valorpizza.forEach(function(item) {
    item.addEventListener('click',function(elemento) {
        valoratualpizza = elemento.target.value
        
    })
})




