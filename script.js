
$(function() {
    $(".navToggle").click(function() {
        $(this) .toggleClass('active');
        
        
        if ($(this).hasClass("active")) {
            $(".globalMenuSp").addClass("active");
        }else {
            
            $(".globalMenuSp").removeClass("active");
        };
        
        
    });
    
   
    $("header a").click(function(){
        var id = $(this).attr("href");
        var position = $(id).offset().top;
        $("html,body").animate({
            "scrollTop": position },1500
        );
        $(".globalMenuSp").removeClass("active");
    });
    
    
});