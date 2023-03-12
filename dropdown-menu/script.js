const dropdownButton = document.querySelector('#btn')
const dropdownMenu = document.querySelector('#dropdown')

function toggleDropdown() {
    dropdownMenu.classList.toggle('show')
}

dropdownButton.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleDropdown()
})

//this will close the dropdown menu when you click wither on
//the dropdown menu, or outisde it
document.documentElement.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('show')) {
        toggleDropdown()
    }
})