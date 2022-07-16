const inputEl = document.getElementById('input');
const countEl = document.getElementById('count');
const parEl = document.getElementById('vowels');
const btn = document.getElementById('btn');
let count = 0;

inputEl.addEventListener('input', (e) => {
    count = getVowels(inputEl.value).length;
    countEl.innerText = count;
    parEl.innerText = getVowels(inputEl.value);
})

function getVowels(str) {
    return str.match(/[aeiouy]/gi);
}

btn.onclick = () => {
    inputEl.value = '';
    parEl.innerText = '';
    count = 0;
    countEl.innerText = 0;
}