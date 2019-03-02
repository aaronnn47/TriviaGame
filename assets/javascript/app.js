$(document).ready(function() {


  $("#quiz1").text("Press button to play!");
  $("#quiz2").hide();
  

  $(".start").click( function(){
      $(this).hide();
      $("#quiz1").hide();

    
    });


    var count= 10;

    var counter = setInterval(timer, 1000);

    function timer()
    {
      count = count-1;
      if (count <= 0)
      {
        document.getElementById("timer").innerHTML= "Time's up!";
         clearInterval(counter);
         return;
      }
    
     document.getElementById("timer").innerHTML= count + " secs"; 
    }



    
});