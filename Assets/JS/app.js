let toggler = document.getElementById('toogle')
toggler.addEventListener('click', sidebar)
function sidebar(e) {
    let sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('transform-100')
    let togglerCross = document.getElementById('cross')
    togglerCross.addEventListener('click', () => {
        sidebar.classList.add('transform-100')
    })
}

let btnLeft = document.getElementById('left')
let btnRight = document.getElementById('right')
let img = document.querySelectorAll('.img-slider')
let rating = document.querySelectorAll('.star-slider')
let textName = document.querySelectorAll('.text-slider')
btnLeft.addEventListener('click', slide1)
btnRight.addEventListener('click', slide2)
counter = 0;

function slide1(e) {
    if (counter === 0) {
        counter = img.length - 1
    }
    else {
        counter--
    }
    update();
}

function slide2(e) {

    if (counter === img.length - 1) {
        counter = 0
    }
    else {
        counter++
    }
    update();
}

function update() {
    img.forEach(imgs => {
        imgs.style.display = 'none'
    })
    img[counter].style.display = 'block'

    rating.forEach(stars => {
        stars.classList.toggle('d-none')
    })
    rating[counter].classList.toggle('d-flex', 'justify-content-between')
    textName.forEach(text => {
        text.style.display = 'none'
    })
    textName[counter].style.display = 'block'
}


let search = document.getElementById('search-icon')
search.addEventListener('click', (e) => {
    let searchBar = document.getElementById('search-bar')
    searchBar.getAnimations()
    searchBar.classList.toggle('d-block')
    let icon1 = document.getElementById('icon1')
    let icon2 = document.getElementById('icon2')
    icon1.classList.toggle('vanish')
    icon2.classList.toggle('d-block')
})


window.addEventListener('scroll', navigation)

function navigation(e) {
    let navBar = document.querySelector('nav')
    let windowPosition = window.scrollY > 500
    navBar.classList.toggle('position-sticky', windowPosition)
    navBar.classList.toggle('fade', windowPosition)
    // navBar.classList.toggle('fade-out', windowPosition)
    let topGo = document.getElementById('top-go')
    topGo.classList.toggle('d-block', windowPosition)
    topGo.classList.toggle('fade', windowPosition)
}