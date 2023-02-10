let sidebar = document.querySelector('#sidebar');
let body = document.querySelector('#bodywrap');

function openSidebar() {
  sidebar.classList.toggle('hidden');
  sidebar.classList.toggle('block');
  body.classList.toggle('fixed');
}

// Sign In + Sign Up Method
let signin = document.querySelector('#signin-form');
let signup = document.querySelector('#signup-form');

function switchForm() {
  signup.classList.toggle('-translate-x-full');
  signup.classList.toggle('translate-x-0');
  signin.classList.toggle('translate-x-0');
  signin.classList.toggle('translate-x-full');
}
