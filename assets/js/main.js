/*-----Show Menu----*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    /*valida se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav_menu*/
        toggle.addEventListener('click', () =>{
            /*adicina a class show-menu na vid que tem o id nav_menu*/
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*------Remove menu mobile------*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    /*Quando um link for clicado a class show-menu será removida*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=====Deixa o link clicado com a class active-link====*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

/*---------Box Shadow no header------*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header');
    // Quando o scroll tiver um altura mairo que 200 será adiconado a class scroll-header na tag Header
    if(this.scrollY >=200) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*---------------Show scroll top-------*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //Quando o scroll tiver uma altura maior que 560 será adicionado a class scroll-top
    if(this.scrollY >=560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('sroll',scrollTop)