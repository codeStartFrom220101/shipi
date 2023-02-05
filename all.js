const leftImg = document.querySelector('.left-bg>img')
const rightImg = document.querySelector('.right-bg>img')
const container = document.querySelector('.container')
const rightBg = document.querySelector('.right-bg')
const left = document.querySelector('.left')
const banner = document.querySelector('.banner')
const logo = document.querySelector('.logo')

let width = 0;
let height = 0;
let mouseX = 0;
let mouseY = 0;
let mouseLeaveDelay = null;

leftImg.addEventListener('mousemove', handleMouseMove)
leftImg.addEventListener('mouseenter', handleMouseEnter)
leftImg.addEventListener('mouseleave', handleMouseLeave)
rightImg.addEventListener('mousemove', handleMouseMove)
rightImg.addEventListener('mouseenter', handleMouseEnter)
rightImg.addEventListener('mouseleave', handleMouseLeave)

window.addEventListener('scroll', () => {
  if (window.scrollY > banner.offsetHeight -100) {
    logo.classList.remove('logo-bg')
    logo.classList.add('logo-bg-white')
  } else {
    logo.classList.remove('logo-bg-white')
    logo.classList.add('logo-bg')
  }
})


function handleMouseMove(e) {
  if(e.target === leftImg) {
    mouseX = e.pageX - container.offsetLeft - e.target.offsetLeft - e.target.offsetWidth / 2
    mouseY = e.pageY - 1105 - e.target.offsetHeight / 2
  } else {
    mouseX = e.pageX - e.target.offsetLeft - rightBg.offsetLeft - e.target.offsetWidth / 2
    mouseY = e.pageY - 2249 - e.target.offsetHeight / 2
  }
  // console.log(e.pageY, mouseY);
  
  
  let mousePX = mouseX / e.target.offsetWidth
  let mousePY = mouseY / e.target.offsetHeight
  
  const rX = mousePX * 30
  const rY = mousePY * -30

  const tX = mousePX * -40
  const tY = mousePY * -40

  e.target.style.transform = `translateX(${tX}px) translateY(calc(-50% + ${tY}px)) rotateY(${rY}deg) rotateX(${rX}deg)`
  
  // console.log(e.target.style.translateX, e.target.style.transform);
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
