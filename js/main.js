$(document).ready(function() {
    $(".all-products").click(function() {
        $(".verify-app").show();
        $(".verify-pc").show();
        $(".sign-pc-container").show();
        $(".sign-app").show();
    });

    $(".pc-products").click(function() {
        $(".verify-app").hide();
        $(".verify-pc").show();
        $(".sign-pc-container").show();
        $(".sign-app").hide();

    });

    $(".iOS-products").click(function() {
        $(".verify-app").show();
        $(".verify-pc").hide();
        $(".sign-pc-container").hide();
        $(".sign-app").show();
    });

    $(".download-btn").mousedown(function() {
        $(".download-btn").css("box-shadow","none");
    });
    $(".download-btn").mouseup(function() {
        $(".download-btn").css("box-shadow","0 5px 10px rgba(75,46,0,0.2)");
    });
});