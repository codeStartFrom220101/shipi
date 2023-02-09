AOS.init()

const leftImg = document.querySelector('.left-bg>img')
const rightImg = document.querySelector('.right-bg>img')
const banner = document.querySelector('.banner')
const logo = document.querySelector('.logo')
const leftMbImg = document.querySelector('.left-mobile-img>img')
const rightMbImg = document.querySelector('.right-mobile-img>img')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const body = document.querySelector('body')
const businessImg = document.querySelectorAll('.business-container>img')
const business = document.querySelector('.business')
const lightbox = document.querySelector('.lightbox')
const lightboxImg = lightbox.querySelector('img')
const lightboxClose = lightbox.querySelector('.close-btn')

let index = 0
let arr = []

if (leftMbImg) {
  leftMbImg.addEventListener('click', () => {
    left.classList.add('active')
    setTimeout(() => {
      left.classList.remove('active')
    }, 3000);
  })
  rightMbImg.addEventListener('click', () => {
    right.classList.add('active')
    console.log(rightMbImg);
    setTimeout(() => {
      right.classList.remove('active')
    }, 3000);
  })
}

if (leftImg) {
  let mouseX = 0;
  let mouseY = 0;
  let mouseLeaveDelay = null;
  
  leftImg.addEventListener('mousemove', handleMouseMove)
  leftImg.addEventListener('mouseenter', handleMouseEnter)
  leftImg.addEventListener('mouseleave', handleMouseLeave)
  rightImg.addEventListener('mousemove', handleMouseMove)
  rightImg.addEventListener('mouseenter', handleMouseEnter)
  rightImg.addEventListener('mouseleave', handleMouseLeave)
  
  function handleMouseMove(e) {
    
    mouseX = e.offsetX - e.target.offsetWidth / 2
    mouseY = e.offsetY - e.target.offsetHeight / 2  
    // console.log(e);
    
    let mousePX = mouseX / e.target.offsetWidth
    let mousePY = mouseY / e.target.offsetHeight
    
    const rX = mousePX * 30
    const rY = mousePY * -30
    
    const tX = mousePX * -50
    const tY = mousePY * -50
    
    e.target.style.transform = `translateX(${tX}px) translateY(calc(-50% + ${tY}px)) rotateY(${rY}deg) rotateX(${rX}deg)`
  }

  function handleMouseEnter() {
    clearTimeout(mouseLeaveDelay)
  }
  
  function handleMouseLeave(e) {
    mouseLeaveDelay = setTimeout(() => {
      e.target.style.transform = `translateX(0px) translateY(calc(-50%))`
      mouseX = 0 
      mouseY = 0
    }, 500)
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY > banner.offsetHeight -100) {
    document.querySelector('.more-btn').style.color = 'white'
    logo.classList.remove('logo-bg')
    logo.classList.add('logo-bg-white')
  } else {
    document.querySelector('.more-btn').style.color = 'black'
    logo.classList.remove('logo-bg-white')
    logo.classList.add('logo-bg')
  }
})

// lightbox
business.addEventListener('click', (e) => {
  arr = [ ...businessImg ]
  index = e.target.closest('.business-container').dataset.bimg - 1
  const imgUrl = businessImg[index].getAttribute('src')
  lightboxImg.setAttribute('src', imgUrl)
  lightbox.classList.add('active')
})

const lightboxNext = lightbox.querySelector('.next')
const lightboxPre = lightbox.querySelector('.pre')

console.log(lightboxNext, lightboxPre);

lightboxNext.addEventListener('click', () => {
  if (!lightbox.classList.contains('active')) {
    return;
  }
  index = index * 1
  index === arr.length - 1 ? index = 0 : index += 1
  const imgUrl = businessImg[index].getAttribute('src')
  lightboxImg.setAttribute('src', imgUrl)
})

lightboxPre.addEventListener('click', () => {
  if (!lightbox.classList.contains('active')) {
    return;
  }
  index = index * 1
  index === 0 ? index = arr.length - 1 : index -= 1
  const imgUrl = businessImg[index].getAttribute('src')
  lightboxImg.setAttribute('src', imgUrl)
})

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active')
})