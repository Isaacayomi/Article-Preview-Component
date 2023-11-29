const inactiveSection = document.querySelector('.inactive-state');
const activeSection = document.querySelector('.active');
const inactiveShareIcon = document.querySelector('.inactive-share-icon');
const exitShare = document.querySelector('.share-icon');

//Desktiop share Icon
const desktopShareIcon = document.querySelector('.desktop-share-icon')
const desktopModal = document.querySelector('.hide-modal')
const revealModal = document.querySelector('.displayNone')
// console.log(desk)

inactiveShareIcon.addEventListener('click', function () {
    if (!inactiveSection.classList.contains('hidden')) {
        inactiveSection.classList.add('hidden')
        activeSection.classList.remove('hidden')
    } else {
        inactiveSection.classList.remove('hidden')
        activeSection.classList.add('hidden')
    }
})

exitShare.addEventListener('click', function () {
    if (!activeSection.classList.contains('hidden')) {
        inactiveSection.classList.remove('hidden')
        activeSection.classList.add('hidden')
    }
})

desktopShareIcon.addEventListener('click', function () {
    if (desktopModal.classList.contains('hide-modal')) {
        desktopModal.classList.remove('hide-modal')
        revealModal.style.display = "block"
    } else {
        desktopModal.classList.add('hide-modal')
    }
})
