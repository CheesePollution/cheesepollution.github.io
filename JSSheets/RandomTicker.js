var shuffle = function(array) {
  var i = array.length;
  var j = 0;
  var temp;
  while (i--) {
      j = Math.floor(Math.random() * (i+1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

window.addEventListener("load", randomizeTicker, true);
window.addEventListener("load", fixBtns, true);

var tickerQuestions = ["You are a business man from the UN with a reputation of a homeless man... Yeah so save Earth from pollution, good luck", "Don't die from corona or global warming >:).", "FREEZE YOUR BRAINN. Shatter your skull, fight pain with more pain...", "flkdjasluisenifnidsajiofjdklsajk;.", "'Oil Company sued for 'misleading people with adverts' by City X", "Conspiracy Theorist: 'Those Environmentalists are killing Elephants!'", "lol", "Country files bankruptcy for 'oil industry not profitable'", "Breaking News: Earth is Flat. And The Sun is star shaped.", "NASA: Flat Earth Conspiracy has taken over a News Network", "Breaking News: News Network files bankruptcy: 'No one watches TV anymore'", "Flat Earth Society admits false conspiracy online, claiming The Earth is a globe supported on the back of a giant universe turtle", "I'm gay", "Thank", "monkey's be like ooo ooo ah ah", "gaganajeet", "5G towers confirmed to not cause Covid-19, instead, they make ducks horny", "Pick a place to die where it's high and dry"];

var animationDurationTime = tickerQuestions.length*(15.555555556);

var spaceBar = "&nbsp"
var spaceBars;

function randomizeTicker() {
  tickerQuestions = shuffle(tickerQuestions);
  for (var i = 0; i < tickerQuestions.length; i++) {
    var elm = document.createElement("div");
    elm.classList.add("ticker-item");
    elm.classList.add("disable-select");
    spaceBars = spaceBar.repeat((width/4)*(3/4));
    elm.innerHTML = tickerQuestions[i] + spaceBars;
    document.getElementById("inbetween").appendChild(elm);
  }

  var cls = document.getElementsByClassName("ticker-move");
  cls.inbetween.style.animationDuration = animationDurationTime + "s";
}

function fixBtns() {
  document.getElementById("opt1").style.width = width*0.5 + "px";
  document.getElementById("opt2").style.width = width*0.5 + "px";
  document.getElementById("opt3").style.width = width*0.5 + "px";
}

function hover(element) {
  element.setAttribute('src', 'Images/play_onclicked.png');
}

function unhover(element) {
  element.setAttribute('src', 'Images/play_clicked.png');
}
