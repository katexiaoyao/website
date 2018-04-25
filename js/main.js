$(document).ready(function() {
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
        $(".download-btn").css("box-shadow","none");
    });
    $(".download-btn").mouseup(function() {
        $(".download-btn").css("box-shadow","0 5px 10px rgba(75,46,0,0.2)");
    });

});