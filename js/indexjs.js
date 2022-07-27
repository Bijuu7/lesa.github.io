var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".navMenu");
var bgMenu = document.querySelector(".bgMenu");
var categorias = document.querySelector("#categorias")
var catMenu = document.querySelector(".navCategorias")


hamburger.addEventListener ("click", function() {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("hideMenuNav");
    bgMenu.classList.toggle("bgMenuShow");
    catMenu.classList.remove("navCategoriasShow");
    categorias.classList.remove("navCategoriasActivo");
    categorias.classList.add("navMenuBg");
});

bgMenu.addEventListener ("click", function() {
    hamburger.classList.remove("is-active");
    menu.classList.add("hideMenuNav");
    bgMenu.classList.remove('bgMenuShow');
    categorias.classList.remove("navCategoriasActivo");
    catMenu.classList.remove("navCategoriasShow");
    categorias.classList.add("navMenuBg");
})

categorias.addEventListener ("click", function(){
    catMenu.classList.toggle("navCategoriasShow")
    categorias.classList.toggle("navCategoriasActivo")
    categorias.classList.toggle("navMenuBg")

})


