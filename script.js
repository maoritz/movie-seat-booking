const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
const ticketPrice = +movieSelect.value

movieSelect.addEventListener('click',(e)=>{
    console.log(e)
})

console.log(ticketPrice)
let counter = +count.textContent

container.addEventListener("click", (e)=>{


    if(e.target.classList.contains('seat')&&
      !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        !e.target.classList.contains('selected')?counter--:counter++
    }

    count.innerHTML = counter

});

