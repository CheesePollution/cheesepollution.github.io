var questions1 = ['A Company offers Money in exchange for turning a blind eye for their enviromental problems for 2 Years', 'Host a Presentation', 'Host a public conference about the effects of environmental change', 'Expose a Scandal/Lie of a company that is not meeting regulations', 'Proposal for the universal adoptation of a advanced kind of air filter recently made avaliable'];
var questions2 = ['Proposal for the universal banning of Internal Combustion Land Vechicles', 'A Wealthy Billionare is interested in your services and wants a share in sales for a large sum of $$$', 'Proposal for international subsidies for the transitioning to renewable energy from fossial fuels'];
var questions3 = ['Proposal the implementation of a livestock limit per captia for each country', 'Billionare Shareholder violating Enviromental restrictions', 'Propose the implementation of a Carbon emissions restriction', 'Proposal for the banning of the use of fossial fuels'];
var questions4 = ['Country not following passed bill', "Host a public conference about the effects of what you're doing"];
var questions1Q = ['A Company offers Money in exchange for turning a blind eye for their enviromental problems for 2 Years', 'Host a Presentation', 'Host a public conference about the effects of environmental change', 'Expose a Scandal/Lie of a company that is not meeting regulations', 'Proposal for the universal adoptation of a advanced kind of air filter recently made avaliable'];
var questions2Q = ['Proposal for the universal banning of Internal Combustion Land Vechicles', 'A Wealthy Billionare is interested in your services and wants a share in sales for a large sum of $$$', 'Proposal for international subsidies for the transitioning to renewable energy from fossial fuels'];
var questions3Q = ['Proposal the implentation of a livestock limit per captia for each country', 'Billionare Shareholder violating Enviromental restrictions', 'Propose the implentation of a Carbon emissions restriction', 'Proposal for the banning of the use of fossial fuels'];
var questions4Q = ['Country not following passed bill', "Host a public conference about the effects of what you're doing"];
var repeatableQuestions = ['Propose the tightening of Carbons emissions restrictions'];
var requiredRepeatableQuestions = ['Country abusing subsidies for their own gain', "Country can't afford to transition to the power grid", 'Country violating the Carbon Emission restrictions', 'Country violating the livestock bill', 'Proposal for the tightening of the livestock bill', 'Management of the livestock regulation'];
var requiredValueQuestions = ["Host a Presentation", "Host a public conference about the effects of environmental change", "Proposal for the universal adoptation of a advanced kind of air filter recently made avaliable", "Proposal for the universal banning of Internal Combustion Land Vechicles", "Proposal for international subsidies for the transitioning to renewable energy from fossial fuels", "Propose the implementation of a Carbon emissions restriction", "Proposal for the banning of the use of fossial fuels", "Country not following passed bill (requires at least one bill passed)", "Propose the tightening of Carbons emissions restrictions", "Country violating the Carbon Emission restrictions", "Country violating the livestock regulation", "Country violating the fossial extraction regulation"];
var questionsResponse = [["Offer Accepted","Only for 1 year","Offer Denied"], ["Offer Accepted (full presentation) (Requires 5000 PA)","Only a small presentation","Offer Denied"], ["Offer Accepted (Full Conference) (Requires 10,000 PA)","Only a small one (Requires 5000 PA)","Offer Denied"], ["Fully Expose","Partly expose (if not enough funds)","Ignore"], ["Pass Now (Requires 10,000 PA)","Pass Later","Veto Bill"], ["Pass Now (Requires 30,000 PA)","Pass Later","Veto Bill"], ["Offer Accepted","Limited amount of shares only","Offer Denied"], ["Pass Now (Requires 10,000 PA)","Pass Later","Veto Bill"], ["Pass Now","Pass Later","Veto Bill"], ["Pass Now","Pass Later","Veto Bill"], ["Fully Buy Back","","Do Nothing"], ["Pass Now (Requires 30,000 PA)","Pass Later","Veto Bill"], ["Pass Now (Requires 30,000 PA)","Pass Later","Veto the bill"], ["Pass Now","Pass Later","Veto Bill"], ["Fully Embargo (Requires 10,000 PA)","Sanction Against Industry (Requires 5000 PA)","Do Nothing"], ["Host Conference","Host Online Conference","Cancel The Conference"]];
var questionRepeatableRepsonse = [["Cut Subsidies and Sanctions","Cut Subsidies","Do Nothing"], ["Increase Subsidies","Do Nothing","Sanction the Country anyways (you jerk)"], ["Tighten the restrictions (Requires 10,000 PA)","Do Nothing","Veto the bill"], ["Fully Embargo (Requires 10,000 PA)","Sanction Against Industry (Requires 5000 PA)","Do Nothing"], ["Lower the Livestock Limit","Slightly Lower the Livestock Limit","Veto the bill"],]
var repeatableQuestionsNumber;
var questionSection = 1;
var currentQuestion = 0;
var questionNumber;
var dunnoQN;
var questionStorage;
var canDo = true;

