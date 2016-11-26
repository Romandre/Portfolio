 
 
$(document).ready(function(){           
    
    $('.smallImg').click( function (event) {
        event.stopPropagation(); 
        var movieValue = $(this).attr('data-movie');
         var bigImg = $( '<span class="bigImg" style="background-image: url(\'pics/' + movieValue +'.jpg\'); "></span>');
                                          
        $(".bp").append(bigImg);
        $(".dark").addClass('dk'); 
        $(".knopka").css('display', 'block');
        
         
        });
        
        $("body").click( function (){
            
                $(".bigImg").fadeOut("slow", function() {
                    $(this).remove();
                });
                $(".dark").removeClass('dk');
                $(".knopka").fadeOut("slow", function() {
                    $(this).css('display', 'none');
                });
        });
     NProgress.start();             
});
        
        $(window).load(function(){
                    
//                 $('.in').addClass('fade');                
            
            setTimeout(function(){
                NProgress.set(0.4);
            }, 1000);
            setTimeout(function(){
                NProgress.set(0.6);
            }, 2000);
            setTimeout(function(){               
                NProgress.set(0.8);
            }, 3000);
            setTimeout(function(){
                NProgress.done();
                 $('.anim').removeClass('anim').addClass('animcut'); 
                 $('.in').addClass('fade');                
            }, 4000);
                setTimeout(function(){
                     $('.navbar-brand').addClass('light');
                }, 5000);
        });
        
         
        
        
        

