var btn = document.querySelector('.search-box-btn')


btn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open')
    console.log(this.previousElementSibling)
    this.previousElementSibling.focus()
})