const ball = document.querySelector('.ball')
const ballId = document.getElementById('ball')
const ballContainers = document.querySelectorAll('.box')

ball.addEventListener('dragstart', dragStart)

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id)

    setTimeout(() => {
        e.target.classList.add('hide'), 0
    })
}

ballContainers.forEach(container => {
    container.addEventListener('dragenter', dragEnter)
    container.addEventListener('dragover', drageOver)
    container.addEventListener('dragleave', dragLeave)
    container.addEventListener('drop', drop)
})

function dragEnter(e) {
    e.target.classList.add('drag-over')
}

function drageOver(e) {
    e.target.classList.add('drag-over')
}

function dragLeave(e) {
    e.target.classList.remove('drag-over')
}

function drop(e) {
    e.target.classList.remove('drag-over')
}