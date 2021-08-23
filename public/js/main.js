const btn=document.getElementById('submitbtn');
const cityname=document.getElementById('cityname');
const city_name=document.getElementById('city_name');
const temp_realval=document.getElementById('temp_realval');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value;
   //console.log(cityVal);
    if(cityVal===""){
        city_name.innerText=`please write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2d8d1d97d0f73c20ecf6b17523f2a02f`;
        const response= await fetch(url);
        const value= await response.json();
        console.log(value);
       //console.log(response);
        
        //console.log(value);
        const arrdata=[value];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_realval.innerText=arrdata[0].main.temp;
        

        const tempmood=arrdata[0].weather[0].main;
        if(tempmood==="Clear"){
            temp_status.innerHTML="<i class='fa fa sun' style='color: #ecc68;'></i>";
        }
        else if(tempmood==="Clouds"){
            temp_status.innerHTML="<i class='fa fa-cloud' style='color: #f1f2f6;'></i>";
        }
        if(tempmood==="Rain"){
            temp_status.innerHTML="<i class='fa fa-cloud-rain' style='color: #a40be;'></i>";
        }
        else{
            temp_status.innerHTML="<i class='fa fa-cloud' style='color: blue;'></i>";
        }
        datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText=`please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}


btn.addEventListener('click',getInfo);