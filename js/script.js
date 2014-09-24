$(document).ready(function start(){
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
        type: 'GET',
        dataType: 'json',
        success: function(quote) {
            var cat = quote.category;
            console.log(quote);
            if (cat != "Movies") {
                start();
                return;
            }
            else {
                $('#text h1').text(quote.quote).fadeIn(800);
                $('#text p').text("- "+quote.author).fadeIn(800);
            }

        },

        beforeSend: setHeader
    });
})

function setHeader(xhr) {
        xhr.setRequestHeader('X-Mashape-Key', 'j2Lg2CepGhmshmXFj70zdWgIkoGzp1OSVZvjsnLoSBzQjYcegB');
      }

//This script relies on APIs from Mashape (http://mashape.com/andruxnet/random-famous-quotes).