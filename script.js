// ============typing animation=========
var typed = new Typed(".typing",{
    strings:["","Web Developer", "Web Designer","creative thinker"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
     
})
