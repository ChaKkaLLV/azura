const burgerContainer = document.querySelector('.burger-container');
const nav = document.querySelector('.nav');
const body = document.querySelector('body')

burgerContainer.addEventListener('click', () => {
    burgerContainer.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');
})

const status = document.querySelector('.status');

if (status.classList.contains('online')) {
    status.innerHTML = 'Online'
} else if (status.classList.contains('maintenance')) {
    status.innerHTML = 'Maintenance'
} else {
    status.innerHTML = 'Offline'
}

const signInButton = document.querySelector('.signin-button');
const signUpButton = document.querySelector('.signup-button');
const signInContainer = document.querySelector('.signin-box');
const signUpContainer = document.querySelector('.signup-box');
const signContainer = document.querySelector('.sign-container');
const closeBoxes = document.querySelectorAll('.close-box-container');

signInButton.addEventListener('click', () => {
    signInContainer.classList.add('active');
    signUpContainer.classList.remove('active');
    signContainer.classList.add('active');
    body.classList.add('active');
});

signUpButton.addEventListener('click', () => {
    signUpContainer.classList.add('active');
    signInContainer.classList.remove('active');
    signContainer.classList.add('active');
    body.classList.add('active');
});

closeBoxes.forEach(closeBox => {
    closeBox.addEventListener('click', () => {
        signUpContainer.classList.remove('active');
        signInContainer.classList.remove('active');
        signContainer.classList.remove('active');
        body.classList.remove('active');
    })
})