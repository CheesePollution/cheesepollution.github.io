var questions1 = ['A Company offers Money in exchange for turning a blind eye for their enviromental problems for 2 Years', 'Host a Presentation', 'Host a public conference about the effects of enviromental change', 'Expose a Scandal/Lie of a company that is not meeting regulations', 'Proposal for the universal adoptation of a advanced kind of air filter recently made avaliable'];
var questions2 = ['Proposal for the universal banning of Internal Combustion Land Vechicles', 'A Wealthy Billionare is interested in your services and wants a share in sales for a large sum of $$$', 'Proposal for international subsidies for the transitioning to renewable energy from fossial fuels', '16'];
var questions3 = ['Proposal the implementation of a livestock limit per captia for each country', 'Billionare Shareholder violating Enviromental restrictions', 'Propose the implementation of a Carbon emissions restriction', 'Proposal for the banning of the use of fossial fuels'];
var questions4 = ['Country not following passed bill', "Host a public conference about the effects of what you're doing", '39'];
var questions1Q = ['A Company offers Money in exchange for turning a blind eye for their enviromental problems for 2 Years', 'Host a Presentation', 'Host a public conference about the effects of enviromental change', 'Expose a Scandal/Lie of a company that is not meeting regulations', 'Proposal for the universal adoptation of a advanced kind of air filter recently made avaliable'];
var questions2Q = ['Proposal for the universal banning of Internal Combustion Land Vechicles', 'A Wealthy Billionare is interested in your services and wants a share in sales for a large sum of $$$', 'Proposal for international subsidies for the transitioning to renewable energy from fossial fuels', '16'];
var questions3Q = ['Proposal the implentation of a livestock limit per captia for each country', 'Billionare Shareholder violating Enviromental restrictions', 'Propose the implentation of a Carbon emissions restriction', 'Proposal for the banning of the use of fossial fuels'];
var questions4Q = ['Country not following passed bill', "Host a public conference about the effects of what you're doing"];
var repeatableQuestions = ['Propose the tightening of Carbons emissions restrictions'];
var requiredRepeatableQuestions = ['Country abusing subsidies for their own gain', "Country can't afford to transition to the power grid", 'Country violating the Carbon Emission restrictions', 'Country violating the livestock bill', 'Proposal for the tightening of the livestock bill'];
var repeatableQuestionsNumber;
var questionSection = 1;
var currentQuestion = 0;
var questionNumber;
var dunnoQN;
var multiplier = 1;

//var billIsPassed = false;

var trueOrFalse = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
var selectedProbability;
var questionIndex = 1;
var shuffledArray1 = [];
var shuffledArray2 = [];
var shuffledArray3 = [];
var shuffledArray4 = [];
var link = "results";

var pollutionsPoints = [[1, -1, 1, 1, 1, 10], [2, -2, 1, 2, 2, 10], [3, -3, 1, 3, 3, 10], [4, -4, 1, 4, 4, 10], [5, -5, 1, 5, 5, 10], [6, -6, 1, 6, 6, 10], [7, -7, 1, 7, 7, 10], [8, -8, 1, 8, 8, 10], [9, -9, 1, 9, 9, 10], [10, -10, 1, 10, 10, 10], [11, -11, 1, 11, 11, 10], [12, -12, 1, 12, 12, 10], [13, -13, 1, 13, 13, 10], [14, -14, 1, 14, 14, 10], [15, -15, 1, 15, 15, 10], [16, -16, 1, 16, 16, 10], [17, -17, 1, 17, 17, 10], [18, -18, 1, 18, 18, 10]]; //0 is money, 1 is pollution, 2 is PA, 3 is increase level, and 4 is time
var pollutionsPoints1 = [[1, -1, 1, 1, 1, 10], [2, -2, 1, 2, 2, 10], [3, -3, 1, 3, 3, 10], [4, -4, 1, 4, 4, 10], [5, -5, 1, 5, 5, 10], [6, -6, 1, 6, 6, 10], [7, -7, 1, 7, 7, 10], [8, -8, 1, 8, 8, 10], [9, -9, 1, 9, 9, 10], [10, -10, 1, 10, 10, 10], [11, -11, 1, 11, 11, 10], [12, -12, 1, 12, 12, 10], [13, -13, 1, 13, 13, 10], [14, -14, 1, 14, 14, 10], [15, -15, 1, 15, 15, 10], [16, -16, 1, 16, 16, 10], [17, -17, 1, 17, 17, 10], [18, -18, 1, 18, 18, 10]]; //0 is money, 1 is pollution, 2 is PA, 3 is increase level, and 4 is time
var pollutionsPoints2 = [[1, -1, 1, 1, 1, 10], [2, -2, 1, 2, 2, 10], [3, -3, 1, 3, 3, 10], [4, -4, 1, 4, 4, 10], [5, -5, 1, 5, 5, 10], [6, -6, 1, 6, 6, 10], [7, -7, 1, 7, 7, 10], [8, -8, 1, 8, 8, 10], [9, -9, 1, 9, 9, 10], [10, -10, 1, 10, 10, 10], [11, -11, 1, 11, 11, 10], [12, -12, 1, 12, 12, 10], [13, -13, 1, 13, 13, 10], [14, -14, 1, 14, 14, 10], [15, -15, 1, 15, 15, 10], [16, -16, 1, 16, 16, 10], [17, -17, 1, 17, 17, 10], [18, -18, 1, 18, 18, 10]]; //0 is money, 1 is pollution, 2 is PA, 3 is increase level, and 4 is time

