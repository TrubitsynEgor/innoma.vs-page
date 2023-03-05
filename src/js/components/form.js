const openBtn = document.querySelector('.btn-open');
const phoneList = document.querySelector('.phone-list')

openBtn.addEventListener('click', (event) => {
  phoneList.classList.toggle('active')
  document.querySelector('.arrow').classList.toggle('active')

})

const addValueBtn = document.querySelectorAll('.btn-add');
const phoneInput = document.querySelector('.input-phone');


addValueBtn.forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    phoneInput.value = event.target.textContent
    phoneList.classList.remove('active')
    openBtn.classList.remove('active')
  })
})

phoneInput.addEventListener('focus', () => {
  document.querySelector('.flag').style.display = 'none'
})
phoneInput.addEventListener('blur', () => {
  document.querySelector('.flag').style.display = 'block'
})

