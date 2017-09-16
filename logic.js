var akey = "aa0cd4669f460bd84cd4daee720a8941"; 
var celc = false;
var wd;

function displayTemp(far, c){
  if(c) return (far - 32) * (5/9)
  return far;
}

function rend(wd, celc){
    
  var currentLocation = wd.name;
  var currentWeather = wd.weather[0].description;
  var currentTemp = displayTemp(wd.main.temp, celc);
  var degree = "&#176;"; 
  var icon = wd.weather[0].icon;
 
  $("#temp").html(parseInt(currentTemp) + degree);  
  $("#name").html(currentLocation);
  $("#temp").prepend('<img src="http://openweathermap.org/img/w/' + icon +  '.png" id="icon">');
  
}

$(function(){
  
var loc;
  
$.getJSON("http://ipinfo.io",function(d){
  console.log("assigning data...")
  loc = d.loc.split(",");
  console.log(loc);
  

  
$.getJSON("http://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=" + loc[0] + "&lon=" + loc[1] + "&APPID=" + akey, function(adata){
  wd = adata;  
 
  rend(adata, celc);
  
  $(".switch input").click(function(){
    celc = !celc;
    rend(wd, celc);
    
    if(celc){
      $("#centigrade").html("F");
      } else {
      $("#centigrade").html("C");  
      }
    
  });
  
})
})  
})
