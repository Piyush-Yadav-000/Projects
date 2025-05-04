let btn=document.getElementById("btn")

btn.addEventListener('click',()=>{
    let body=document.querySelector('body')
    console.log("hello")
    let hexcode=Math.floor(Math.random() * 16777215)
    const randomCode="#"+ hexcode.toString(16)
    console.log(randomCode)
    body.style.backgroundColor=randomCode;
})