var rPollutionsPoints = [[1, -1, 1, 1, 1, 10], [2, -2, 1, 2, 2, 10], [3, -3, 1, 3, 3, 10], [4, -4, 1, 4, 4, 10]]; //0 is money, 1 is pollution, 2 is PA, 3 is increase level, and 4 is time
var rPollutionsPoints1 = [[1, -1, 1, 1, 1, 10], [2, -2, 1, 2, 2, 10], [3, -3, 1, 3, 3, 10], [4, -4, 1, 4, 4, 10]]; //0 is money, 1 is pollution, 2 is PA, 3 is increase level, and 4 is time
var rPollutionsPoints2 = [[1, -1, 1, 1, 1, 10], [2, -2, 1, 2, 2, 10], [3, -3, 1, 3, 3, 10], [4, -4, 1, 4, 4, 10]]; //0 is money, 1 is pollution, 2 is PA, 3 is increase level, and 4 is time

var minusOrPlusQuestions = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

var valueLol;
var tempCQ;

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

var choice;
var year = 2030;
var money = 1000; //Universal Dollar
var airPollutionLevel = 500; //AQI, Air Quality Index
var publicAwarenessLevel = 0; //people
var pollutionIncreaseLevel = 90; //AQI, Air Quality Index
var pollutionDecreaseLevel = 10; //AQI, Air Quality Index
var pollPerc = 50;
var monPerc = 10;
var pubPerc = 0;
var iPerc = 90; //pollution increase percentage
var dPerc = 10;
var status = "Semi-Dangerous";

document.getElementById('visButton').onclick = vis;
document.getElementById('opt1').onclick = foo1;
document.getElementById('opt2').onclick = foo2;
document.getElementById('opt3').onclick = foo3;

function init() { //check if change section or no and stuff
  if (questionIndex == 6) {
    currentQuestion = shuffledArray2[0];
    document.getElementById("proposal").innerHTML = currentQuestion;
    questionSection = 2;
  } else if (questionIndex == 11) {
    currentQuestion = shuffledArray3[0];
    document.getElementById("proposal").innerHTML = currentQuestion;
    questionSection = 3;
  } else if (questionIndex == 16) {
    currentQuestion = shuffledArray4[0];
    document.getElementById("proposal").innerHTML = currentQuestion;
    questionSection = 4;
  }
}

