//do dino setup in ajax and es6wpromises
$(document).ready(function() {
  $('#getDinoText').click(function() {
    console.log('yo');
    $.ajax({
      url: `http://dinoipsum.herokuapp.com/api?format=json&words=20&paragraphs=2`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showText').text(`The text is ${response}.`)
      },
      error: function() {
        $('.showText').text(`There was an error please try again`)
      }
    });
  });

});
