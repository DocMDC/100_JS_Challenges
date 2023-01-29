import Person from './classes.js'

let michael = new Person('Michael', 32, 'Doctor')

const selectFontSize = document.getElementById('font-size')
const textArea = document.querySelector('.text')

selectFontSize.addEventListener('change', () => {
    let newFontSize = selectFontSize.value
    textArea.style.fontSize = `${newFontSize}px`
})