var billIsPassed = false;
var trueOrFalse = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
var selectedProbability;
var questionIndex = 1;
var shuffledArray1 = [];
var shuffledArray2 = [];
var shuffledArray3 = [];
var shuffledArray4 = [];
var link = "results";
var changed = false;

var pollutionsPoints = [[1000, 0, -500, 0, -5, 10], [-1000, 0, 1000, 0, 0, 10], [-1000, 0, 1000, 0, 0, 10], [-1000, 0, 500, 0, 1, 10], [-1000, 0, 1000, 0, 5, 10], [-5000, 0, 5000, 0, 10, 10], [75000, 0, 500, 0, 0, 10], [-5000, 0, 5000, 0, 10, 10], [-500, 0, 1000, 0, 0, 10], [-500, 0, 500, 0, 1, 10], [-5000, 0, 500, 0, 0, 10], [-500, 0, 1000, 0, 5, 10], [-10000, 0, 10000, 0, -20, 10], [-500, 0, 1000, 0, 5, 10], [-1000, 0, 500, 0, 1, 10], [-1000, 0, 1000, 0, 0, 10]]
//0 is money, 1 is pollution, 2 is PA, 4 is increase level, and 5 is time
var pollutionsPoints1 = [[500, 0, 0, 0, -1, 10], [-500, 0, 500, 0, 0, 10], [-500, 0, 500, 0, 0, 10], [-500, 0, 500, 0, 0, 10], [0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0], [+500, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 5000, 0, 0, 10], [0, 0, 0, 1, 0, 0], [-1000, 0, 0, 0, -1, 10], [0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0], [-500, 0, 500, 0, 0, 10], [0, 0, 0, 1, 0, 0]];
//0 is money, 1 is pollution, 2 is PA, 4 is increase level, and 5 is time
var pollutionsPoints2 = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, -1, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, -5, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, -1, 0], [0, 0, 0, 0, 0, 0]];
//0 is money, 1 is pollution, 2 is PA, 4 is increase level, and 5 is time

var rPollutionsPoints = [[0, 0, 5000, 0, 1, 10], [-500, 0, 500, 0, 0, 10], [-500, 0, 500, 0, 1, 10], [-1000, 0, 500, 0, 1, 10], [-1000, 0, 1000, 0, 5, 10], [-10000, 0, 10000, 0, 20, 10]];
//0 is money, 1 is pollution, 2 is PA, 4 is increase level, and 5 is time
var rPollutionsPoints1 = [[+500, 0, 500, 0, 0, 10], [0, 0, 0, 0, -1, 10], [0, 0, 0, 1, 0, 0], [+500, 0, 500, 0, 0, 10], [+500, 0, 500, 0, 0, 10], [+500, 0, 500, 0, 1, 10]];
//0 is money, 1 is pollution, 2 is PA, 4 is increase level, and 5 is time
var rPollutionsPoints2 = [[0, 0, 0, 0, -1, 10], [500, 0, -500, 0, -5, 10], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, -1, 0], [0, 0, 0, 0, -5, 0], [0, 0, 0, 0, 0, 0]];
//0 is money, 1 is pollution, 2 is PA, 4 is increase level, and 5 is time
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
var publicAwarenessLevel = 100; //people
var pollutionIncreaseLevel = 75; //AQI, Air Quality Index
var pollutionDecreaseLevel = 25; //AQI, Air Quality Index
var pollPerc = 50;
var monPerc = 10;
var pubPerc = 0;
var iPerc = 90; //pollution increase percentage
var dPerc = 10;
var status = "Semi-Dangerous";

