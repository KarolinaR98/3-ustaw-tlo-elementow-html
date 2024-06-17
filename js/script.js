let paragraph1 = document.getElementById('p-1');
let paragraph2 = document.getElementById('p-2');
let btn = document.getElementById('btn');

const setBackground = () => {

    paragraph1.style.backgroundColor = 'red';
    paragraph2.style.backgroundColor = 'yellow'
}

btn.addEventListener('click', setBackground);