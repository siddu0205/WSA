$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', '#ff5722'); // Change to a darker color
        } else {
            $('.navbar').css('background-color', '#ff7200'); // Original color
        }
    });
});
