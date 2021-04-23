// Selecting search components
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// Opens search input
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
