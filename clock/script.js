let hour=document.getElementById("hour");
let second=document.getElementById("second");
let minute=document.getElementById("minute");

let d=new Date();
console.log(d)
setInterval(() => {
    hour=d.getHours();
    minute=d.getMinutes();
    second=d.getSeconds();
    hrotation=30*hour+minute/2;
    mrotation=6*minute;
    srotation=6*second;
    second.style.transform=`rotate(${srotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    hour.style.transform=`rotate(${hrotation}deg)`;
}, 1000);