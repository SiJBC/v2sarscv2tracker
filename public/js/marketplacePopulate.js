$( document ).ready(function() {

  console.log("here")
  $(document).foundation();

  $(function () {
    $(window).scroll(function () {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else {
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });



 function init(){

  $.get("/api/display/reports", function(response) {
    if (response) {
        console.log(response)
        for (i = 0; i < response.length; i++) {
          $("#displayReports").append("<span><h3>person reporting<h3><p>" + response[i].person_reporting + "</p>");
          $("#displayReports").append("<h3>infection date<h3> <br><p>" + response[i].infection_date + "</p>");
          $("#displayReports").append("<h3>prognosis date<h3> <p>" + response[i].prognosis_date + "</p>");
          $("#displayReports").append("<h3>description of infection event<h3><p>" + response[i].infection_description + "</p>");
          $("#displayReports").append("<h3>description of symptoms<h3><p>" + response[i].symptoms_description+ "</p>");
          $("#displayReports").append("<h3>recent public activity or risks of contamination<h3> <br><p>" + response[i].incident_description+ "</p>");
          $("#displayReports").append("<h3>city location<h3><p>" + response[i].user_location + "</p>");
          $("#displayReports").append("<h3>your current condition<h3> <br><p>" + response[i].user_condition + "</p></span><br><br><br><br><br>");
        }  
            // $(".city").append("<p><ul>" + "Wind Speed:" + response.wind.speed + "</ul></p>");
            // $(".city").append("<p><ul>" + "Humidity:" + response.main.humidity + "</ul></p>");
            // // converting the temperature to celcius
            // $(".city").append("<p><ul>" + "Temperature (c)" + ((response.main.temp) - 273).toFixed(2) + "</ul></p>");
          
        

    } else {
        console.log("Error, could not reach database.")
    };
});
 }



 init()
})
  







