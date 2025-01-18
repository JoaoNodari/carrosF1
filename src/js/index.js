const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')

const container = document.querySelector('.container')
const list = document.querySelector('.list')
const thumb = document.querySelector('.thumb')

btnNext.onclick = () => moveItemsOnclick('next')
btnBack.onclick = () => moveItemsOnclick('back')

function moveItemsOnclick(type) {

    const listItems = document.querySelectorAll('.list-item')
    const thumbItems = document.querySelectorAll('.thumb-item')
    
    if(type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
    }
}

console.log(list)