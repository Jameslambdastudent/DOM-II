// Your code goes here
const button = document.getElementsByClassName('.btn')

button.addEventListener('click' , runEvent)
button.addEventListener('dbclick', runEvent)
button.addEventListener('mousedown', runEvent)
button.addEventListener('mouseup', runEvent)
button.addEventListener('mouseenter', runEvent)
button.addEventListener('mouseleave', runEvent)
button.addEventListener('mouseout', runEvent)
button.addEventListener('mousemove', runEvent)
button.addEventListener('submit', runEvent)


const navBar = document.getElementsByClassName('nav')
navBar.addEventListener('dbclick', (e) => {
navBar.style.color = 'green'
e.preventDefault()
})

button.addEventListener('click', (e) => {
       console.log('middle');
      button.style.color = 'green';
      e.stopPropagation();
     });






function runEvent(e) {
 console.log(`EVENT TYPE: ${e.type}`)
}
