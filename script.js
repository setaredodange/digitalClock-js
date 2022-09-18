const hourElem= document.querySelector('#hour')
const minuteElem= document.querySelector('#minute')
const secondElem= document.querySelector('#seconds')

let myDate=new Date()

setInterval(function(){

    let myDate=new Date()
    // console.log(myDate);

    let nowHour = myDate.getHours()
    let nowMinute = myDate.getMinutes()
    let nowSecond = myDate.getSeconds()

    if(nowHour < 10){
        nowHour = '0' + nowHour
    }
    if(nowMinute < 10){
        nowMinute = '0' + nowMinute
    }
    if(nowSecond < 10){
        nowSecond = '0' + nowSecond
    }

    hourElem.innerHTML = nowHour
    minuteElem.innerHTML = nowMinute
    secondElem.innerHTML = nowSecond


    console.log(myDate) 



},1000);