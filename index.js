function getAPI () {
    fetch('https://api.nasa.gov/planetary/apod?api_key=xXixbLulODXYJyNODEKWqVYdtkSB49WrwCBodFcU')
    .then(response => response.json())
    .then(responseJson => displayAPI(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayAPI () {
    console.log(responseJson);
    $('.nasa-image').replaceWith(
        `<img src="${responseJson.message}" class="nasa-image">`
      )
      //display the results section
      $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getAPI();
    });
  }
