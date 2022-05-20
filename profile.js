console.log('js connected')

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')






colorBtn.addEventListener('click',() => {
    alert('my favourite color is Black')
})
placeBtn.addEventListener('click',() => {
    alert('my favourite place is Home')
})
ritualBtn.addEventListener('click',() => {
    alert('my favourite ritual is talking all the time')
})