var repeatCounter = 0;
var countRepeat = false;

window.addEventListener("load", init, true);
document.getElementById('visButton').onclick = vis;
document.getElementById('opt1').onclick = foo1;
document.getElementById('opt2').onclick = foo2;
document.getElementById('opt3').onclick = foo3;



function init() { //check if change section or no and stuff //shuffles and sets currentQuestion on initialization

  console.log("init");


  if (questionIndex == 6) {
    currentQuestion = shuffledArray2[0];
    document.getElementById("proposal").innerHTML = currentQuestion;
    questionSection = 2;
  } else if (questionIndex == 9) {
    currentQuestion = shuffledArray3[0];
    document.getElementById("proposal").innerHTML = currentQuestion;
    questionSection = 3;
  } else if (questionIndex == 13) {
    currentQuestion = shuffledArray4[0];
    document.getElementById("proposal").innerHTML = currentQuestion;
    questionSection = 4;
  }

  if (pollPerc/10 > 6 && pollPerc/10 < 8) {
    status = "Semi-Dangerous";
    document.getElementById("randomImg").src = "Images/Backgroundimage-veryTriggered.png";
  } else if (pollPerc/10 >= 8 && pollPerc/10 < 10) {
    status = "Very Dangerous, Almost Dead";
    document.getElementById("randomImg").src = "Images/BackgroundImage-75%.png";
  } else if (pollPerc/10 >= 10) {
    status = "Dead";
    document.getElementById("randomImg").src = "Images/BackgroundImage-deadLol.png";
  } else if (pollPerc/10 >= 4 && pollPerc/10 <= 6) {
    status = "Ok-ish";
    document.getElementById("randomImg").src = "Images/BackgroundImage-slightlyOffended.png";
  } else if (pollPerc/10 >= 1 && pollPerc/10 <= 3) {
    status = "Very Good";
    document.getElementById("randomImg").src = "Images/BackgroundImage-normal.png";
  } else {
    status = "Something Has Gone Very Very Wrong";
  }
}

function updateValues() {
  document.getElementById("proggPoll").style.width = pollPerc + "%";
  document.getElementById("pollLb").innerHTML = airPollutionLevel + " AQI (" + status + ")";
  document.getElementById("monLb").innerHTML = money + " ";
  document.getElementById("currYear").innerHTML = year + " ";
  document.getElementById("minusProgEH").style.width = dPerc + "%";
  document.getElementById("minusEHlb").innerHTML = "-" + pollutionDecreaseLevel + " AQI";
  document.getElementById("plusProgEH").style.width = iPerc + "%";
  document.getElementById("plusEHlb").innerHTML = "+" + pollutionIncreaseLevel + " AQI";
  document.getElementById("progPA").style.width = pubPerc + "%";
  document.getElementById("pAlb").innerHTML = publicAwarenessLevel + " people";
  if (pollPerc/10 > 6 && pollPerc/10 < 8) {
    status = "Semi-Dangerous";
    document.getElementById("randomImg").src = "Images/Backgroundimage-veryTriggered.png";
  } else if (pollPerc/10 >= 8 && pollPerc/10 < 10) {
    status = "Very Dangerous, Almost Dead";
    document.getElementById("randomImg").src = "Images/BackgroundImage-75%.png";
  } else if (pollPerc/10 >= 10) {
    status = "Dead";
    document.getElementById("randomImg").src = "Images/BackgroundImage-deadLol.png";
  } else if (pollPerc/10 >= 4 && pollPerc/10 <= 6) {
    status = "Ok-ish";
    document.getElementById("randomImg").src = "Images/BackgroundImage-slightlyOffended.png";
  } else if (pollPerc/10 >= 1 && pollPerc/10 <= 3) {
    status = "Very Good";
    document.getElementById("randomImg").src = "Images/BackgroundImage-normal.png";
  } else {
    status = "Something Has Gone Very Very Wrong";
  }
}