function vis() { //initialization
  document.getElementById('buttonDiv').style.visibility = "visible";
  document.getElementById('visButton').style.visibility = "hidden";
  shuffledArray1 = shuffle(questions1);
  currentQuestion = shuffledArray1[0];
  shuffledArray2 = shuffle(questions2);
  shuffledArray3 = shuffle(questions3);
  shuffledArray4 = shuffle(questions4);
  selectedProbability = shuffle(trueOrFalse);
  if (questionSection == 1) {
    questionNumber = questions1Q.indexOf(currentQuestion);
  } else if (questionSection == 2) {
    questionNumber = 5+questions2Q.indexOf(currentQuestion);
  } else if (questionSection == 3) {
    questionNumber = 10+questions3Q.indexOf(currentQuestion);
  } else if (questionSection == 4) {
    questionNumber = 15+questions4Q.indexOf(currentQuestion);
  }
  /*
  console.log(shuffledArray1);
  console.log(shuffledArray2);
  console.log(shuffledArray3);
  console.log(shuffledArray4);
  console.log(currentQuestion);
  */

  //Display first question
  if (selectedProbability[0] == 0) {
    document.getElementById("proposal").innerHTML = currentQuestion;
  } else if (selectedProbability[0] == 1) {
    document.getElementById("proposal").innerHTML = repeatableQuestions[0];
  }

}

function changeValues() {
  if (selectedProbability[0] == 0 && choice == 1) { //if not a repeatable question
    valueLol = pollutionsPoints[questionNumber];
  } else if (selectedProbability[0] == 0 && choice == 2) {
    valueLol = pollutionsPoints1[questionNumber];
  } else if (selectedProbability[0] == 0 && choice == 3) {
    valueLol = pollutionsPoints2[questionNumber];
  } else if (selectedProbability[0] == 1 && choice == 1) {
    valueLol = rPollutionsPoints[repeatableQuestionsNumber-1];
  } else if (selectedProbability[0] == 1 && choice == 2) {
    valueLol = rPollutionsPoints1[repeatableQuestionsNumber-1];
  } else if (selectedProbability[0] == 1 && choice == 3) {
    valueLol = rPollutionsPoints2[repeatableQuestionsNumber-1];
  }

  if (pollutionDecreaseLevel <= 25) {
    multiplier = 15;
  } else if (pollutionDecreaseLevel <= 30) {
    multiplier = 10;
  } else if (pollutionDecreaseLevel <= 35) {
    multiplier = 5;
  } else if (pollutionDecreaseLevel <= 50) {
    multiplier = 2;
  } else if (pollutionDecreaseLevel <= 70) {
    multiplier = 1.5;
  } else if (pollutionDecreaseLevel <= 80) {
    multiplier = 1;
  }

  airPollutionLevel = (airPollutionLevel + valueLol[1]) + pollutionIncreaseLevel + (3 * (10 + questionNumber + publicAwarenessLevel/100)) - pollutionDecreaseLevel*multiplier;
  money = money + valueLol[0];
  year = year+valueLol[5];
  publicAwarenessLevel = publicAwarenessLevel + (valueLol[4]*100);
  if (minusOrPlusQuestions.includes(currentQuestion) == true) {
    pollutionIncreaseLevel = pollutionIncreaseLevel + valueLol[3];
    pollutionDecreaseLevel = 100 - pollutionIncreaseLevel;
  } else {
    pollutionDecreaseLevel = pollutionDecreaseLevel + valueLol[2];
    pollutionIncreaseLevel = 100 - pollutionDecreaseLevel;
  }

  iPerc = (pollutionIncreaseLevel);
  dPerc = (pollutionDecreaseLevel);
  pubPerc = (publicAwarenessLevel/1000);
  monPerc = (money/100);
  pollPerc = (airPollutionLevel/10);
  if (pollPerc/10 > 6 && pollPerc/10 < 8) {
    status = "Semi-Dangerous";
  } else if (pollPerc/10 >= 8 && pollPerc/10 < 10) {
    status = "Very Dangerous, Almost Dead";
  } else if (pollPerc/10 >= 10) {
    status = "Dead";
  } else if (pollPerc/10 >= 4 && pollPerc/10 <= 6) {
    status = "Ok-ish";
  } else if (pollPerc/10 >= 1 && pollPerc/10 <= 3) {
    status = "Very Good";
  } else {
    status = "Something Has Gone Very Very Wrong";
  }
  document.getElementById("proggPoll").style.width = pollPerc + "%";
  document.getElementById("pollLb").innerHTML = airPollutionLevel + " AQI (" + status + ")";
  document.getElementById("monPoll").style.width = monPerc + "%";
  document.getElementById("monLb").innerHTML = money + " UD";

  document.getElementById("minusProgEH").style.width = dPerc + "%";
  document.getElementById("minusEHlb").innerHTML = "-" + pollutionDecreaseLevel + " AQI";
  document.getElementById("plusProgEH").style.width = iPerc + "%";
  document.getElementById("plusEHlb").innerHTML = "+" + pollutionIncreaseLevel + " AQI";
  document.getElementById("progPA").style.width = pubPerc + "%";
  document.getElementById("pAlb").innerHTML = publicAwarenessLevel + " people";
  document.getElementById("currYear").innerHTML = year;
}

