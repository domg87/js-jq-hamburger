// selezionare menu hamburger
var hamburgerMenu = $(".hamburger-menu");
var hamburgerOpen = $(".header-right > a");
var hamburgerClose = $(".hamburger-menu > li");

//  .click per attivare l'evento al click
hamburgerOpen.click(
    function(){
        hamburgerMenu.show(500);
    }
);

hamburgerClose.click(
    function(){
        hamburgerMenu.hide(500);
    }
);