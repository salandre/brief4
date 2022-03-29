document.addEventListener('DOMContentLoaded', () => {
  
    hamburger = document.querySelector('.fa-bars');
    wrapper = document.querySelector('.wrapper');
    close = document.querySelector('.close');

    hamburger.addEventListener('click', () => {
        wrapper.style.visibility = "visible";
    });

    close.addEventListener('click', () => {
        wrapper.style.visibility = "hidden";
    });
    
});

