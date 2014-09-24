    $.ajax({
          url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
          type: 'GET',
          dataType: 'json',
          success: function(quote) { 
              console.log(quote);
              $('#text h1').text(quote.quote);
              $('#text p').text("- "+quote.author);
                                   },
          beforeSend: setHeader
        });

function setHeader(xhr) {
        xhr.setRequestHeader('X-Mashape-Key', 'j2Lg2CepGhmshmXFj70zdWgIkoGzp1OSVZvjsnLoSBzQjYcegB');
      }

//This script relies on APIs from Mashape.