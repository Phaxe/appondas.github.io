const menubtn= document.getElementById('menubtn');
const close= document.getElementById('close');
const menu2 = document.getElementById('menu2'); 
if (menubtn){
    menubtn.addEventListener('click' ,()=>{
        menu2.classList.add('active');
    })
}
if (close){
    close.addEventListener('click' ,()=>{
        menu2.classList.remove('active');
    })
}

document.getElementById("mybutton").onclick = function () {
    location.href = "http://127.0.0.1:5500/GetinTouch.html";
};