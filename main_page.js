document.addEventListener('DOMContentLoaded', function() {
    var button1 = document.getElementById('aboutID');
    console.log(button1);

    button1.addEventListener('click', function(event) {
        window.alert("Page not developed yet");
    })
    
    /* If we want to add a fading image - github bug
    var image = document.getElementById('myImage');

    var lastScrollTop = 0;

    window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

    if (st > lastScrollTop){
        image.style.opacity = '1';
    } else {
        image.style.opacity = '0'
    }

    });
    */
})