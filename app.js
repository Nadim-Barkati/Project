 // i used jquerry to manipulate some html elements , hidding the quiz id and make it only visible after we click on the first button i used .clickfanction .hide and .show for that //
 $(document).ready(function(){
  $("#quiz").hide()  ;
  $("#startbutton").click(function(){
      $("#quiz").show();
      $("#submitbutton").show();
    });
  }); 

  //here i created the function thats gonna calculate the result based on the user answers and return a message with the resault//

  function check(){
//i created a var for every question , and a var for the resault
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var asresult = 0;
  
  // i used the conditional statements if to tell the computer which answer is correct and then increment by 1 to the resalt var if the answer is correct
    if (question1 === "Always") {
      asresult++;
  }
    if (question2 === "I don't think so") {
      asresult++;
  }	
    if (question3 === "Of course !") {
      asresult++;
    }

    if (question4 === "every single night!") {
      asresult++;
    }

    if (question5 === "Yes!") {
      asresult++;
    }

    if (question6 === "All the time") {
      asresult++;
    }
    
    // i created a var of message to display based on the score of the user this var contain an array of strings/message to show based on the resault of the user

    var messages = ["Good job!You have great soft skills", "You getting there , Work harder", "You really need to do better"];
    //also created a var of score to give it the a value based on the resault of the user and then use that value to get the message var index  
    var score;
  // i used the  conditional statements if
    if (asresult == 0) {
      score = 2;
    }
  
    if (asresult >0 && asresult <3) {
      score = 1;
    }
  
    if (asresult >= 3) {
      score = 0;
    }  
  //here i used HTML DOM get element by id method to show the after after submit div that will contain the resault 
    document.getElementById("after_submit").style.visibility = "visible";
  //same thing using HTML DOM get element by id method to show the var array of message which contain the the result message
    document.getElementById("message").innerHTML = messages[score]; 
    document.getElementById("number_asresult").innerHTML = "You got " + asresult + " asresult.";
    
    }