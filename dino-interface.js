$(document).ready(function() {
  $('#getDinoText').click(function() {
    let initialWord = $('#dinoWord').val();
    $('#dinoWord').val('');

    let request=new XMLHttpRequest();
    let url = `http://dinoipsum.herokuapp.com/api?format=json&words=20&paragraphs=2`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status ===200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
      }
    }
    console.log('good')
    request.open('GET', url, true);
    request.send();

    getElements = function(response) {
      $('.showText').text(`The dino list is ${response}`)
    }


  });
});
