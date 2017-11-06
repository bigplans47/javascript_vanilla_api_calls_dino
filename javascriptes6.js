$(document).ready(function() {
  //note when using promises no internet connect allowed no error to occur, the other was of coding here did allow errors to show up, llok at adding a throw and catch error here as not conect to internet so promise just cant be invoken fully-sorta guess here
  $('#getDinoText').click(function() {
    let promise = new Promise(function(resolve, reject){
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
    // console.log(request);
    console.log(promise);
    promise.then(function(response) {
      body = JSON.parse(response);
      console.log(body[0][0]);
      $('.showText').text(`The answer is ${body}`);
    }, function(error) {
      $('.showText').text(`There was an error: ${response}`)
    });
  });
});
