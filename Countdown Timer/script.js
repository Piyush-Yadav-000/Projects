let date=document.getElementById("date")
let sec=document.getElementById("Seconds")
let min=document.getElementById("Minute")
let days=document.getElementById("days")
let hr=document.getElementById("hours")
let currdate=new Date();
const todate=currdate.getDate()
const month=currdate.getMonth()+1;
const year=currdate.getFullYear();
const seconds=currdate.getSeconds();
const hours=currdate.getHours()
const minutes=currdate.getMinutes()
const endDate="21 march 2025 11:00 PM"
date.innerText=endDate

function updateTime(){
const end=new Date(endDate);
const currdate=new Date();
const diff=(end-currdate)/1000;
days.value=Math.floor(diff/3600/24);
hr.value=Math.floor((diff/3600)%24);
min.value=Math.floor(diff/60)%60;
sec.value=Math.floor((diff)%60);s
}

setInterval(updateTime,1000)

updateTime()


