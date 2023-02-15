;(function(){
  AOS.init()
  const url = `https://vue3-course-api.hexschool.io/api/shipi-api/products/all`
  



  const leftImg = document.querySelector('.left-bg>img')
  const rightImg = document.querySelector('.right-bg>img')
  const banner = document.querySelector('.banner')
  const logo = document.querySelector('.logo')
  const leftMbImg = document.querySelector('.left-mobile-img>img')
  const rightMbImg = document.querySelector('.right-mobile-img>img')
  const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const businessImg = document.querySelectorAll('.business-container>img')
  const business = document.querySelector('.business')
  const lightbox = document.querySelector('.lightbox')
  const lightboxImg = lightbox.querySelector('img')
  const lightboxClose = lightbox.querySelector('.close-btn')
  
  const shipiArticles = document.querySelector('.shipi-articles')
  // const articleBanner = document.querySelector('.article-banner')
  
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
  
    let mouseX = 0;
    let mouseY = 0;
    let mouseLeaveDelay = null;
  
    leftImg.addEventListener('mousemove', handleMouseMove)
    leftImg.addEventListener('mouseenter', handleMouseEnter)
    leftImg.addEventListener('mouseleave', handleMouseLeave)
    rightImg.addEventListener('mousemove', handleMouseMove)
    rightImg.addEventListener('mouseenter', handleMouseEnter)
    rightImg.addEventListener('mouseleave', handleMouseLeave)
  }
  
  window.addEventListener('scroll', () => {
    let bannerHeight = 0
    if (banner) {
      bannerHeight = banner.offsetHeight
    } else {
      return;
    }
    if (window.scrollY > bannerHeight -100) {
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
  if (business) {
    business.addEventListener('click', (e) => {
      arr = [ ...businessImg ]
      index = e.target.closest('.business-container').dataset.bimg - 1
      const imgUrl = businessImg[index].getAttribute('src')
      lightboxImg.setAttribute('src', imgUrl)
      lightbox.classList.add('active')
    })
  }
  
  if (lightbox) {
    const lightboxNext = lightbox.querySelector('.next')
    const lightboxPre = lightbox.querySelector('.pre')
    
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
  }
  
  
  if (shipiArticles) {
    function articleOpenHandler() {
      // articles height
      const url = this.style.backgroundImage.slice(5, this.style.backgroundImage.length-2)
      const img = document.createElement('img')
      img.setAttribute('src', url)
      const open = img.width > img.height ? 'open-width' : 'open';
      if(this.classList.contains('open') || this.classList.contains('open-width')) {
        this.classList.remove('open')
        this.classList.remove('open-width')
        return;
      }
      const article = this.parentElement.parentElement.querySelectorAll('.article')
      article.forEach(article => {
        article.classList.remove('open')
        article.classList.remove('open-width')
      })
      this.classList.add(open)
      console.log(img.width > img.height, open);
    }
    let articleArr = []
      axios.get(url)
        .then(res => {
          articleArr = res.data.products;
          console.log(articleArr);
          const imgArr = articleArr.filter(img => img.category.includes('圖片'))
          // let html = ''
          imgArr.forEach((img, i, arr) => {
            // appendChild
            if ((i + 1) % 5 === 1) {
              const articles = document.createElement('div')
              articles.setAttribute('class', 'articles')
              shipiArticles.appendChild(articles)
            }
            // const imgHTML = document.createElement('img')
            // imgHTML.setAttribute('src', img.imageUrl)
            // imgHTML.setAttribute('referrerpolicy', 'no-referrer')
            const articles = document.querySelectorAll('.articles')
            const article = document.createElement('div')
            article.setAttribute('class', 'article')
            article.setAttribute('style', `background-image: url(${img.imageUrl})`)
            let count = Math.floor(i / 5)
            articles[count].appendChild(article)
            if (arr.length - 1 === i) {
              const article = document.querySelectorAll('.article')
              article.forEach(article => article.addEventListener('click', articleOpenHandler));
            }
          })
        })

  }
  
})()