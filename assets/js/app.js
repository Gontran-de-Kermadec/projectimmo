const btn = document.querySelector('.enter');
const bgImg = document.querySelector('.bg_img');
btn.addEventListener('click', () => {
    bgImg.classList.add('fadeout')
    // bgImg.style.display = 'none';
})

const defile = document.querySelectorAll('.defile');
const toggledElement = document.querySelectorAll('.toggle');
for(let i = 0; i < defile.length; i++) {
    defile[i].addEventListener('click', () => {
        toggledElement[i].classList.toggle('visible');
    })
}

