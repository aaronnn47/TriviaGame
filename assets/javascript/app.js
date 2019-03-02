$(document).ready(function() {

var count = 10;

var counter = 0;


  $("#quiz1").text("Press button to play!");
  $("#quiz2").hide();
  
  

  $(".start").click( function(){
      $(this).hide();
      $("#quiz1").hide();
      $("#quiz2").show();
      counter = setInterval(timer, 1000);

    
    });


    function timer()
    
    {
      count = count-1;
      if (count <= 0)
      {
        document.getElementById("timer").innerHTML= "Time's up!";
        $("#quiz2").hide();
         clearInterval(counter);
         return;
      }
    
     document.getElementById("timer").innerHTML= count + " secs"; 
    }

    
  $(".done").click( function(){

    function check(){

        var question1 = document.quiz2.question1.value;
        var question2 = document.quiz2.question2.value;
        var question3 = document.quiz2.question3.value;
        var question4 = document.quiz2.question4.value;
        var correct = 0;
        var incorrect = 0;

        if (question1 === "a"){
            correct++;
        }
        
        if (question2 === "b"){
            correct++;
        }

        if (question3 === "b"){
            correct++;
        }
        
        if (question4 === "a"){
            correct++;
        }

        $("#quiz2").hide();
        document.getElementById("number_correct").innerHTML = "You got" + correct + "/4" + "correct!";


    }

    check();
    

});



    
});