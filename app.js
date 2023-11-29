const inactiveSection = document.querySelector('.inactive-state');
const activeSection = document.querySelector('.active');
const inactiveShareIcon = document.querySelector('.inactive-share-icon');
const exitShare = document.querySelector('.share-icon');

inactiveShareIcon.addEventListener('click', function () {
    if (!inactiveSection.classList.contains('hidden')) {
        inactiveSection.classList.add('hidden')
        activeSection.classList.remove('hidden')
    }
})

exitShare.addEventListener('click', function () {
    if (!activeSection.classList.contains('hidden')) {
        inactiveSection.classList.remove('hidden')
        activeSection.classList.add('hidden')
    }
})

// document.addEventListener('click', function () {
//
// })