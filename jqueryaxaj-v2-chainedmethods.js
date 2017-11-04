$(document).ready(function(){
  $('#getDinoText').click(function() {
    console.log('yo');
    $.get(`http://dinoipsum.herokuapp.com/api?format=json&words=20&paragraphs=2`).then(function(response){
      $('.showText').text(`The response is ${response}`);
      console.log(response);
    }).fail(function(error){
      $('.showText').text(`There was an error ${error.responseText}, try again`);
      console.log(error);
    });
  });
});
