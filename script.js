const input = document.getElementById('input-field');
const buttons = document.querySelectorAll('button');

buttons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.textContent === 'C') {
            input.innerText = " ";
        } 
        else if (e.target.textContent === '<') {
            input.innerText = input.innerText.slice(0,-1);
        } else if (e.target.textContent === '=') {
            input.innerText = eval(input.innerText);
        }
        else {
            input.innerText += e.target.textContent;
        }
    })
})