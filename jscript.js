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