function vis() { //initialization
  console.log("vis");
  document.getElementById('buttonDiv').style.visibility = "visible";
  document.getElementById('visButton').style.visibility = "hidden";
  shuffledArray1 = shuffle(questions1);
  currentQuestion = shuffledArray1[0];
  shuffledArray2 = shuffle(questions2);
  shuffledArray3 = shuffle(questions3);
  shuffledArray4 = shuffle(questions4);
  selectedProbability = shuffle(trueOrFalse);
  if (questionSection == 1) {
    shuffledArray1.splice(0, 1);
    questionNumber = questions1Q.indexOf(currentQuestion);
  } else if (questionSection == 2) {
    shuffledArray2.splice(0, 1);
    questionNumber = 5+questions2Q.indexOf(currentQuestion);
  } else if (questionSection == 3) {
    shuffledArray3.splice(0, 1);
    questionNumber = 8+questions3Q.indexOf(currentQuestion);
  } else if (questionSection == 4) {
    shuffledArray4.splice(0, 1);
    questionNumber = 12+questions4Q.indexOf(currentQuestion);
  }

  if (repeatableQuestions.length > 1){
    do {
      repeatableQuestions = shuffle(repeatableQuestions);
    } while (selectedProbability[0] == 1 && repeatableQuestions[0] == "Propose the tightening of Carbons emissions restrictions" && billIsPassed == false)
  } else {
    while (selectedProbability[0] == 1) {
      selectedProbability = shuffle(trueOrFalse);
    }
  }
  //Display first question
  if (selectedProbability[0] == 0) {
    document.getElementById("proposal").innerHTML = currentQuestion;
  } else if (selectedProbability[0] == 1) {
    document.getElementById("proposal").innerHTML = repeatableQuestions[0];
  }
  changeBtn();

}

function changeValues() {
  console.log("change value");
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

  //check if have to repeat question later on.
  if (valueLol[3] == 1) {
    //do repeat later and ignore all effects because it's either useless or not supposed to do anything.
    countRepeat = true;
    if (selectedProbability[0] == 0) {
      questionStorage = currentQuestion;
    } else if (selectedProbability[0] == 1) {
      questionStorage = repeatableQuestions[0];
    }
  } else {
    //don't repeat
    money = money + valueLol[0];
    year = year+valueLol[5];
    publicAwarenessLevel = publicAwarenessLevel + (valueLol[2]);
    airPollutionLevel = airPollutionLevel + (pollutionIncreaseLevel - pollutionDecreaseLevel);
    pollutionDecreaseLevel = pollutionDecreaseLevel + valueLol[4];
    pollutionIncreaseLevel = 100 - pollutionDecreaseLevel;

    iPerc = (pollutionIncreaseLevel);
    dPerc = (pollutionDecreaseLevel);
    pubPerc = (publicAwarenessLevel/1000);
    monPerc = (money/100);
    pollPerc = (airPollutionLevel/10);
    if (pollPerc/10 > 6 && pollPerc/10 < 8) {
      status = "Semi-Dangerous";
      document.getElementById("randomImg").src = "Images/Backgroundimage-veryTriggered.png";
    } else if (pollPerc/10 >= 8 && pollPerc/10 < 10) {
      status = "Very Dangerous, Almost Dead";
      document.getElementById("randomImg").src = "Images/BackgroundImage-75%.png";
    } else if (pollPerc/10 >= 10) {
      status = "Dead";
      document.getElementById("randomImg").src = "Images/BackgroundImage-deadLol.png";
    } else if (pollPerc/10 >= 4 && pollPerc/10 <= 6) {
      status = "Ok-ish";
      document.getElementById("randomImg").src = "Images/BackgroundImage-slightlyOffended.png";
    } else if (pollPerc/10 >= 1 && pollPerc/10 <= 3) {
      status = "Very Good";
      document.getElementById("randomImg").src = "Images/BackgroundImage-normal.png";
    } else {
      status = "Something Has Gone Very Very Wrong";
    }
    updateValues();
  }
}

