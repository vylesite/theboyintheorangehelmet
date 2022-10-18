document.addEventListener("DOMContentLoaded", () => {

  var isClicked = false;

  $(document).ready(function(){

    $(".title").fadeTo(1000, 1);

    $(".eye").click(function() {
      if ( isClicked === false ) { 
        isClicked = true; 
        $(".ajar").css("height", "1%");
        $(".title").css("visibility", "hidden");
        } 
              
      else { 
        isClicked = false; 
        $(".eye").css("transform", "translate(-50%, -50%) rotate(45deg) scale(3, 3)");
        $(".ball").css("z-index", 100);
      }
    });

    $('.eye').on('click', function() {
      $(this).disable();
  });


    $(document).on('click', '.eye', function() {
      $("a").attr("href", "page1.html")
    });
    

    history.scrollRestoration = "manual"; 

    $(window).on('beforeunload', function(){ 
      $(window).scrollTop(0); 
    });
  
        



                
  });


})

