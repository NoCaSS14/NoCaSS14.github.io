$(document).ready(function()
{
    $('#navbar_replacement').replaceWith('\
        <div class="navbar navbar-inverse navbar-static-top">\
        <div class="container">\
            <div class="navbar-header">\
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
            </button>\
       <!--     <a class="navbar-brand" href="index.html"><img class="img-responsive" style="max-height:100%;height:40px" src="assets/img/Horizontal_header.svg" alt="NoCaSS"></a>\ -->\
            <a class="navbar-brand" href="index.html"><object type="image/svg+xml" data="assets/img/Horizontal_header.svg" width="100%" height="40px"></object></a>\
            </div>\
            <div class="navbar-collapse collapse">\
            <ul class="nav navbar-nav navbar-right">\
                <li><a href="https://twitter.com/intent/follow?screen_name=nocass2015">Follow @nocass2015</a></li>\
                <li><a href="index.html">Home</a></li>\
                <li><a href="about.html">About</a></li>\
                <li><a href="programme.html">Programme</a></li>\
                <li><a href="venue.html">Venue</a></li>\
                <li><a href="registration.html">Registration</a></li>\
                <li><a href="sponsors.html">Sponsorship</a></li>\
            </ul>\
            </div><!--/.nav-collapse -->\
        </div>\
        </div>\
    ');
})