let height;
let width;

window.addEventListener("resize", function() {
  height = this.innerHeight
  width = this.innerWidth
})

// if (width < ) {
// }

let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navUl = document.querySelector('nav ul') 

toggleButton.addEventListener('click', () => {
  navUl.classList.toggle('active')
})