//foos change question
function generalFoo() {
  console.log("foo general");
  if (countRepeat == true) {
    if (repeatCounter != 7){
      repeatCounter++;
    }
  }
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

  if ((selectedProbability[0] == 0 && requiredValueQuestions.includes(currentQuestion) == true) || (selectedProbability[0] == 1 && requiredValueQuestions.includes(repeatableQuestions[0]))) {
      if (choice == 1 && (publicAwarenessLevel >= 10000 && (currentQuestion == "Proposal for the universal adoptation of a advanced kind of air filter recently made avaliable" || currentQuestion == "Proposal for international subsidies for the transitioning to renewable energy from fossial fuels" || (selectedProbability[0] == 1 && repeatableQuestions[0] == "Propose the tightening of Carbons emissions restrictions") || currentQuestion == "Host a Presentation"))) {



        changeValues();
        canDo = true;
        newQuestion();
      } else if (choice == 1 && (publicAwarenessLevel != 10000 && publicAwarenessLevel < 10000) && (currentQuestion == "Proposal for the universal adoptation of a advanced kind of air filter recently made avaliable" || currentQuestion == "Proposal for international subsidies for the transitioning to renewable energy from fossial fuels" ||(selectedProbability[0] == 1 && repeatableQuestions[0] == "Propose the tightening of Carbons emissions restrictions") || currentQuestion == "Host a Presentation")) {
        document.getElementById("proposal").innerHTML = "Nice. You don't have enough Public Awareness to do this. Try a different option. Don't mindlessly spam this button. It's not gonna do anything."
        setTimeout(function() {if (selectedProbability[0] == 0){document.getElementById("proposal").innerHTML = currentQuestion} else if (selectedProbability[0] == 1) {document.getElementById("proposal").innerHTML = repeatableQuestions[0]}}, 3000);
        canDo = false;



        //30,000PA and choice 1 (currentQuestion == "Proposal for the universal banning of Internal Combustion Land Vechicles" || currentQuestion == "Propose the implementation of a Carbon emissions restriction" || currentQuestion == "Proposal for the banning of the use of fossial fuels")
      } else if (choice == 1 && (publicAwarenessLevel >= 30000 && (currentQuestion == "Proposal for the universal banning of Internal Combustion Land Vechicles" || currentQuestion == "Propose the implementation of a Carbon emissions restriction" || currentQuestion == "Proposal for the banning of the use of fossial fuels"))) {
        changeValues();
        canDo = true;
        newQuestion();



      } else if (choice == 1 && (publicAwarenessLevel != 30000 && publicAwarenessLevel < 30000) && (currentQuestion == "Proposal for the universal banning of Internal Combustion Land Vechicles" || currentQuestion == "Propose the implementation of a Carbon emissions restriction" || currentQuestion == "Proposal for the banning of the use of fossial fuels")) {
        document.getElementById("proposal").innerHTML = "Nice. You don't have enough Public Awareness to do this. Try a different option. Don't mindlessly spam this button. It's not gonna do anything."
        setTimeout(function() {if (selectedProbability[0] == 0){document.getElementById("proposal").innerHTML = currentQuestion} else if (selectedProbability[0] == 1) {document.getElementById("proposal").innerHTML = repeatableQuestions[0]}}, 3000);
        canDo = false;




        //5000PA and choice 2 (currentQuestion == "Host a Presentation" || currentQuestion == "Host a public conference about the effects of environmental change" || currentQuestion == "Host a public conference about the effects of environmental change" || currentQuestion == "Country not following passed bill (requires at least one bill passed)" || repeatableQuestions[0] == "Propose the tightening of Carbons emissions restrictions")
      } else if (choice == 2 && (publicAwarenessLevel >= 5000 && (selectedProbability[0] == 1 && repeatableQuestions[0] == "Propose the tightening of Carbons emissions restrictions"))) {



        changeValues();
        canDo = true;
        newQuestion();

      } else if (choice == 2 && (publicAwarenessLevel != 5000 && publicAwarenessLevel < 5000) && (selectedProbability[0] == 1 && repeatableQuestions[0] == "Propose the tightening of Carbons emissions restrictions")) {
        document.getElementById("proposal").innerHTML = "Nice. You don't have enough Public Awareness to do this. Try a different option. Don't mindlessly spam this button. It's not gonna do anything."
        setTimeout(function() {if (selectedProbability[0] == 0){document.getElementById("proposal").innerHTML = currentQuestion} else if (selectedProbability[0] == 1) {document.getElementById("proposal").innerHTML = repeatableQuestions[0]}}, 3000);
        canDo = false;




        //10,000PA and choice 2 (repeatableQuestions[0] == "Country violating the livestock regulation")
      } else if (choice == 2 && (publicAwarenessLevel >= 10000 && (selectedProbability[0] == 1 && repeatableQuestions[0] == "Country violating the livestock regulation"))) {
        changeValues();
        canDo = true;
        newQuestion();




      } else if (choice == 2 && (publicAwarenessLevel != 10000 && (selectedProbability[0] == 1 && repeatableQuestions[0] == "Country violating the livestock regulation"))) {
        document.getElementById("proposal").innerHTML = "Nice. You don't have enough Public Awareness to do this. Try a different option. Don't mindlessly spam this button. It's not gonna do anything."
        setTimeout(function() {if (selectedProbability[0] == 0){document.getElementById("proposal").innerHTML = currentQuestion} else if (selectedProbability[0] == 1) {document.getElementById("proposal").innerHTML = repeatableQuestions[0]}}, 3000);
        canDo = false;





      } else if (choice == 3 || (choice == 1 && (currentQuestion == "Host a public conference about the effects of environmental change" || currentQuestion == "Country not following passed bill (requires at least one bill passed)" || (selectedProbability[0] == 1 && repeatableQuestions[0] == "Country violating the Carbon Emission restrictions")) && publicAwarenessLevel >= 10000 )|| (choice == 2 && (currentQuestion == "Host a public conference about the effects of environmental change" || currentQuestion == "Country not following passed bill (requires at least one bill passed)" || (selectedProbability[0] == 1 && repeatableQuestions[0] == "Country violating the Carbon Emission restrictions")) && publicAwarenessLevel >= 5000)) {





        changeValues();
        canDo = true;
        newQuestion();
      } else if ((choice == 1 && (currentQuestion == 'Host a public conference about the effects of environmental change' || currentQuestion == "Country not following passed bill (requires at least one bill passed)" || (selectedProbability[0] == 1 && repeatableQuestions[0] == "Country violating the Carbon Emission restrictions")) && (publicAwarenessLevel < 10000)) || (choice == 2 && (currentQuestion == "Host a public conference about the effects of environmental change" || currentQuestion == "Country not following passed bill (requires at least one bill passed)" || (selectedProbability[0] == 1 && repeatableQuestions[0] == "Country violating the Carbon Emission restrictions")) && (publicAwarenessLevel < 5000))){



        document.getElementById("proposal").innerHTML = "Nice. You don't have enough Public Awareness to do this. Try a different option. Don't mindlessly spam this button. It's not gonna do anything."
        setTimeout(function() {if (selectedProbability[0] == 0){document.getElementById("proposal").innerHTML = currentQuestion} else if (selectedProbability[0] == 1) {document.getElementById("proposal").innerHTML = repeatableQuestions[0]}}, 3000);
        canDo = false;

      } else if (choice == 3 || (choice == 1 && (currentQuestion == "Country violating the livestock regulation") && publicAwarenessLevel >= 10000)|| (choice == 2 && (currentQuestion == "Country violating the livestock regulation") && publicAwarenessLevel >= 10000)) {



        changeValues();
        canDo = true;
        newQuestion();
      } else if ((choice == 1 && (currentQuestion == "Country violating the livestock regulation") && (publicAwarenessLevel != 10000 && publicAwarenessLevel < 10000)) || (choice == 2 && (currentQuestion == "Country violating the livestock regulation") && (publicAwarenessLevel != 10000 && publicAwarenessLevel < 10000))){



        document.getElementById("proposal").innerHTML = "Nice. You don't have enough Public Awareness to do this. Try a different option. Don't mindlessly spam this button. It's not gonna do anything."
        setTimeout(function() {if (selectedProbability[0] == 0){document.getElementById("proposal").innerHTML = currentQuestion} else if (selectedProbability[0] == 1) {document.getElementById("proposal").innerHTML = repeatableQuestions[0]}}, 3000);
        canDo = false;
      } else {
        changeValues();
        canDo = true;
        newQuestion();



      }


  } else {



    changeValues();
    newQuestion();

  }
}


