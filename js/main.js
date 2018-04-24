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
    })
})