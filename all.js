const leftImg = document.querySelector('.left-bg>img')
const rightImg = document.querySelector('.right-bg>img')
const container = document.querySelector('.container')
const rightBg = document.querySelector('.right-bg')
const left = document.querySelector('.left')
const banner = document.querySelector('.banner')
const logo = document.querySelector('.logo')
const leftBtn = document.querySelector('#leftBtn')

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
    logo.classList.remove('logo-bg')
    logo.classList.add('logo-bg-white')
  } else {
    logo.classList.remove('logo-bg-white')
    logo.classList.add('logo-bg')
  }
})