//foos change question
function generalFoo() {
  console.log(questionNumber);
  if (questionNumber == 12) {
    if (choice == 1 || choice == 2){
      repeatableQuestions.push(requiredRepeatableQuestions[3]);
    }
  } else if (questionNumber == 8) {
    if (choice == 1 || choice == 2) {
      repeatableQuestions.push(requiredRepeatableQuestions[0]);
      repeatableQuestions.push(requiredRepeatableQuestions[1]);
    }
  } else if (questionNumber == 10) {
    if (choice == 1 || choice == 2) {
      repeatableQuestions.push(requiredRepeatableQuestions[4]);
      repeatableQuestions.push(requiredRepeatableQuestions[5]);
    }
  }

  repeatableQuestions = shuffle(repeatableQuestions);

  if (selectedProbability[0] == 1) { //if a repeatable question
    //1. Set link to open
    if (repeatableQuestions[0] == 'Country abusing subsidies for their own gain') {
      repeatableQuestionsNumber = 1;
    } else if (repeatableQuestions[0] == "Country can't afford to transition to the power grid") {
      repeatableQuestionsNumber = 2;
    } else if (repeatableQuestions[0] == 'Propose the tightening of Carbons emissions restrictions') {
      repeatableQuestionsNumber = 3;
    } else if (repeatableQuestions[0] == 'Country violating the Carbon Emission restrictions') {
      repeatableQuestionsNumber = 4;
    } else if (repeatableQuestions[0] == 'Country violating the livestock bill') {
      repeatableQuestionsNumber = 5;
    } else if (repeatableQuestions[0] == 'Proposal for the tightening of the livestock bill') {
      repeatableQuestionsNumber = 6;
    }

    link = "results/resultsR" + "-" + repeatableQuestionsNumber + "-" + choice;
    //console.log(link);

    //2. Change values
  } else if(selectedProbability[0] == 0) { //if not a repeatable question
    //1. Set link to open
    dunnoQN = questionNumber+1;
    link = "results/results" + dunnoQN + "-" + choice;

    //2. Change values

    //3. Splice & update question list
    if (questionSection == 1) {
      shuffledArray1.splice(0, 1);
      questionNumber = questions1Q.indexOf(currentQuestion);
    } else if (questionSection == 2) {
      shuffledArray2.splice(0, 1);
      questionNumber = 5+questions2Q.indexOf(currentQuestion);
    } else if (questionSection == 3) {
      shuffledArray3.splice(0, 1);
      questionNumber = 10+questions3Q.indexOf(currentQuestion);
    } else if (questionSection == 4) {
      shuffledArray4.splice(0, 1);
      questionNumber = 15+questions4Q.indexOf(currentQuestion);
    }
  }

  window.open(link);

  changeValues();


  //Choose new question
  repeatableQuestions = shuffle(repeatableQuestions);
  selectedProbability = shuffle(trueOrFalse);

  //Display new question
  if (selectedProbability[0] == 0) {
    if (questionSection == 1) {
      currentQuestion = shuffledArray1[0];
    } else if (questionSection == 2) {
      currentQuestion = shuffledArray2[0];
    } else if (questionSection == 3) {
      currentQuestion = shuffledArray3[0];
    } else if (questionSection == 4) {
      currentQuestion = shuffledArray4[0];
    }
    init();
    questionIndex++;
    document.getElementById("proposal").innerHTML = currentQuestion;

  } else if (selectedProbability[0] == 1) {
    document.getElementById("proposal").innerHTML = repeatableQuestions[0];
  }
  if (questionIndex == 6 || questionIndex == 11 || questionIndex == 16){
    init();
  }
}

function foo1() {
  choice = 1;
  generalFoo();
}

function foo2() {
  choice = 2;
  generalFoo();
}

function foo3() {
  choice = 3;
  generalFoo();
}

//long term effects
function lTE() {

}
