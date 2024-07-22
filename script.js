const navToggle = document.getElementById('navToggle');
const menuContainer = document.getElementById('containerMenu')
const closeToggle = document.getElementById('closeToggle');

const featureDetails = document.getElementById('feature')
const companyDetails = document.getElementById('company')

const f_icon = document.getElementById('f-icon')
const c_icon = document.getElementById('c-icon')



closeToggle.onclick= ()=>{
menuContainer.classList.remove("active")
}

navToggle.onclick =()=>{
    menuContainer.classList.add("active")
}

featureDetails.onclick =(e)=>{
    console.log('init')
    const det = e.target.children[1]
    if(det.className.includes('active')){
        det.classList.remove('active')
        f_icon.classList.remove('up')
        f_icon.classList.add('down')

    }else{
        det.classList.add('active')
        f_icon.classList.remove('down')
        f_icon.classList.add('up')

    }
}
companyDetails.onclick =(e)=>{
    const det = e.target.children[1]
    if(det.className.includes('active')){
        det.classList.remove('active')
        c_icon.classList.remove('up')
        c_icon.classList.add('down')
    }else{
        det.classList.add('active')
        c_icon.classList.remove('down')
        c_icon.classList.add('up')
    }
}

