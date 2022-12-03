const nav = document.querySelector('.nav'),
    menuBtn = document.querySelector('.menubar'),
    closeBtn = document.querySelector('.closeicon'),
    body = document.querySelector('body'),
    loading = document.querySelector('.loading'),
    navLinks = document.querySelectorAll('.nav-link'),
    html = document.querySelector('html');
menuBtn.onclick = ()=>{
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    html.classList.toggle('scrolldisabled');
}
body.onload =()=>{
    loading.style.display = "none";
    html.style.overflowY = "auto";
}
    navLinks.forEach(navlink=>{
        navlink.onclick = ()=>{
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
            html.classList.remove('scrolldisabled');
        }
    })
//scroll top
const scrolltop = document.querySelector('.scroll-top');
window.onscroll = () => {
    window.scrollY > 50 ? scrolltop.classList.add('active') : scrolltop.classList.remove('active');
}
scrolltop.onclick = () => {
    html.scrollTop = 0;
}