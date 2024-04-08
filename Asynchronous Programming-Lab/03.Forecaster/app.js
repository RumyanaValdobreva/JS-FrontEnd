function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/forecaster/'
    const wantedLocationElement = document.getElementById('location')
    const submitButtonElement = document.getElementById('submit')
    const forecastElement = document.getElementById('forecast')
    const currentWeatherElement = document.getElementById('current')
    const upcomingWeatherElement = document.getElementById('upcoming')
    submitButtonElement.addEventListener('click', getWeatherEvent)

    let weatherChars = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    function getWeatherEvent() {
        forecastElement.style.display = 'block'

        fetch(url + 'locations')
        .then(response => response.json())
        .then(data => {
            for (let location of data) {
                if (location.name === wantedLocationElement.value) {
                    let currentLocationCode = location.code

                    fetch(url + 'today/' + currentLocationCode)
                        .then(response => response.json())
                        .then(data => {
                            const divElement = document.createElement('div')
                            divElement.className = 'forecasts'
                            divElement.innerHTML = `
                            <span class="condition symbol">${weatherChars[data.forecast.condition]}</span>
                            <span class="condition">
                                <span class="forecast-data">${data.name}</span>
                                <span class="forecast-data">${data.forecast.low}${weatherChars['Degrees']}/${data.forecast.high}${weatherChars['Degrees']}</span>
                                <span class="forecast-data">${data.forecast.condition}</span>
                            </span>
                            `
                            currentWeatherElement.appendChild(divElement)
                        });
                    
                    fetch(url + 'upcoming/' + currentLocationCode)
                        .then(response => response.json())
                        .then(data => {
                            const divElement = document.createElement('div')
                            divElement.className = 'forecast-info'
                            for (let dayForecast of data.forecast) {
                                const newSpan = document.createElement('span')
                                newSpan.className = 'upcoming'
                                newSpan.innerHTML = `
                                <span class="symbol">${weatherChars[dayForecast.condition]}</span>
                                <span class="forecast-data">${dayForecast.low}${weatherChars['Degrees']}/${dayForecast.high}${weatherChars['Degrees']}</span>
                                <span class="forecast-data">${dayForecast.condition}</span>
                                `
                                divElement.appendChild(newSpan)
                            }

                            upcomingWeatherElement.appendChild(divElement)
                        });
                }
            }
        });

        
    }

    
};

attachEvents();