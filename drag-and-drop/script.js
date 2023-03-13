const ball = document.querySelector('.ball')

const ballId = document.getElementById('ball')

const ballContainers = document.querySelectorAll('.box')

ball.addEventListener('dragstart', dragStart)

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id)
    e.target.classList.add('hide')
}