$(document).ready(function() {
    var owl = $("#owl-demo");

    owl.owlCarousel({

        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        //,
        ////autoPlay : 2000,
        ////stopOnHover : true

        // "singleItem:true" is a shortcut for:
         //items : 2
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
});