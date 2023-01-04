const navbar=document.getElementById('nav')
const btn_contact=document.getElementById('contact-btn')
const experience_btn=document.getElementById('experiences-btn')
const skills_btn=document.getElementById('skills-btn')
const skills_cont=document.getElementById('skills-content')
const experiences_cont=document.getElementById('experiences-content')
const menu=document.getElementById('menu-mob')
menu.classList.add('desaparecer')
experiences_cont.classList.add('desaparecer')

navbar.classList.remove('change')
document.addEventListener("scroll",()=>{
  
    if(window.scrollY>70){
        navbar.classList.add('change')
    }
    else{
        navbar.classList.remove('change')
    }

})

function onTop(){
    window.scrollTo(0,0)
}
const typed=new Typed('.profession',{
    strings:['','Desarrollador Web','Diseñador UX/UI','Arquitecto Web','Ingeniero de Datos'],
    typeSpeed:75,
    startDelay:300,
    backSpeed:75,
    shuffle:false,
    backDelay:1500,
    loop:true,
    loopCount:false,
    showCursor:true,
    cursorChar:'|',
    contentType:'html'
})

experience_btn.addEventListener('click',()=>{
    experience_btn.classList.add('active-btn')
    skills_btn.classList.remove('active-btn')
    skills_cont.classList.add('desaparecer')
    experiences_cont.classList.remove('desaparecer')
})
skills_btn.addEventListener('click',()=>{
    experience_btn.classList.remove('active-btn')
    skills_btn.classList.add('active-btn')
    skills_cont.classList.remove('desaparecer')
    experiences_cont.classList.add('desaparecer')
})
function openMenu(){
    menu.classList.remove('desaparecer')
}
function closeMenu(){
    menu.classList.add('desaparecer')
}
