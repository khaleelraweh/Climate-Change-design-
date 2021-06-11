
//================== change heading random color ===============

function rndm_colour(){
  let letters='0123456789abcdef';
  let colour ='#';
  for(let i=0; i<6;i++){
    colour+=letters[ Math.floor(Math.random()*16)];
  }
  return colour;
}

// change color of the head (h1) climate change when we click on that head 
  function change_heading() {
  color = rndm_colour();
  document.getElementById("heading").style.color = color;

}

//===================show and hide paragraph content ===========

//used to get element id by event onclick in index.html
function myFunc(id) {
  
  if(id=="btn_def"){
   show_hide('appear_def_paragraph');
   changeMessage(id);
  }
  
  if(id=="btn_air"){
   show_hide('appear_air_paragraph');
   changeMessage(id);
  }
  
  if(id=="btn_wild"){
   show_hide('appear_wild_paragraph');
   changeMessage(id);
  }
  
}


//used to switch the value for display and x is the id of the paragraph that the change will tach
function show_hide(x){
  if (document.getElementById(x).style.display == 'none'){
    document.getElementById(x).style.display = 'block';
  }else{
    document.getElementById(x).style.display = 'none';
  }
}

// used to change button content from more info to less info as a helping message

function changeMessage(id){
  
  if (document.getElementById(id).innerHTML=="More info..."){
    document.getElementById(id).innerHTML = 'Less info';
  }else{
    document.getElementById(id).innerHTML = "More info...";
  }
  
}


//=================change background color of the website =======


function change_background(){
  color = rndm_colour();
  document.getElementById("body").style.backgroundColor = color;
}

//================== Quiz validation ================

// give a greating to the tester 
function say_hello(){
  var name = document.getElementById("fullname").value;
  document.getElementById("Welcome").innerHTML = "<h3>Welcome to Climate change Quiz " + name +
                                                "</h3><br>";
  if (name.length  < 1) {
    document.getElementById("Welcome").innerHTML = "";
  }
}

//define function to check Text validation
function validateText() {
  //store the value from the 'name' element in a 'name' variable:
  let name = document.forms.Quiz.fullname.value;
  //if the 'name' variable contains an empty string show an alert in the browser:
  if (name === "") {
    alert("Name must be filled out");
    return false;
  } else {
    return true;
  }  
}

//define function to check number validation
function validateNumber() {
  let x;
  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;
  // If x value is equal to zero
  if (x == 0) {
    //if the 'x' variable is 0 show an alert in the browser:
    alert("You must enter a number above 0");
    return false;
  } else {
    return true;
  }
}

//define function to check radio validation
function validateRadio() {
  // Check a value is present for the group of radio buttons:
  //let x = document.forms.Quiz.elements.answerq1.value;
  let x = document.forms.Quiz.elements;
  //if there is no value present an alert will appear in the browser:
  if (x.answerq1.value == "") {
    alert("One radio button must be selected");
    return false;
  }else if(x.answerq2.value == ""){
    alert("One radio button must be selected");
    return false;
  }else if(x.answerq3.value == ""){
    alert("One radio button must be selected");
    return false;
  }else if(x.answerq4.value == ""){
    alert("One radio button must be selected");
    return false;
  }else{
    return true;
  }
}


//define function to check all Question validation
function validateQuestions() {
      //if any of the validation functions return `false` indicate the data is not valid.
      if (validateText() && validateRadio() && validateNumber() ){
        finishFunction();
        return true;
      }else{
        return false;
      }
    }

//================== finishing quiz ============================
function finishFunction(){
  alert("Thank you for completing the quiz.")
}

//================== Calculating Quiz Score ===================

function checkAnswers(){
  // grab all the elements from the quiz form, store them as quiz
  quizRadio = document.forms.Quiz;
  quizNumber = document.forms.Quiz.parisagreement.value;
  
  var score = 0;
  if (validateQuestions()){
    // check the answers
    // question 1
    //answer1 = quiz.answerq1.value;
    answers = quizRadio;
    
    if (answers.answerq1.value == "China"){
      score = score + 1;
  }
    if (answers.answerq2.value == "oxygen"){
      score = score + 1;
  }
    if (answers.answerq3.value == "human"){
      score = score + 1;
  } 
    if (answers.answerq4.value== "higher_temperatures"){
      score = score + 1;
  } 
  if(quizNumber>0){
    score = score + 1;
  }
  //return the score value as part of an alert in the browser
  //alert ('Well done, your score was... ' + score);
  //call showFeedback method to show Score
  showFeedback(score);
}
}


//define a function to show feeedback instead of alert message to show score
function showFeedback(score){
//hide the Quiz element by setting the display attribute to "none":
  document.forms.Quiz.style.display = "none";
  //assign the body of the HTML to the body variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
  body = document.getElementsByTagName("body")[0]
  //replace the HTML content inside the body tag with a heading displaying the score
  //body.innerHTML = '<h1>Well done, your score was... ' + score + '</h1>'
  
  if (score == 0){
    body.innerHTML = '<h1>Do better next time, your score was... ' + score + '</h1>';
} else if (score < 2){
    body.innerHTML = '<h1>Maybe you need to visit the home page again, your score was... ' + score + '</h1>';
} else if (score < 4){
    body.innerHTML = '<h1>You did well but there is room for improvement, your score was... ' + score + '</h1>';
} else if (score < 6){
    body.innerHTML = '<h1>You almost got full marks! Great, your score was... ' + score + '</h1>';
    //append some HTML to the end of the HTML body tag. The div tags will create a new line and the img tag will display an image of fireworks.
  body.innerHTML += '<div><img src="../images/congratulation.png" alt="congratulation" style="width:100%"/></div>'
} else {
    body.innerHTML = '<h1>Excellent, full marks to you! Your score was... ' + score + '</h1>';
    //append some HTML to the end of the HTML body tag. The div tags will create a new line and the img tag will display an image of fireworks.
    body.innerHTML += '<div><img src="../images/congratulation.png" alt="congratulation" style="width:100%"/></div>'
}
  
}


//============= google Map setting =============

function myMap(){
  
  let my_position = { lat: 15.69145298408144, lng: 45.344000425092 };
  
   let map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 5,
    center: my_position,
  });
  
   const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  new google.maps.Marker({
    position: my_position,
    map,
    title: "Hello World!",
    icon: image,
    
  });

}








