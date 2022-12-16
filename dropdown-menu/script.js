const dropdownButton = document.querySelector('#btn')
const dropdownMenu = document.querySelector('#dropdown')

function toggleDropdown() {
    dropdownMenu.classList.toggle('show')
}

dropdownButton.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleDropdown()
})

document.documentElement.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('show')) {
        toggleDropdown()
    }
})