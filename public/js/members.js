$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);      
  
      $("#add-btn").on("click", function (event) {
          console.log("click")
          event.preventDefault();
  
          console.log("click")
  
  
          var newReport = {
  
              person_reporting: $("#location").val().trim(),
  
              infection_date: $("#date").val().trim(),
  
              prognosis_date: $("#prognosis").val().trim(),
  
              incident_description: $("#incident").val().trim(),
  
              symptoms_description: $("#symptoms").val().trim(),
  
              itinery: $("#itinery").val().trim(),
  
              user_condition: $("#currentCondition").val().trim(),
          };
  
          console.log(newReport)
  
          // send an AJAX POST-request with jQuery
          $.post("/api/list", newReport)
              // on success, run this callback
              .then(function (data) {
                  // log the data we found
                  console.log(data);
                  // tell the user we're adding a character with an alert window
                  alert("your form has been submitted...");
              
                      window.location.href = "/marketplace";
              });
  

  
      });
  
  
     
  
  });
  });

