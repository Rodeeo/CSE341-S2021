const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#toggleMenu');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);


function add2(op1,op2) {
let add2;
// Write your code here
area = op1 + op2;    
return add2;

}



 

