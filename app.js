const loca = document.querySelector('#loc');
const temp = document.querySelector('.temperature');
const temp1 = document.querySelector('.temperature1');
const dat = document.querySelector(".date");
const ico = document.querySelector(".icon");
const ico1 = document.querySelector(".icon1");
const dates = document.querySelector(".date1");
const no1 = document.getElementById('no1');
const no2 = document.getElementById('no2');
const no3 = document.getElementById('no3');
const no4 = document.getElementById('no4');
const locaName = document.getElementById('locaName');
window.addEventListener('load',setInterval(() =>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((postion)=>{
            long = postion.coords.longitude.toString();
            lat = postion.coords.latitude.toString();
            const prams = new URLSearchParams({
                access_key : '87ac34d0f893595525965971bdbe71ef',
                query :(lat,long) ,
                units :'m'
            } )
            fetch(`https://api.weatherapi.com/v1/current.json?key=c21bceae576c410fa36201126211509&q=${lat},${long}`)
            .then(response => response.json())
                .then(response => {
                    console.log(response);
                    const date = new Date();
                    const dd = String(date.getDate()).padStart(2,'0');
                    const mm = String(date.getMonth() + 1).padStart(2,'0');
                    const yy = String(date.getUTCHours())
                     // ${dd + '/' + mm + '/' + yy}
                    dat.innerHTML = `
                                        <h3 class="da">
                                           ${date.toDateString()}
                                        </h3>
                                        <h3 class="tim mt-4">
                                            ${toGetTime(date)}
                                        </h3>
                                    `
                    ico.innerHTML = `<img src="${response.current.condition.icon}">`;
                    loca.innerHTML = `
                                        ${response.location.region}
                        `;
                    locaName.innerHTML = `
                        ${response.location.name}
                        `
                    temp.innerHTML = `
                        <h1 class="tem">${response.current.temp_c} 	&#8451;</h1>
                        <h2 class="descrp mt-3">${response.current.condition.text}</h2>
                    `


                })
                .catch(err => {
                    console.error(err);
                });
                fetch(`https://api.weatherapi.com/v1/forecast.json?key=c21bceae576c410fa36201126211509&q=${lat},${long}&days=6`)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    no1.innerHTML = 
                    `
                    <div class="date1">
                                ${response.forecast.forecastday[1].date}
                            </div>
                            <div class="icon1">
                            <img src="${response.forecast.forecastday[1].day.condition.icon}">
                            </div>
                            <div class="temperature1">
                            <h1 class="tem">${response.forecast.forecastday[1].day.avgtemp_c} 	&#8451;</h1>
                            <h2 class="descrp mt-3">${response.forecast.forecastday[1].day.condition.text}</h2>

                    `
                    no2.innerHTML = 
                                    `
                                    <div class="date1">
                                                ${response.forecast.forecastday[2].date}
                                            </div>
                                            <div class="icon1">
                                            <img src="${response.forecast.forecastday[2].day.condition.icon}">
                                            </div>
                                            <div class="temperature1">
                                            <h1 class="tem">${response.forecast.forecastday[2].day.avgtemp_c} 	&#8451;</h1>
                                            <h2 class="descrp mt-3">${response.forecast.forecastday[2].day.condition.text}</h2>

                                    `;
                })
                .catch(err => {
                    console.error(err);
                });
            // fetch(`https://api.ambeedata.com/weather/latest/by-lat-lng?lat=${lat}&lng=${long}`, {
            // "method": "GET",
            // "headers": {
            // "x-api-key": "77ce4820ddeb355f64715db5b9b272b91d496dd49cfc6c99b552c9f33be17865",
            // "Content-type": "application/json"
            // }}).then(response => response.json())
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     });


            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8e5aaec75465930407a084cea868f2c3&units=metric`)
            // .then(response => response.json())    
            // .then(response => {
            //         console.log(response);
            //         const date = new Date();
            //         const dd = String(date.getDate()).padStart(2,'0');
            //         const mm = String(date.getMonth() + 1).padStart(2,'0');
            //         const yy = String(date.getUTCHours())
            //          // ${dd + '/' + mm + '/' + yy}
            //         dat.innerHTML = `
            //                             <h3 class="da">
            //                                ${date.toDateString()}
            //                             </h3>
            //                             <h3 class="tim mt-4">
            //                                 ${toGetTime(date)}
            //                             </h3>
            //                         `
            //         loca.innerHTML = `
            //                             ${response.name}
            //                         `
            //         const iconurl = "http://openweathermap.org/img/wn/" + response['weather'][0]['icon'] + "@4x.png";
            //         ico.innerHTML = `<img src="${iconurl}">`;
            //         temp.innerHTML = `
            //                             <h1 class="tem">${response.main.temp} 	&#8451;</h1>
            //                             <h2 class="descrp mt-3">${response['weather'][0]['description']}</h2>
            //                         `
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     });


            // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=8e5aaec75465930407a084cea868f2c3&units=metric`)
            // .then(response => response.json())    
            // .then(response => {
            //         console.log(response);
            //         dates.innerHTML = response.list[8].dt_txt.slice(0,10);
            //         const iconurl = "http://openweathermap.org/img/wn/" + response.list[8]['weather'][0]['icon'] + "@4x.png";
            //         ico1.innerHTML = `<img src="${iconurl}">`;
            //         temp1.innerHTML = `
            //                             <h1 class="tem">${response.list[8].main.temp} 	&#8451;</h1>
            //                             <h2 class="descrp mt-3">${response.list[8]['weather'][0]['description']}</h2>
            //                         `

            //         no2.innerHTML = 
            //                         `
            //                         <div class="date1">
            //                                     ${response.list[16].dt_txt.slice(0,10)}
            //                                 </div>
            //                                 <div class="icon1">
            //                                 <img src="${"http://openweathermap.org/img/wn/" + response.list[16]['weather'][0]['icon'] + "@4x.png"}">
            //                                 </div>
            //                                 <div class="temperature1">
            //                                 <h1 class="tem">${response.list[16].main.temp} 	&#8451;</h1>
            //                                 <h2 class="descrp mt-3">${response.list[16]['weather'][0]['description']}</h2>

            //                         `
            //         no3.innerHTML = 
            //                         `
            //                         <div class="date1">
            //                                     ${response.list[24].dt_txt.slice(0,10)}
            //                                 </div>
            //                                 <div class="icon1">
            //                                 <img src="${"http://openweathermap.org/img/wn/" + response.list[24]['weather'][0]['icon'] + "@4x.png"}">
            //                                 </div>
            //                                 <div class="temperature1">
            //                                 <h1 class="tem">${response.list[24].main.temp} 	&#8451;</h1>
            //                                 <h2 class="descrp mt-3">${response.list[24]['weather'][0]['description']}</h2>

            //                         `
            //         no4.innerHTML = 
            //                         `
            //                         <div class="date1">
            //                                     ${response.list[32].dt_txt.slice(0,10)}
            //                                 </div>
            //                                 <div class="icon1">
            //                                 <img src="${"http://openweathermap.org/img/wn/" + response.list[32]['weather'][0]['icon'] + "@4x.png"}">
            //                                 </div>
            //                                 <div class="temperature1">
            //                                 <h1 class="tem">${response.list[32].main.temp} 	&#8451;</h1>
            //                                 <h2 class="descrp mt-3">${response.list[32]['weather'][0]['description']}</h2>

            //                         `
            //                     })
            //     .catch(err => {
            //         console.error(err);
            //     });
                        })
                    }
},1000))



function toGetTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12? 'PM' :'AM';
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


