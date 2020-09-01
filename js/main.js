//  creare var per selezionare menu html (hamburger)
var hamburgerMenu = $(".hamburger-menu");
var hamburgerOpen = $(".header-right > a");
var hamburgerClose = $(".hamburger-menu > a");

/* //  .click per attivare il menu al click
hamburgerOpen.click(
    function(){
        hamburgerMenu.show(500);
    }
);

//  .click per chiudere il menu al click
hamburgerClose.click(
    function(){
        hamburgerMenu.hide(500);
    }
); */


// var close = $("a.close");

hamburgerOpen.click(
    function(){
        hamburgerMenu.addClass("active");
    }
);

hamburgerClose.click(
    function(){
        hamburgerMenu.removeClass("active");
    }
);