function newQuestion() {
  console.log("new question");
  if (publicAwarenessLevel >= 99000 && pollutionDecreaseLevel >= 90 && money >= 9000 && airPollutionLevel <= 150){
    win();
  } else if (questionIndex == 16 || status == "Dead" || money <= -10000){
    lose();
  }
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

    link = "results/resultsR" + "-" + repeatableQuestionsNumber + "-" + choice + ".mp4";

    //2. Change values
  } else if(selectedProbability[0] == 0) { //if not a repeatable question
    //1. Set link to open
    dunnoQN = questionNumber+1;
    link = "results/results" + dunnoQN + "-" + choice + ".mp4";
  }
  document.getElementById("buttonDiv").innerHTML = "<iframe id='frame'></iframe>";
  document.getElementById("frame").src = link;
  document.getElementById("proposal").innerHTML = "Here's the Result";
  changed = true;

  setTimeout(function() {
    document.getElementById("buttonDiv").innerHTML = "<button id='opt10' onclick='foo1()' class='btn borderlol' style='width: 400px; background-color: lightblue;'>Do it!</button> <br><br> <button id='opt20' onclick='foo2()' class='btn borderlol' style='width: 400px; background-color: lightblue;'>Semi-fund it</button> <br><br> <button id='opt30' onclick='foo3()' class='btn borderlol' style='width: 400px; background-color: lightblue;'>NO NO NO NO NO NO NO</button> <br><br>"
  }, 5000);
  //3. Splice & update question list


  setTimeout(function() {
    //Choose new question
    repeatableQuestions = shuffle(repeatableQuestions);
    selectedProbability = shuffle(trueOrFalse);
    //choose a new question if this is this
    if (repeatableQuestions.length > 1){
      do {
        repeatableQuestions = shuffle(repeatableQuestions);
      } while (selectedProbability[0] == 1 && repeatableQuestions[0] == "Propose the tightening of Carbons emissions restrictions" && billIsPassed == false)
    } else {
      while (selectedProbability[0] == 1) {
        selectedProbability = shuffle(trueOrFalse);
      }
    }
    //Display new question
    if (repeatCounter == 7) {
      document.getElementById("proposal").innerHTML = questionStorage;
      repeatCounter = 0;
      countRepeat = false;
    } else if (selectedProbability[0] == 0) {
      if (questionSection == 1) {
        currentQuestion = shuffledArray1[0];
      } else if (questionSection == 2) {
        currentQuestion = shuffledArray2[0];
      } else if (questionSection == 3) {
        currentQuestion = shuffledArray3[0];
      } else if (questionSection == 4) {
        currentQuestion = shuffledArray4[0];
      }
      questionIndex++;
      document.getElementById("proposal").innerHTML = currentQuestion;

    } else if (selectedProbability[0] == 1) {
      document.getElementById("proposal").innerHTML = repeatableQuestions[0];
    }

    if (questionIndex == 6 || questionIndex == 9 || questionIndex == 13){
      init();
    }

    if (canDo == true) {
      if (questionSection == 1) {
        //console.log("hello");

        shuffledArray1.splice(0, 1);
        questionNumber = questions1Q.indexOf(currentQuestion);

        //console.log("questionNumber " + questionNumber);
        //console.log("questions1Q.indexOf(currentQuestion) " + questions1Q.indexOf(currentQuestion));
      } else if (questionSection == 2) {
        //console.log("hello");

        shuffledArray2.splice(0, 1);
        var temp = questions2Q.indexOf(currentQuestion)
        questionNumber = 5 + temp;

        //console.log("questionNumber " + questionNumber);
        //console.log("questions1Q.indexOf(currentQuestion) " + questions1Q.indexOf(currentQuestion));
      } else if (questionSection == 3) {
        //console.log("hello");

        shuffledArray3.splice(0, 1);
        var temp = questions3Q.indexOf(currentQuestion)
        questionNumber = 8 + temp;

        //console.log("questionNumber " + questionNumber);
        //console.log("questions1Q.indexOf(currentQuestion) " + questions1Q.indexOf(currentQuestion));
      } else if (questionSection == 4) {
        //console.log("hello");

        shuffledArray4.splice(0, 1);
        var temp = questions4Q.indexOf(currentQuestion)
        questionNumber = 11 + temp;

        //console.log("questionNumber " + questionNumber);
        //console.log("questions1Q.indexOf(currentQuestion) " + questions1Q.indexOf(currentQuestion));
      }
    }


    changeBtn();
  }, 5000);
}

