import React from "react";
var weather = [
	{city:"Delhi", temprature:"35"},
	{city:"Mumbai", temprature:"30"},
	{city:"Calcutta", temprature:"35"},
	{city:"Chennai", temprature:"30"}
]

var cities = weather.reduce(function(totalObject2, weatherCity){						

 	var weatherCityNew = {city:weatherCity.city, 
				 		fTemp:(weatherCity.temprature* 9/5) + 32, 
				 		cTemp:Number(weatherCity.temprature) }

	totalObject2.push(weatherCityNew)		

 	return totalObject2; 

},[])

const cityRenderer = () =>{
    return (
        <ul>
            {cities.map(city => {
                return (
                    <li>City:<span className="city">{city.city}</span> 
                    <span>Cel: {city.cTemp}</span> 
                    <span>FTem: {city.fTemp}</span>
                    </li>
                )

            })}
        </ul>
    )
}

export default cityRenderer;