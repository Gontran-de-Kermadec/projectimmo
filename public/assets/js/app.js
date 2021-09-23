const btn = document.querySelector('.enter');
const bgImg = document.querySelector('.bg_img');
btn.addEventListener('click', () => {
    bgImg.classList.add('fadeout')
})

const defile = document.querySelectorAll('.defile');
const icone = document.querySelectorAll('.fa-chevron-circle-down');
const toggledElement = document.querySelectorAll('.toggle');
for(let i = 0; i < defile.length; i++) {
    defile[i].addEventListener('click', () => {
        toggledElement[i].classList.toggle('visible');
    })
}
for(let i = 0; i < icone.length; i++) {
    icone[i].addEventListener('click', () => {
        //icone[i].classList.toggle('rotate');
        if (icone[i].style.transform === '') {
            icone[i].style.transform = 'rotate(180deg)'
        } else if (icone[i].style.transform === 'rotate(180deg)') {
            icone[i].style.transform = ''
        }
    })
}

