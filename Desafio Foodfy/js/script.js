const modalOverlay = document.querySelector('.modal-overlay')
const produtos = document.querySelectorAll('.produto')

for(let produto of produtos){

  produto.addEventListener('click',function(){
    const imgReceita = produto.getAttribute('id')
    const imgAltReceita = produto.querySelector('img').getAttribute('alt')
    const tituloReceita = produto.querySelector('h4').textContent
    const autorReceita = produto.querySelector('p').textContent
    
    modalOverlay.querySelector('img').src = `/img/${imgReceita}.png`
    modalOverlay.querySelector('img').alt = `${imgAltReceita}`
    modalOverlay.querySelector('#titulo').textContent = tituloReceita
    modalOverlay.querySelector('#autor').textContent = autorReceita
    modalOverlay.classList.add('modal-active')
  })
}

modalOverlay.querySelector('#close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('modal-active')
})
