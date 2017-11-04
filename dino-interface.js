$(document).ready(function() {
  $('#getDinoText').click(function() {
    let promise = new Promise(function(resolve, reject){
      console.log('yo');
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api?format=json&words=20&paragraphs=2`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open('GET', url, true);
      request.send();
    });
    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showText').text(`The answer is ${response}`);
    }, function(error) {
      $('.showText').text(`There was an error: ${response}`)
    });
  });
});
