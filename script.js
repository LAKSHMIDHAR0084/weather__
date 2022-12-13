const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ecdb96346dmsh00a109caa46888ep1d36c1jsna6f8bf837b17',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) =>{

    cityname.innerHTML=city



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) =>{ console.log(response)
        //cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        
        //humidity.innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        //max_temp.innerHTML=response.max_temp
        //wind_speed.innerHTML=response.wind_speed
        //wind_degrees.innerHTML=response.wind_degrees
        //sunrise.innerHTML=response.sunrise
        //sunset.innerHTML=response.sunset
    })
	.catch(err => console.error(err));

}

getweather("Delhi")

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(submitcity.value)
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then((response) =>{ console.log(response)
        //cloud_pct.innerHTML=response.cloud_pct
        temphyd.innerHTML=response.feels_like
        feels_likehyd.innerHTML=response.max_temp
        
        //humidity.innerHTML=response.humidity
        min_temphyd.innerHTML=response.min_temp
        //max_temp.innerHTML=response.max_temp
        //wind_speed.innerHTML=response.wind_speed
        //wind_degrees.innerHTML=response.wind_degrees
        //sunrise.innerHTML=response.sunrise
        //sunset.innerHTML=response.sunset
    })
	.catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
        .then(response => response.json())
        .then((response) =>{ console.log(response)
            //cloud_pct.innerHTML=response.cloud_pct
            tempdubai.innerHTML=response.feels_like
            feels_likedubai.innerHTML=response.max_temp
            
            //humidity.innerHTML=response.humidity
            min_tempdubai.innerHTML=response.min_temp
            //max_temp.innerHTML=response.max_temp
            //wind_speed.innerHTML=response.wind_speed
            //wind_degrees.innerHTML=response.wind_degrees
            //sunrise.innerHTML=response.sunrise
            //sunset.innerHTML=response.sunset
        })
        .catch(err => console.error(err));
        
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
.then(response => response.json())
.then((response) =>{ console.log(response)
    //cloud_pct.innerHTML=response.cloud_pct
    tempmumbai.innerHTML=response.feels_like
    feels_likemumbai.innerHTML=response.max_temp
    
    //humidity.innerHTML=response.humidity
    min_tempmumbai.innerHTML=response.min_temp
    //max_temp.innerHTML=response.max_temp
    //wind_speed.innerHTML=response.wind_speed
    //wind_degrees.innerHTML=response.wind_degrees
    //sunrise.innerHTML=response.sunrise
    //sunset.innerHTML=response.sunset
})
.catch(err => console.error(err));

const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F','G','F']

const btn = document.getElementById("btn");

console.log(btn)
btn.addEventListener("click", function(){

     let hexcolour='#'
     for(let i=0;i<6;i++)
     {
        hexcolour+=hex[randomnumber()];
     }
     console.log(hexcolour)

    document.body.style.backgroundColor=hexcolour
})

randomnumber = () =>{
    return Math.floor(Math.random()*hex.length)
}