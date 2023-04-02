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
            <a class="navbar-brand" href="index.html"><img class="img-responsive" style="max-width:100%;max-height:100%" src="assets/img/NOCASS 2023 logo.png" alt="NoCaSS 2023"></a>\
            </div>\
            <div class="navbar-collapse collapse">\
            <ul class="nav navbar-nav navbar-right">\
                <li><a href="https://twitter.com/intent/follow?screen_name=nocass_official"> @nocass_official</a></li>\
                <li><a href="index.html">Home</a></li>\
                <li><a href="about.html">About</a></li>\
                <li><a href="team.html">Team</a></li>\
                <li><a href="registration.html">Registration</a></li>\
                <li><a href="programme.html">Programme</a></li>\
                <li><a href="venue.html">Venue</a></li>\
                <li><a href="acknowledgement.html">Acknowledgement</a></li>\
            </ul>\
            </div><!--/.nav-collapse -->\
        </div>\
        </div>\
    ');
})
