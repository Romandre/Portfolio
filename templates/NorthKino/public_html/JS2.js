
$(window).ready(function(){                 
             $('.in').addClass('fade');  
             
                $('.place').click(function() {
                    if ($(this).hasClass('free')) {
                        $(this).removeClass('free').addClass('select');
                    }
                    else if ($(this).hasClass('select')) {
                        $(this).removeClass('select').addClass('free');
                    }                  
                    return false;  
                });
             
             
        });
        

