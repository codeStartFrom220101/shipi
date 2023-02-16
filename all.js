;(function(){
  AOS.init()
  const url = `https://vue3-course-api.hexschool.io/api/shipi-api/products/all`
  


  const wrap = document.querySelector('.wrap')
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
  const articleBanner = document.querySelector('.article-banner')
  
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
      setTimeout(() => {
        right.classList.remove('active')
      }, 3000);
    })
  }
  
  if (leftImg) {
    
    function handleMouseMove(e) {
      
      mouseX = e.offsetX - e.target.offsetWidth / 2
      mouseY = e.offsetY - e.target.offsetHeight / 2  
      
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
      bannerHeight = banner.offsetHeight - 100
    } else {
      bannerHeight = articleBanner.offsetHeight
    }
    if (window.scrollY > bannerHeight) {
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
      const url = this.style.backgroundImage.slice(5, this.style.backgroundImage.length - 2)
      const img = document.createElement('img')
      img.setAttribute('src', url)
      const open = img.width > img.height ? 'open-width' : 'open';
      const thisArticleLength = this.parentElement.querySelectorAll('.article').length
      const height = img.width > img.height ? (img.height / img.width) * this.parentElement.offsetWidth/(thisArticleLength + 9) * 10 : (img.height / img.width) * this.parentElement.offsetWidth/(thisArticleLength + 4) * 5


      if(this.classList.contains('open') || this.classList.contains('open-width')) {
        this.classList.remove('open')
        this.classList.remove('open-width')
        this.parentElement.setAttribute('style', 'height: 50vh;')
        return;
      }

      const article = this.parentElement.parentElement.querySelectorAll('.article')
      article.forEach(article => {
        article.classList.remove('open')
        article.classList.remove('open-width')
      })
      
      const articles = this.parentElement.parentElement.querySelectorAll('.articles')
      articles.forEach(articles => {
        if (articles !== this.parentElement) {
          articles.setAttribute('style', 'height: 50vh;')
        }
      })
      this.classList.add(open)
      this.parentElement.setAttribute('style', `height: ${height}px;`)
    }
    
    function articleTransitionEnd(e) {
      if (e.propertyName.includes('opacity') && ( this.classList.contains('open') || this.classList.contains('open-width'))) {
        console.log(window);
        window.scrollTo({
          top: this.parentElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }

    const screenWidth = wrap.offsetWidth;

    let articleArr = []
      axios.get(url)
        .then(res => {
          articleArr = res.data.products;
          const imgArr = articleArr.filter(img => img.category.includes('圖片'))
          let artNum = screenWidth > 1280 ? 10 : screenWidth < 768 ? 2 : 6
          imgArr.forEach((img, i, arr) => {
            let count = Math.floor(i / artNum)
            if (i + 1 + (artNum / 2) > arr.length) return;
            if ((i + 1) % artNum === 1) {
              const articles = document.createElement('div')
              articles.setAttribute('class', 'articles')
              articles.setAttribute('style', 'height: 50vh;')
              let animation = count % 2 > 0 ? 'fade-left' : 'fade-right'
              articles.setAttribute('data-aos', animation)
              articles.setAttribute('data-aos-duration', '1000')
              shipiArticles.appendChild(articles)
            }
            // const imgHTML = document.createElement('img')
            // imgHTML.setAttribute('src', img.imageUrl)
            // imgHTML.setAttribute('referrerpolicy', 'no-referrer')
            const articles = document.querySelectorAll('.articles')
            const article = document.createElement('div')
            article.setAttribute('class', 'article')
            article.setAttribute('style', `background-image: url(${img.imageUrl})`)
            
            articles[count].appendChild(article)
          })
          const article = document.querySelectorAll('.article')
          article.forEach(article => article.addEventListener('click', articleOpenHandler));
          article.forEach(article => article.addEventListener('transitionend', articleTransitionEnd));
        })

  }
  
})()