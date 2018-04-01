$(document).ready(start);


var city = ["NYC","SF", "LA", "ATX", "SYD"];

$(city).each(function(index) {
  $("select").append("<option value= '"+ this +"'>" + this + "</option>");
});

function start() {
  $("#city-type").change(changeImage);
};

function changeImage(event){
  event.preventDefault();
  var city = $("#city-type").val();
    displayCity(city);
};

function displayCity(city) {
  if (city === "NYC") {
    $("body").attr("class", "nyc");
  }
  else if (city === "SF") {
    $("body").attr("class", "sf");
  }
  else if (city === "LA") {
    $("body").attr("class", "la");
  }
  else if (city === "ATX") {
    $("body").attr("class", "austin");
  }
  else if (city === "SYD") {
    $("body").attr("class", "sydney");
  }
}