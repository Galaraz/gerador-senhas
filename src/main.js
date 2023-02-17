import {nanoid} from 'nanoid';
import "./style.css";

const passwordbtnEl = document.querySelector('button')


const displayPasswordEl = document.querySelector('h2')


passwordbtnEl.addEventListener('click', () =>{
    const randomPassword = nanoid()
    displayPasswordEl.innerHTML = randomPassword
})
