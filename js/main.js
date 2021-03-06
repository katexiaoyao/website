$(document).ready(function() {
    $("input").focus(function() {
        $("input").css({"border-color":"#ff9c00", "width": "226px"});
        $(".input-btn").css({"background": "url(../assets/images/inputfocus.png) 50% 50% no-repeat", "border-left": "1px solid #ff9c00"});
    });
    $("input").blur(function() {
        $("input").css({"border-color":"#313131", "width": "176px"});
        $(".input-btn").css({"background": "url(../assets/images/search.png) 50% 50% no-repeat", "border-left": "1px solid #313131"});
    });
    
    $(".banner").mousemove(function(e) {
        var rotateX = (e.pageY-288) / 288*10  + "deg";
        var rotateY = (600 - e.pageX) / 600*10 + "deg";
        $(".banner-img").css("transform","rotateX("+ rotateX +") rotateY(" + rotateY + ")");
    });

    $(".all-products").click(function() {
        $(".verify-app").show();
        $(".verify-pc").show();
        $(".sign-pc-container").show();
        $(".sign-app").show();
        $(".all-products").addClass("all-products-click");
        $(".pc-products").removeClass("pc-products-click");
        $(".ios-products").removeClass("ios-products-click");
        $(".all-products h6").css("color","#ff9c00");
        $(".pc-products h6").css("color","#262626");
        $(".ios-products h6").css("color","#262626");
    });
    $(".pc-products").click(function() {
        $(".verify-app").hide();
        $(".verify-pc").show();
        $(".sign-pc-container").show();
        $(".sign-app").hide();        
        $(".all-products").removeClass("all-products-click");
        $(".pc-products").addClass("pc-products-click");
        $(".ios-products").removeClass("ios-products-click");
        $(".all-products h6").css("color","#262626");
        $(".pc-products h6").css("color","#ff9c00");
        $(".ios-products h6").css("color","#262626");
    });
    $(".ios-products").click(function() {
        $(".verify-app").show();
        $(".verify-pc").hide();
        $(".sign-pc-container").hide();
        $(".sign-app").show();
        $(".all-products").removeClass("all-products-click");
        $(".pc-products").removeClass("pc-products-click");
        $(".ios-products").addClass("ios-products-click");
        $(".all-products h6").css("color","#262626");
        $(".pc-products h6").css("color","#262626");
        $(".ios-products h6").css("color","#ff9c00");
    });

    
    $(".download-btn").mousedown(function() {
        $(this).css("box-shadow","none");
    });
    $(".download-btn").mouseup(function() {
        $(this).css("box-shadow","0 5px 10px rgba(75,46,0,0.2)");
        if ($(this).hasClass("verify-app-dlbtn")) {
            $(".popup-cover").css("display","block");
            $(".verify-app-download").css("display","block");
        } else if ($(this).hasClass("verify-pc-dlbtn")) {
            $(".popup-cover").css("display","block");
            $(".verify-pc-download").css("display","block");
        } else if ($(this).hasClass("sign-app-dlbtn")) {
            $(".popup-cover").css("display","block");
            $(".sign-app-download").css("display","block");
        }
    });
    $(".download-popup .close-btn").click(function() {
        $(".popup-cover, .verify-app-download, .verify-pc-download, .sign-app-download").css("display","none");
    });
    // 
    $(".pc-download a").click(function() {
        $(".popup-cover, .verify-app-download, .verify-pc-download, .sign-app-download").css("display","none");
    })
});