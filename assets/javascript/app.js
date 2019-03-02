$(document).ready(function() {

 var myQuestions = {
     questions: [
         {q: "What is this?",
         choices: [
             "a", "b", "c"],
         correctAnswer: "b"
        }
     ],
     questions: [
        {q: "What is this?",
        choices: [
            "a", "b", "c"],
        correctAnswer: "c"
       }
    ],
    questions: [
        {q: "What is this?",
        choices: [
            "a", "b", "c"],
        correctAnswer: "a"
       }
    ],

 }

  $("#quiz").text("Press button to play!");

  $(".start").click( function(){
      $(this).hide();
      $("#quiz").hide();
      for(var i = 0; i < myQuestions.length; i++){

        $("#questions").text(myQuestions.questions.q);
        console.log(myQuestions.questions.q);
s

      }
      

    });

      


});