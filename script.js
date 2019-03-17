//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,

    consoleDisplay = document.getElementById("ConsoleDisplay"),

    oldest = speechesArray[0].year,
    newest = speechesArray[0].year,

    donationHeader = document.createElement("h3");

    pageArticles = document.getElementsByTagName("article");


for(var i = 0; i < speechesArray.length; i++){
  if(speechesArray[i].year < oldest){
    oldest = speechesArray[i].year;
  }
  if(speechesArray[i].year > newest){
    newest = speechesArray[i].year;
  };
};

function noRed (){
  for(i=0; i<pageArticles.length; i++) {
    pageArticles[i].classList.remove("generous-donation");
  };
};

function addRed (){
  for(i=0; i<pageArticles.length; i++) {
    pageArticles[i].classList.add("generous-donation");
  };
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.

  donation = window.prompt("How much would you like to donate?");
  consoleDisplay.innerHTML = "";
  consoleDisplay.append(donationHeader);

  if(donation < 100 && donation > 0 && donation !== null){
    donationHeader.innerHTML = "Thank you for your donation of $" + donation + "!";
    donationHeader.setAttribute("style", "color: #fff; text-align: center; font-size: 1.25em");
    noRed();
  } else if(donation >= 100 && donation !== null){
    donationHeader.innerHTML = "Thank you for your very generous donation of $" + donation + "!";
    donationHeader.setAttribute("style", "color: #DB152C; text-align: center; font-size: 2em");
    addRed();
  } else if(donation <= 0){
    consoleDisplay.innerHTML = "<img src='img/poor.gif'>";
    donationHeader.innerHTML = "";
    noRed();
  } else {
    donationHeader.innerHTML = "Are you sure you entered an amount?";
    donationHeader.setAttribute("style", "color: #fff; text-align: center; font-size: 1.25em");
    noRed();
  };
});


document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.';

  if(speechesArray[0].yearIsBCE === true){
    consoleDisplay.innerHTML += "<br> <br> This speech took place before the common era."
  } else{
    consoleDisplay.innerHTML += "<br> <br> This speech took place during the common era."
  }

  if(speechesArray[0].year === oldest){
    consoleDisplay.innerHTML += "<br> <br> This is the oldest speech on the page.";
  } else if(speechesArray[0].year === newest){
    consoleDisplay.innerHTML += "<br> <br> This is the most recent speech on the page.";
  } else{
    consoleDisplay.innerHTML += "<br> <br> This is neither the oldest nor the most recent speech on the page."
  }
});


document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.';

  if(speechesArray[1].yearIsBCE === true){
    consoleDisplay.innerHTML += "<br> <br> This speech took place before the common era."
  } else{
    consoleDisplay.innerHTML += "<br> <br> This speech took place during the common era."
  }

  if(speechesArray[1].year === oldest){
    consoleDisplay.innerHTML += "<br> <br> This is the oldest speech on the page.";
  } else if(speechesArray[1].year === newest){
    consoleDisplay.innerHTML += "<br> <br> This is the most recent speech on the page.";
  } else{
    consoleDisplay.innerHTML += "<br> <br> This is neither the oldest nor the most recent speech on the page."
  }
});


document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.';

  if(speechesArray[2].yearIsBCE === true){
    consoleDisplay.innerHTML += "<br> <br> This speech took place before the common era."
  } else{
    consoleDisplay.innerHTML += "<br> <br> This speech took place during the common era."
  }

  if(speechesArray[2].year === oldest){
    consoleDisplay.innerHTML += "<br> <br> This is the oldest speech on the page.";
  } else if(speechesArray[2].year === newest){
    consoleDisplay.innerHTML += "<br> <br> This is the most recent speech on the page.";
  } else{
    consoleDisplay.innerHTML += "<br> <br> This is neither the oldest nor the most recent speech on the page."
  }
});