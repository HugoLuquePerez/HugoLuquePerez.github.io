window.addEventListener("scroll", function(){
    var navContainer = this.document.querySelector(".nav-main--container");
    navContainer.classList.toggle("bg-inverse",window.scrollY>0);
})