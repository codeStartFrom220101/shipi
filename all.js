;(function(){
  AOS.init()

  const wrap = document.querySelector('.wrap')
  const leftImg = document.querySelector('.left-bg>img')
  const leftBtn = document.querySelector('.left-btn')
  const rightImg = document.querySelector('.right-bg>img')
  const rightBtn = document.querySelector('.right-btn')
  const banner = document.querySelector('.banner')
  const logo = document.querySelector('.logo')
  const moreBtn = document.querySelector('.more-btn')
  const leftMbImg = document.querySelector('.left-mobile-img>img')
  const rightMbImg = document.querySelector('.right-mobile-img>img')
  const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const businessImg = document.querySelectorAll('.business-container>img')
  const business = document.querySelector('.business')
  const lightbox = document.querySelector('.lightbox')

  const categoryMenu = document.querySelector('.category-menu')
  const categoryMenuMobile = document.querySelector('.category-menu-mobile')
  const categoryMenuBtnMobile = document.querySelector('.category-menu-icon')
  const pagePercentLeft = document.querySelector('.left-spin .mask')
  const pagePercentRight = document.querySelector('.right-spin .mask')
  const pagePercentImg = document.querySelector('.scroll-spin img')
  const hamburger = document.querySelector('.hamburger')
  const articleNotice = document.querySelector('.article-notice')
  const comicLightbox = document.querySelector('.comic-lightbox')

  
  const shipiArticles = document.querySelector('.shipi-articles')
  const articleBanner = document.querySelector('.article-banner')
  
  const screenWidth = wrap.offsetWidth;
  let articleArr = []
  let index = 0
  let arr = []
  let totalHeight = 0
  let categoryNow = localStorage.getItem('categoryNow')

  if (leftMbImg) {
  }
  
  if (leftImg || leftMbImg) {
    
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
    leftBtn.addEventListener('click', () => {
      localStorage.setItem('categoryNow', '左手')
    })
    rightBtn.addEventListener('click', () => {
      localStorage.setItem('categoryNow', '右手')
    })
    moreBtn.addEventListener('click', () => {
      localStorage.setItem('categoryNow', '圖片')
    })

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

  function throtting(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      if (timeout) return;
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


  function articleScroll(method) {
    categoryMenu.classList[method]('active')
    hamburger.classList[method]('active')
  }

  function scrollHandler() {
    console.log('scroll');
    const underBannerHeight = banner ? banner.offsetHeight - 100 : articleBanner.offsetHeight
    const underBanner = window.scrollY > underBannerHeight ? true : false 
    const method = underBanner ? 'add' : 'remove'
    const color = underBanner ? 'white' : 'black'
    banner ? null : articleScroll(method)
    document.documentElement.style.setProperty('--underBannerColor', color)
    logo.classList[method]('active')
  
    const pagePercent = window.pageYOffset / (totalHeight - window.innerHeight)
    if (pagePercent * 360 <= 180) {
      pagePercentLeft.style.transform = `rotate(${pagePercent * 360}deg)`
      pagePercentRight.style.transform = 'rotate(0deg)'
    } else {
      pagePercentLeft.style.transform = 'rotate(180deg)'
      pagePercentRight.style.transform = `rotate(${pagePercent * 360 - 180}deg)`
    }
    pagePercentImg.style.transform = `rotate(${pagePercent * 360 + 180}deg)`
  }

  window.addEventListener('scroll', throtting(scrollHandler))
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
    const lightboxImg = lightbox.querySelector('img')
    const lightboxClose = lightbox.querySelector('.close-btn')
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
  
  if (comicLightbox) {
    const comicLightboxClose = comicLightbox.querySelector('.close-btn')

    comicLightboxClose.addEventListener('click', () => {
      comicLightbox.classList.remove('active')
    })
  }
  
  if (shipiArticles) {
    const artNum = screenWidth > 1280 ? 10 : screenWidth < 768 ? 2 : 6

    function articleOpenHandler() {
      // articles height
      const article = this.parentElement.parentElement.querySelectorAll('.article')
      const articles = this.parentElement.parentElement.querySelectorAll('.articles')
      const url = this.style.backgroundImage.slice(5, this.style.backgroundImage.length - 2)
      const img = document.createElement('img')
      img.setAttribute('src', url)
      console.log(img, this);
      const html = document.documentElement
      let flex
      const imgWidth = img.width ? img.width : 500
      const imgHeight = img.height ? img.height : 500
      if (artNum > 2) {
        flex = imgWidth > 2 * imgHeight ? 20 : imgWidth > imgHeight ? 10 : 5
      } else {
        flex = 10
      }
      const thisArticleLength = this.parentElement.querySelectorAll('.article').length
      const height = (imgHeight / imgWidth) * this.parentElement.offsetWidth / (thisArticleLength + ( flex - 1 )) * flex
      html.style.setProperty('--article-flex', `${flex}`)
      html.style.setProperty('--articles-height', `${height}px`)

      if(this.classList.contains('active')) {
        this.classList.remove('active')
        this.parentElement.classList.remove('active')
        return;
      }

      article.forEach(article => {
        article.classList.remove('active')
      })

      articles.forEach(articles => {
        if (articles !== this.parentElement) {
          articles.classList.remove('active')
        }
      })
      this.classList.add('active')
      this.parentElement.classList.add('active')
    }
    
    function articleTransitionEnd(e) {
      if (e.propertyName.includes('opacity') &&  this.classList.contains('active')) {
        window.scrollTo({
          top: this.parentElement.offsetTop,
          behavior: 'smooth'
        });
      }
      totalHeight = wrap.scrollHeight
    }

    function renderData(arr, category = '圖片') {
      shipiArticles.innerHTML = '';
      const imgArr = arr.filter(img =>  img.category.includes(category) ? img.category.includes(category) : img.title.includes(category))
      
      imgArr.forEach((img, i) => {
        let count = Math.floor(i / artNum)
        if ((i + 1) % artNum === 1) {
          const articles = document.createElement('div')
          articles.setAttribute('class', 'articles')
          shipiArticles.appendChild(articles)
        }        
        const articles = document.querySelectorAll('.articles')
        const article = document.createElement('div')
        article.setAttribute('class', 'article')
        article.setAttribute('style', `background-image: url(${img.imageUrl})`)
        articles[count].appendChild(article)
        
        // imgur 圖片刷新
        // const imgHTML = document.createElement('img')
        // imgHTML.setAttribute('src', img.imageUrl)
        // imgHTML.setAttribute('referrerpolicy', 'no-referrer')
        // articles[count].appendChild(imgHTML)
      })
      const article = document.querySelectorAll('.article')
      article.forEach(article => article.addEventListener('click', articleOpenHandler));
      article.forEach(article => article.addEventListener('transitionend', articleTransitionEnd));
    }

    function categoryMenuHandler(e) {
      e.preventDefault();
      if (categoryNow === this.dataset.category) return;
      categoryNow = this.dataset.category
      localStorage.setItem('categoryNow', categoryNow)
      renderData(articleArr, categoryNow)
      window.scrollTo({
        top: shipiArticles.offsetTop,
        behavior: 'smooth'
      })
    }

    function categoryMenuBtnHandler() {
      this.classList.toggle('open')
      categoryMenuMobile.classList.toggle('open')
    }

    function closeCategoryMenu() {
      categoryMenuMobile.classList.remove('open')
      categoryMenuBtnMobile.classList.remove('open')
    }

    categoryMenuMobile.querySelectorAll('li a').forEach(a => {
      a.addEventListener('click', closeCategoryMenu)
    })

    categoryMenu.querySelectorAll('a').forEach(article => article.addEventListener('click', categoryMenuHandler));
    categoryMenuMobile.querySelectorAll('a').forEach(article => article.addEventListener('click', categoryMenuHandler));
    categoryMenuBtnMobile.addEventListener('click', categoryMenuBtnHandler)
    articleNotice.addEventListener('click', () => {
      articleNotice.classList.remove('active')
    })
    const url = `https://vue3-course-api.hexschool.io/api/shipi-api/products/all`
    axios.get(url)
      .then(res => {
        articleArr = res.data.products.reverse();
        renderData(articleArr, categoryNow)
        totalHeight = wrap.scrollHeight
      })
  }
})()