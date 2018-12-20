const app = document.getElementById('root');


  
var h2 = document.createElement("a");
    h2.innerHTML = "Add Song";
    h2.setAttribute('href', "addsong.html");


const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(h2);
app.appendChild(container);


var request = new XMLHttpRequest();

request.open('GET', 'https://parseapi.back4app.com/classes/songs_library', true);
request.setRequestHeader("X-Parse-Application-Id", "VSPdpDKRMND382hqIRFIaiVLgbkhM0E1rL32l1SQ");
request.setRequestHeader("X-Parse-REST-API-Key", "E4ZeObhQv3XoHaQ3Q6baHGgbDPOkuO9jPlY9gzgA");
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(results => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

     const h1 = document.createElement('h1');
	 
      h1.textContent = results.title;
      
	  const h2 = document.createElement('AUDIO');
	 h2.setAttribute("src",results.link);
	 h2.setAttribute("controls", "controls");
	 
      

	  const img = document.createElement('img');
      img.src = results.thumbnail;
	  
      container.appendChild(card);
      card.appendChild(h1);
	  card.appendChild(h2);
	  card.appendChild(img);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();