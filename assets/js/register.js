$(function(){

    var formUrl = 'https://docs.google.com/forms/d/1CmXZERcW5xw_BvVLGupVl2JpqdRej0Wrs3jmSrOUuec/formResponse';

    // Handle form submission
    $('form').submit(function(e) {
        var button = $('button[type=submit]', this),
            data = $(this).serialize();

        e.preventDefault();
        if (validate($(this))) {
            button.button('sending...');
            $.ajax({
                type: 'POST',
                url: formUrl,
                data: data,
                complete: function() {
                    button.button('reset');
                    // After submission, redirect to main page
                    window.location = 'thanks.html';
                }
            });
        }

    });

});