function win() {

  console.log("win");
  document.getElementById("gameBar").innerHTML = "<h1>You Win</h1><br><h3>Congrats. <br> You made it very hard for someone to repollute the world. I mean, who would be dumb enough to do that. But, congrats. You passed this game as some random bussiness dude ending air poIIution by spamming buttons. Now go on with your day and do something productive for the environment. By the way, please fill out this google forms for our data collection: <a style='cursor:pointer' src='https://forms.gle/dZW4DPijHNSRrkgd8'>our google forms thing</a>.</h3> <img src='Images/iamnolongerasking.jpg'></img><br>"
}

function lose() {

  console.log("lose");
  document.getElementById("gameBar").innerHTML = "<h1>Dead at round <span id='oof'></span></h1><br><h3>You killed the World and or lost your chance to redeem yourself. I mean, you could always try again, but before that, please fill out our data collection form: <a style='cursor:pointer' src='https://forms.gle/dZW4DPijHNSRrkgd8'>our google forms thing</a>. Of course, don't repeat your actions in real life. Please.</h3> <img src='Images/iamnolongerasking.jpg'></img><br>"
  document.getElementById("oof").innerHTML = questionIndex;
}

function changeBtn() {
  console.log("change button");
  if (selectedProbability[0] == 0) {
    if (changed == false) {
      document.getElementById("opt1").innerHTML = questionsResponse[questionNumber][0];
      document.getElementById("opt2").innerHTML = questionsResponse[questionNumber][1];
      document.getElementById("opt3").innerHTML = questionsResponse[questionNumber][2];
    } else {
      document.getElementById("opt10").innerHTML = questionsResponse[questionNumber][0];
      document.getElementById("opt20").innerHTML = questionsResponse[questionNumber][1];
      document.getElementById("opt30").innerHTML = questionsResponse[questionNumber][2];
    }
  } else {
    document.getElementById("opt1").innerHTML = questionRepeatableRepsonse[repeatableQuestionsNumber-1][1];
    document.getElementById("opt2").innerHTML = questionRepeatableRepsonse[repeatableQuestionsNumber-1][2];
    document.getElementById("opt3").innerHTML = questionRepeatableRepsonse[repeatableQuestionsNumber-1][3];
  }
}

function cheatToWin() {
  console.log("cheat");
  if (prompt("Password:") == "ilikecheese"){
    money = money+1000000000000000000000;
    airPollutionLevel = 0;
    pollutionIncreaseLevel = 0;
    pollutionDecreaseLevel = pollutionDecreaseLevel+1000;
    warenessLevel = warenessLevel+100000;
    iPerc = (pollutionIncreaseLevel);
    dPerc = (pollutionDecreaseLevel);
    pubPerc = (warenessLevel/1000);
    monPerc = (money/100);
    pollPerc = (airPollutionLevel/10);
    updateValues();
    win();
  } else {
    alert("nice try noobs");
  }
}

function foo1() {
  console.log("foo1");
  choice = 1;
  generalFoo();
}

function foo2() {
  console.log("foo2");
  choice = 2;
  generalFoo();
}

function foo3() {
  console.log("foo3");
  choice = 3;
  generalFoo();
}
