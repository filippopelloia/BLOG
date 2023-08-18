
const searchButton = document.querySelector('#search');
const searchSection = document.querySelector('#search-section');
const body = document.querySelector('body');
let lock = 0;

searchButton.addEventListener('click', () => {
    if(lock === 0){

        searchSection.classList.remove('hide');
        body.classList.add('no-scrolling');
        lock = 1;

    } else {

        searchSection.classList.add('hide');
        body.classList.remove('no-scrolling');
        lock = 0;

    }
})