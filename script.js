let weather={
  "apiKey": "a566c24258f34581abf05aecae386679",
  fetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather : function(data){
  const { name } = data ;
  const { icon, description }= data.weather[0];
  const{temp, humidity}= data.main;
  const{speed}=data.wind;

  document.querySelector(".city").innerText="Weather in " + name;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
  document.querySelector(".description").innerText=description;
  document.querySelector(".temp").innerText=temp+ "°C";
  document.querySelector(".humidity").innerText= "Humidity:"+ humidity +"%";
  document.querySelector(".wind").innerText= "Windspeed:"+speed +"km/h";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600X900/?"+ name +"')"
},
search: function(){
this.fetchWeather( document.querySelector(".search1").value);
}
};
document.querySelector(".searchbar button").addEventListener('click', function(){
  weather.search();
});
document.querySelector(".search1").addEventListener('keyup',function(event){
   if(event.key=="Enter"){
    weather.search();
   }
});
weather.fetchWeather("Denver");

