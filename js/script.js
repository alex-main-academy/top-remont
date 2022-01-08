let menu = document.querySelector('.header__menu-burger')
let toggle = false;

menu.addEventListener('click', () => {
    toggle = !toggle;
    
    if (toggle) {
        menu.classList.add('active')
    }else{
        menu.classList.remove('active')
    }
})