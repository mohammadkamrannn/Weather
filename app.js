var users;
var html = "";
function loadJSON(method, url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        callback(JSON.parse(this.response));
        
    };
};
xhr.send();
}

loadJSON('GET', 'https://api.openweathermap.org/data/2.5/weather?id=128747&lang=fa&units=metric&appid=fcdddefdcc6f10e733a28df96bdf64af', function(re) {
    for(var i = 0; i < re.weather.length; i++) {
        html += 
            `<div class="list">
                
                <div class="city-img">
                <p class="">
                    <img class="img" src="http://openweathermap.org/img/wn/${re.weather[i].icon}@2x.png">
                </p>
                <p class="city">
                    ${re.name}
                </p>
                </div>
                <p class="unit">
                   ${re.main.temp} °C
                </p>
                <p class="desc">
                   ${re.weather[i].description}
                </p>
                <div class="liner"></div>
                <p class="temp_max">
                    بیشترین دما: ${re.main.temp_max}
                </p>
                <p class="temp_min">
                    کمترین دما: ${re.main.temp_min}
                </p>
                <div class="liner"></div>
                <p class="">
                    رطوبت: ${re.main.humidity}
                </p>
            </div>`;
    };
    document.getElementById('print').innerHTML = html;
});
loadJSON('GET', 'https://api.openweathermap.org/data/2.5/weather?id=112931&lang=fa&units=metric&appid=fcdddefdcc6f10e733a28df96bdf64af', function(re) {
    for(var i = 0; i < re.weather.length; i++) {
        html += 
            `<div class="list">
                
                <div class="city-img">
                <p class="">
                    <img class="img" src="http://openweathermap.org/img/wn/${re.weather[i].icon}@2x.png">
                </p>
                <p class="city">
                    ${re.name}
                </p>
                </div>
                <p class="unit">
                   ${re.main.temp} °C
                </p>
                <p class="desc">
                   ${re.weather[i].description}
                </p>
                <div class="liner"></div>
                <p class="temp_max">
                    بیشترین دما: ${re.main.temp_max}
                </p>
                <p class="temp_min">
                    کمترین دما: ${re.main.temp_min}
                </p>
                <div class="liner"></div>
                <p class="">
                    رطوبت: ${re.main.humidity}
                </p>
            </div>`;
    };
    document.getElementById('print').innerHTML = html;
});
loadJSON('GET', 'https://api.openweathermap.org/data/2.5/weather?id=119505&lang=fa&units=metric&appid=fcdddefdcc6f10e733a28df96bdf64af', function(re) {
    for(var i = 0; i < re.weather.length; i++) {
        html += 
            `<div class="list">
                
                <div class="city-img">
                <p class="">
                    <img class="img" src="http://openweathermap.org/img/wn/${re.weather[i].icon}@2x.png">
                </p>
                <p class="city">
                    ${re.name}
                </p>
                </div>
                <p class="unit">
                   ${re.main.temp} °C
                </p>
                <p class="desc">
                   ${re.weather[i].description}
                </p>
                <div class="liner"></div>
                <p class="temp_max">
                    بیشترین دما: ${re.main.temp_max}
                </p>
                <p class="temp_min">
                    کمترین دما: ${re.main.temp_min}
                </p>
                <div class="liner"></div>
                <p class="">
                    رطوبت: ${re.main.humidity}
                </p>
            </div>`;
    };
    document.getElementById('print').innerHTML = html;
});
loadJSON('GET', 'https://api.openweathermap.org/data/2.5/weather?id=118743&lang=fa&units=metric&appid=fcdddefdcc6f10e733a28df96bdf64af', function(re) {
    for(var i = 0; i < re.weather.length; i++) {
        html += 
            `<div class="list">
                
                <div class="city-img">
                <p class="">
                    <img class="img" src="http://openweathermap.org/img/wn/${re.weather[i].icon}@2x.png">
                </p>
                <p class="city">
                    ${re.name}
                </p>
                </div>
                <p class="unit">
                   ${re.main.temp} °C
                </p>
                <p class="desc">
                   ${re.weather[i].description}
                </p>
                <div class="liner"></div>
                <p class="temp_max">
                    بیشترین دما: ${re.main.temp_max}
                </p>
                <p class="temp_min">
                    کمترین دما: ${re.main.temp_min}
                </p>
                <div class="liner"></div>
                <p class="">
                    رطوبت: ${re.main.humidity}
                </p>
            </div>`;
    };
    document.getElementById('print').innerHTML = html;
});
loadJSON('GET', 'https://api.openweathermap.org/data/2.5/weather?id=118743&lang=fa&units=metric&appid=fcdddefdcc6f10e733a28df96bdf64af', function(re) {
    for(var i = 0; i < re.weather.length; i++) {
        html += 
            `<div class="list">
                
                <div class="city-img">
                <p class="">
                    <img class="img" src="http://openweathermap.org/img/wn/${re.weather[i].icon}@2x.png">
                </p>
                <p class="city">
                    ${re.name}
                </p>
                </div>
                <p class="unit">
                   ${re.main.temp} °C
                </p>
                <p class="desc">
                   ${re.weather[i].description}
                </p>
                <div class="liner"></div>
                <p class="temp_max">
                    بیشترین دما: ${re.main.temp_max}
                </p>
                <p class="temp_min">
                    کمترین دما: ${re.main.temp_min}
                </p>
                <div class="liner"></div>
                <p class="">
                    رطوبت: ${re.main.humidity}
                </p>
            </div>`;
    };
    document.getElementById('print').innerHTML = html;
});