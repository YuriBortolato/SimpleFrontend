'use strict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', () => {
    
    var className = document.body.className;
    document.body.classList.toggle('dark-theme');
    if (className === 'light-theme') {
        this.textContent = 'dark';
    } else {
        this.textContent = 'light';
    }
    console.log('current class name: ' + className);
});