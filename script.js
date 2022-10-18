document.addEventListener("DOMContentLoaded", () => {

    var isClicked = false;

    $(document).ready(function(){


        // $(document).on('click', '.modal-6', function() {
        //     $(".modal-61a").fadeTo(800, 1);
        //     $(".modal-62a").delay(800).fadeTo(800, 1);
        //     $(".modal-62b").delay(1600).fadeTo(800, 1);
        //     $(".modal-62c").delay(2400).fadeTo(800, 1);
        //   });

        // $('.modal-6').on('click', function() {
        //     $(this).disable();
        // });
                
        //   $(document).on('click', '.arrow', function() {
        //   })

        // $(document).on('click', '.modal-6', function() {
        //     $("a").attr("href", "page2.html")
        //   });


        
        $(".modal-6").click(function() {
            if ( isClicked === false ) { 
                isClicked = true; 
                $(".modal-61a").fadeTo(800, 1);
                $(".modal-62a").delay(800).fadeTo(800, 1);
                $(".modal-62b").delay(1600).fadeTo(800, 1);
                $(".modal-62c").delay(2400).fadeTo(800, 1);
            } 
                      
            else { 
                isClicked = false; 
                $("a").attr("href", "page2.html")

              }
            });
        
        //     $('.eye').on('click', function() {
        //       $(this).disable();
        //   });
        
        
        //     $(document).on('click', '.eye', function() {
        //       $("a").attr("href", "page1.html")
        //     });
        
        // $(".smoking").click(function() {
        //     $("a").attr("href", "page3.html")
        // })


        history.scrollRestoration = "manual"; 

        $(window).on('beforeunload', function(){ 
            $(window).scrollTop(0); 
        });
    })



})