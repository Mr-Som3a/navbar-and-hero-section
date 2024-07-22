const navToggle = document.getElementById('navToggle');
const menuContainer = document.getElementById('containerMenu')
const closeToggle = document.getElementById('closeToggle');


closeToggle.onclick= ()=>{
menuContainer.classList.remove("active")
}

navToggle.onclick =()=>{
    menuContainer.classList.add("active")
}