//toogle class active 
const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

//section1
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }

        //untuk animasi berulang 
       
    })
}

