;(function(){
  AOS.init()

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
  
  let articleArr = [
    {
      category: '漫畫',
      title: '蛇皮',
      imgUrl: ['https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/328899969_901600530874710_5918151147800716995_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=HSrbIDzaElMAX8Pyed2&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAnkr5LRQ8eTOryLpxtMwUmveilBKgVO1y1eE8nuD5_Kw&oe=63E94B1B', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/328711313_1408979062974584_4098751369086345964_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=50_QF87CUrkAX_plx3c&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBIwNOdkjVS0nFVR7acsfEf0y5wwP8ThUjZOQ1YIVfPrw&oe=63EAB822', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/328899546_572698177800862_6459025933620881447_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=aAfhLxXISnIAX-0SZno&_nc_oc=AQk3-v_iyo3BUi5XCpvcXiD41Ro5FcmajLMy6vPFXCNS3g4kRwuV8NOfY-tGEoPh3aM&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDgOgtPkhREB-yXCCkO6S8KfLdhVR2Tbyhlhy1pM1Fs2g&oe=63E96E72', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/328869761_652452333301132_4288795960410631534_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=QmlJyfbWqfgAX9xbGMB&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCzz4mk9VELafgFV48OfznS9t1PMY5S6q-e2nXBoaPv1g&oe=63E9119D', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/328842276_404976135184766_597575381099024895_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=d18zKPJKPs8AX84xm9P&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDarfSwugXKLYeTMkUNtL8Taj4KoXoSDw5NT8Tyk7q5bg&oe=63EA3681', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/328836099_524025073131125_3344583708982085138_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=nMz4UdBjZXgAX_89oOl&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfD8kRKUYlZYHEWH8VzRlJsLUO4m8-VZmARmxhRN_1N2Lg&oe=63E91DB3'],
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/322602165_1570778160103457_1629014855111028960_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=84aocV3Ti-cAX_co_z0&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfB6Gfw386yP47qt4RCzS-T_v_qoewPtULQuBTEi3i5BWg&oe=63EA2405'
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/323894348_469600378703279_1388461852465604538_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=cz6JHzRcJ4gAX9GiHdo&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfA7JmlXEW325jrwDE10rRYUJcc0Ppperramzj4_nmoVeQ&oe=63E9F32A',
    },
    {
      category: '右手教學',
      title: '不負責任布料臨摹分享',
      imgUrl: [
        'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/322930994_558223965872671_4510602146467749448_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=QpMPPVBwY7MAX9UliJT&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCcAsxB1j-1wuMw7UxDfZpAmvKxRWLGX6v88rH-DASLlQ&oe=63EA9F21', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/322634330_583522680269250_534398413635229972_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=vHp5-uxdbd4AX_Yc26k&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAg85dspoVejthXhp2v5NuQCXGhdWHZ-WqIKbLFDmIgBA&oe=63EA8520', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/323287741_1669838523418767_1755067016850600_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=rpz8Wgy92bkAX9Ro2jh&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDz0kZ2-uNxq4L9FraxanrawMywMAG1ujm-qC2HF-l7cw&oe=63EA7BD3', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/322732609_5558694270914901_5606629646410942575_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=sbmQ3F8Mw9IAX8Ei01w&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDN-UzB2v_j4YrY6Ylk8DtBdGE364kzjBzhtiQTPxrjqA&oe=63EADBE9', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/322708077_621381159744118_3328303327142523786_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=MAqYHe5m8TsAX_TphBQ&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBHxT5WNvH4EPQtKAPwFj4juHWX36H--hMhp8ZLRG5Xhw&oe=63EABC7E', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/323285328_1223530371853353_797058452239650974_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=UhyPnPizU-cAX-ZGQ1N&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCWBwvPbjYdzJtjwqwmmw28LwOQ81ZX0hVy20FaK1eH9w&oe=63E99584', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/322940597_1183316382589786_434477080024149547_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=IE3h5D_M9rwAX9A2m_7&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCQPWMfywR5Yw76xzJg6bz694dCoQmphg-wZQTMmMarUg&oe=63EA4197', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/322660504_549455943780426_2668535310582693022_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=jQ0LuPL4E80AX_LxVWx&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfAbRafuqb68_iPE6724gSgjQ456VTaYb8VC2foEyfOY4w&oe=63EA0C79', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/322902591_469141865409717_5724968482799259984_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=akMcEMAXn54AX-7RY0N&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCjsr4QPK5MgH5NcwNs7SoXGIPgNOT3hcCielR9d41C1Q&oe=63E93B54', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/322711004_1800126133685525_7766158920052370350_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=LNLkYDZI-hQAX9h2f4G&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDPU--nGmA3cKg13-GmqgjgcrAbOU9nui1eyqg06ZCdgA&oe=63EADD55', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/322583036_546851100695033_7906218027550116002_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=h579-PPzeGYAX-2Sa6i&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfACnvfJpK9ilN_qVUHwTclO4UzjCzMz-ewBGnYoT3bfhg&oe=63EAECA3'
      ],
    },
    {
      category: '四格漫畫',
      title: '蛇皮',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/322365214_3421069138177943_6358582787181135340_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=8h4WBYWcwwgAX9ULSQL&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfA548oULAfwe4zf-AZq6KauugmwLig4Wvcw6wQ06Vyxmg&oe=63EA1247',
    },
    {
      category: '四格漫畫',
      title: '聖誕',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/322133373_2313451688832849_1856994463018240434_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=zDf15QymRHwAX8R4RBQ&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfA1zFG_PZ7boLI26nqYVIuvgcaCaABvY8HbLup9Lx9U_Q&oe=63E9F1A0',
    },
    {
      category: '四格漫畫',
      title: '蛇皮',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/320574340_892542085094901_5410143281010568130_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=7KCdvz87rkwAX8gxIHO&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfANKne_U4LxH4FZ59T0PJYh09bOgeBp0ig8_Snua7nZhA&oe=63EABBA0',
    },
    {
      category: '其他',
      title: '鏈鋸人/姬野',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/318498695_5942676115753387_4929143959200497934_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=SW-BZX_fmVoAX_EsU80&_nc_oc=AQmGAK_GMwqnle-RRfVlJyOhJ_U048kyTME9TpFWMPvH1s5AdypE9XycNjI6rNT8QNI&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBwMc4tvbvnzB6LFfIVieZ24hj94H7eu8zoYM4qKfeHhg&oe=63E97F3B',
    },
    {
      category: '四格漫畫',
      title: '蛇皮',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/316806503_729276155223138_3717992504015172114_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=d1uFcHQgd-gAX8f7KiU&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAyNp8_zuYyG_WiJCPDOff6a7FFiG4gs_Z4gtftWLpXdQ&oe=63E9190B',
    },
    {
      category: '蛇皮',
      title: '蛇皮插圖',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/312090984_5837808786240121_980460438274262076_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=3XlG9FFqlNUAX9MBsbi&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCY4x3tG9CkCAwSwXzZtvrv1MxPeYFFIs1gOhYAaiv8-Q&oe=63E938C4',
    },
    {
      category: '四格漫畫',
      title: '萬聖節',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/312411826_5835523999801933_6186073231096252941_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=d57SsZbHhBMAX_hp-3Q&_nc_oc=AQm1FPW7abLEO-bdyj78FVevdw6IItuAe9RdQkpnoRcAxUSLxngUKFp_RNDE_Q2B0SM&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCj7SlQPp43Cq8BjyNh0RBbLpgIlYczSi6Yo089QSircQ&oe=63E9DF35',
    },
    {
      category: '工商設計',
      title: '最後指令',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/312972567_5824687464218920_772572840878901932_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=BMMuA5YGDBEAX8jR2VT&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCeaFH6IiSnuh2BUWogelZ-T8ENusP3QmtjqbQVBiYfRA&oe=63EAAC91',
    },
    {
      category: '四格漫畫',
      title: '鏈鋸人',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/309438327_5784514934902840_8505153006517984376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=1cekKvCEJL8AX_mvcaX&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBxP9_EAsAb4ICjEF-ETqWoQd4MbCAH_7daHJB4VVdxYg&oe=63E9D3CF',
    },
    {
      category: '漫畫',
      title: '電馭叛客',
      imgUrl: ['https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/308988980_5778180892202911_8705323624303911076_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=7Y4YsaNzqaYAX8vpcZY&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfB8r3b78Wm5OK33vHfPfgqaJnHJP7FSUEwDgnIIQ97lrw&oe=63EC3422', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/311064393_5778180592202941_5617562703152147983_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=wJMhyZAV_YkAX_hyHri&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfD-i0xUKXm2v5epnxHjV0S5Qp1huequb9b31NT0vNJFTg&oe=63EC4FB2', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/309818124_5778181298869537_3331936785197563285_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=U_mwGyY_n_AAX-j8CMo&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDzfqayxGK5E5OvVHiB6TkAccHm8zOqErKEiDRJZGatMw&oe=63EBBCCC', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/309390465_5778181132202887_2087604236706658034_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=uUXC-ipYxPEAX837rWa&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAWeazaVUafL-ASt9SI_jXREHmEIIBm-oyf5jMIRbTyig&oe=63EAFA4B', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/309948605_5778181665536167_4484118596262639663_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MuOnd9gmNIEAX9W8sXW&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCfmX49yztuSUBzDxB_PbThuclNJgUMMETbgl2uiR59Pw&oe=63EB4BFA', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/311011790_5778181158869551_8260871031848969594_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=P1BgbARa-rQAX8TxLqB&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDz_dYrLOshyXWNsHhmjWClM4DFE4i8Ax3S69RYZvUPgA&oe=63EB25B5', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/310487921_5778181535536180_8444874987421128090_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=rIiAgqFXtT0AX8iwGzZ&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBeNcnPgJBWWE6fqLWVB551CkfvlXS0kEFJMHg-AKXZiA&oe=63EB6B25', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/309243045_5778182522202748_5285821568535274286_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=PDuDvy7n6hYAX9YKzue&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDWXTgqwClWQ_PRmYujFTklAqJ_7Mx0MTVYtSUgBU6Abg&oe=63EC9726', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/309424234_5778183922202608_1820010544827066314_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=GmEw9UtO8gcAX-KCPrZ&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBf5EcgKqIhzd4ACWbYBa0OhO2BhIiS8-vblnS1qViXMA&oe=63EB3444', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/310116548_5778182585536075_5162046114375998368_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=0btf-YW-pQUAX8ZyYAc&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBp4HaEfr8TGq5yfUeoH6OOH5USYG7WC5rJap7tGhyeWg&oe=63EBE9C9', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/310061202_5778182838869383_2948681475872020875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=IAAOupQ4eXMAX-QKfKY&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfB2dBsaP2x-3duqvlkht6HdwehD0FCbWdVQ3Cb_o-tOHg&oe=63EBFBC3', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/310057420_5778183175536016_2647770725648208402_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=MijnPNs15AoAX8eOZAH&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCNI1cycKJ6ayCooC_mZI8q9n0XF2EcYuupBW_uVqT0xg&oe=63EB50EE', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/309981646_5778183358869331_7288273493981880571_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=hHF01YQyl1kAX_XiJmp&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAlZkzCWzkUhkv4SDEutJ2dwHYemr3ycAo_eYuhdOOBMQ&oe=63EBCAEE', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/311566060_5778183545535979_3875048877481919922_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=XempE3xKYFgAX-7FUZA&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDl8IgyNIf-boU1zenp2G-Qc4W0Z2E1jyEcW4ioOR0EXQ&oe=63ECBDD9', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/310340654_5778184308869236_2297621850925279642_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=zVFUlVqyqBwAX_VedLY&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfCfTgcNjrWXhKEOow3WQO1eBibhzIg2fZGYe1dXoqo29g&oe=63EC4B28', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/309446717_5778188082202192_3382793607775283943_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=-VG03tN8neMAX9AHI-o&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDMaWLKRRoqJaD4Z6pbTIjUT_aAC7FXe89wjWiXP0S1Sg&oe=63EAEA6B', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/307484860_5778184755535858_6951495415678640814_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=jptkC_mNbZYAX9KlZRQ&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAIH6LCpbiWMNrxlM89pmr1Fq8mQfKy-W1EAi-1cF46KQ&oe=63EC008C', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/310910956_5778185018869165_8572686810637579006_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=NRfwLuh-R5sAX-nVIeS&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDPUXJHHB5OjDJeLa-l0-Abt-nDRfZ6p54polqAhj96jQ&oe=63EBE560', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/309495472_5778184595535874_6960463788696275480_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=AVYnwQoZmKAAX-p_ECq&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBvdLRRJLKyJxmE9DrWmr3a9Dp1vfd4b77NXgDL2iq10Q&oe=63EBE1C6', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/308988980_5778184958869171_2251707945650188109_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=9O9LN_ks49sAX8QmawP&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDRR5eFK161CcSVQMDFAtLNVTB7YzO3tgghWAHuzF1FCA&oe=63ECAAE2', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/310470263_5778186548869012_1108674210511047805_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=s-MqMt6NL74AX-7nW_z&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAGFeQkZN8XrgT2FmrE9NlS7ufO1M3L0do0OL8LRaNm0w&oe=63EBCE38']
    },
    {
      category: '漫畫',
      title: '電馭叛客',
      imgUrl: ['https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/309944230_5744056295615371_2803771078234115815_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=f1yQRoNevzsAX_Dqszn&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDYhYF1YOznQu2W8HghA6PYzPx8GK9yrkMtC5YwDVwj_Q&oe=63EB98F6', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/308629101_5744057152281952_8717760146062000444_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=NMtLQXoj78sAX8uIgm4&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfD7q9RvKg7IguAGVGFEnluv4vpeC7d48dsvDaN7Y2Zw3g&oe=63EB8925', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/307484311_5744057268948607_775407140957857190_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=wBhjbosfmsUAX__DJod&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAGYadBbfeFBwqe05TNFN1DdrYNNH-9JCTAN5XV5-7MGQ&oe=63EC2859', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/310238217_5744056518948682_8618525365822126744_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=vnOIJGrHSeEAX8cEO19&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDfwt8P8bcwE1yyZdnTwc0RphhqJyAOCJP_tYtsWXM5JA&oe=63EB5B26', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/309261125_5744057225615278_5834709188718496930_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Z7H_5iONf3EAX9aWtyl&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfAiZOcUxTitUR3e1G6KlV6pNJ6iYrSEq7MUu4MnDAGtQA&oe=63ECA931', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/307682813_5744057065615294_1957048990820836353_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=0KwGsOLvTjYAX-ulCwi&_nc_oc=AQnBsx1_GNz4pbIsGsuqMag7AkqmT-LgIcf8bodpF1Hk62ch4IhMN9VJOnBGCL5xRoU&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfApiYScLvvi5Cbwf-vLzP8hfqKyA_ITYGLx36kJXvRVMg&oe=63EB7737', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/309271943_5744057498948584_3478332163467898540_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=O4j-e0WmskcAX_Uqklc&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCMtWmbBTxCbVPAY-qhi1K0k8Tgy5asf6o3iQ0jgpImBQ&oe=63EAFC0C', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/308193406_5744058332281834_2840555210561205887_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=4PZE__WwLfYAX9UUyuX&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCS_BCkoqNTs_bxaRYhsq-WRFlXZpGjrdS7UiWFzB3SvQ&oe=63EC4B7F', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/309510140_5744057822281885_3295683166265703675_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=TIGgE1nPPKAAX9EcfX1&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBe_itHe9_utwXyO7LsRoiDEWDLjrmJ_GD9lYRFabSaIw&oe=63EAF98F', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/307959510_5744084105612590_2814720962121421599_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=A3rPsCAJHXwAX81sPqr&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfC0N5ZXhKNMuyDp2nxDfEavtIbYOqeSz1Z5QGM-4YZwdw&oe=63ECA0A6', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/307451667_5744057518948582_2372437606423562520_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=Pq5_pw-OtP8AX8Me8Vo&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfB1pfEusCUPATpw1VtdTVi6R6RgEXF189km7h7n8Jhkog&oe=63ECA777', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/309670134_5744058758948458_2040991475794538670_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=cPwQMabyRx8AX-84AQz&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDeqHRIJ6c50fONxWabYarICPbSR_SUwXWIQ3oiPgfMjw&oe=63EC1414', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/307690853_5744058178948516_3271304449617423179_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=m8K8pRBzR7wAX-snubj&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAZdPWPIyzm7rvaJEd9PrRbiNeK_VYOftw9zXtLNmrvcA&oe=63ECA039', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/307373555_5744058538948480_7502815090882507384_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=P5DB9VLOWAYAX-KVkqK&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDT-wf4HY3D898A5SZ47ScjcmGTkihYgPY8r62Uy4bXaQ&oe=63EC5D3E', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/307939445_5744057672281900_6329510486042918132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=hN-Fg3SP_JIAX9CxAVC&_nc_oc=AQlD1yPt1YK-fWJatXdCjUTOF8K_BvnK5or8Bk_kdX1VWeNc6jcLTmtUekhjwFXfR24&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCz9osUTeJ9psl4YQTvnQNF64yTWpykhAzH56OkW6lZXw&oe=63EBB211']
    },
    {
      category: '四格漫畫',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/305961597_5672614862759515_2649059482901971992_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=6O8NC6feL4sAX-eTM4E&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDXlK5OkhcPh-YOLTPVda2qDCnSGBQ2ZU5PAlRdYbwbtg&oe=63E90462',
    },
    {
      category: '漫畫',
      title: '撒旦&耶穌',
      imgUrl: ['https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/299790798_5627372637283738_880398023303619803_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=tkcQhKOlv3UAX8sG7vz&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDM-GrQGxlbnXQ0KfPi46Yf9Ld2t5FgjHwFS-YLkPCnXA&oe=63EBFF1C', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/300374675_5627372733950395_8379035724510183917_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=X20nBBOfh4EAX8OImAL&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBa17Y_WJAq3JckyDAS4m0XzXLnqzJTB1SvxwOAvpmSDg&oe=63EC73CE', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/299970362_5627372917283710_719608587396005409_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=OLK7nNdYeg8AX82Wzqd&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfCygEIzA6WrCLR-jj1s6_m_4QTQ5eDWZXXrnjF_fFUpqw&oe=63EB50BA', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/300368595_5627373077283694_6681471842145445050_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=Fwq1lsDdKx0AX9HyBQe&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfB6GPbgosqLqz21s9Jrm86P7bCeshVGiuhzZ0idMLFPqw&oe=63EB9532', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/299127175_5627373240617011_2993589228017963912_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=9WIa2Pd9inkAX-4eFkC&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAMn7HCkJRBaHFP_miYWuwWEus7eW1rr-NFDUMbh9rbGA&oe=63EC1468', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/300429140_5627373400616995_4700399459542840636_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=nomkGSoJOwQAX_YYFc4&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAwnd6r_rZW5gRS9XculIr9Cmc9NTBN2iBB0jW_qNah9A&oe=63EB9A48']
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/299513363_5616555405032128_3679342530037578206_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MnFgVJ0IbXUAX8rGgXh&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBBh5x5ZxrFFLNKYj2FrOtnamyBcuHx9dW9ATNspfn2VA&oe=63EAF944',
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/300007874_5616555288365473_1942085601407042522_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=onjx1WIv5xAAX-JSKJA&_nc_oc=AQnU8E9xS9NgF1IKojjRMpxwSFFLLkH4UCP3VfO70E_MSL8EUHx0vfvgo3h8B8hJvjw&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBygBvOwLZyuX96tj9R7qE10Q0mMfT_qrcw2sU1NF2VcQ&oe=63EC32DF',
    },
    {
      category: '蛇皮',
      title: '蛇皮插圖',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/298052953_5585937608093908_4985388313491956496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=etcVETwkoIUAX9P8qKh&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBZ9jlUGu3mipe2MxahS45h_W5esoBASlk_5KMcU-6nFA&oe=63EC28BA',
    },
    {
      category: '其他',
      title: '貓',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/296299200_5573211526033183_960403030524685418_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=gLnJZ2gEezEAX8Dg8Tl&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDG24-ddjrjhWkaaBpEmxbzPUyjmJDqBmmlu2UIOZTwQQ&oe=63EB9375',
    },
    {
      category: '四格漫畫',
      title: '貓',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/295860449_5567484939939175_4428347724725533091_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=iGDCp44h_-YAX-YAzQl&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDkPgB-rNAOx2T1cPP0ZTvyH3LkZAY8Mb08N8Vm3ATuaQ&oe=63EB08FF',
    },
    {
      category: '四格漫畫',
      title: '蛇皮',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/296128231_5562642580423411_880562018472586446_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=fyosFOpYs3QAX9XI7Bw&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAbAzGfGjXV4shocAEh9wafR66cuLxw9rq7aUZW_bMU1w&oe=63EC82C8',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/296373196_5559998277354508_3607839121016835469_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=SE94aJceMA0AX__qg1M&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfAGii7UZ5JI5Qtinx3C6RlKs8xeUm0rC4ac_wHOW50QXg&oe=63ECA5F9',
    },
    {
      category: '其他',
      title: '蛇皮創作漫畫',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/295616514_5559995367354799_6019272398367866496_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=JS5iTiO2ROEAX8nbd58&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfD_shNfYdjFde7PTeUAQkSLgLKImH3WC_YL3P6p34oASg&oe=63EB9E3F',
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/296111085_5556907877663548_8265855183058570071_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=0F94tsNqTIcAX8VenOv&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCUXa-fv5IaBZuUN41vbAs0o1yKl7pB_OlBPPkMx4UQig&oe=63ECB6C4',
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/295705846_5556907767663559_5702917424040357602_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=MKq3yWCjPLsAX9F-N1m&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDcC2E0T5kCgFHvMphslgne9GMr-cBH_hQlALIbY09Z1w&oe=63EC2BBD',
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/295985724_5556907657663570_5153723005528396914_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=iN5OhvYhsXMAX9pCnJv&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDeSq7mVYiOaCm1Sk-1uYCM2h_tdWI5oeVjlkVx2Fdo6A&oe=63EC0BC8',
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/295866088_5556907524330250_5719313275689954151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=S6LwIYlA6XsAX_rqRB9&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDGa335brvKVeGlWS-PTnJu8ifJ7CjAyNMubUyhAXGsrQ&oe=63EBB70B',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/293741909_5532623963425273_6071074081717341184_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=FA8ZShB2xCwAX-X7mpI&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfA4Lg0HTwcrGjsa9WnOLW-FGszhvE3fzwO2e51tg7__Nw&oe=63EB3469',
    },
    {
      category: '漫畫',
      title: '擺攤a蛇皮',
      imgUrl: ['https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/294141236_5527784470575889_4243492509650011056_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=eb9KOZzI598AX_PMn59&_nc_oc=AQkiFV49UWTSw_7R8JMauLxYrHjaKn8eBM-X7QBpNqUtwok5IIcIgGMF4Jlu4Y9Yndw&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfC1sgqELFvxIPkXdL5mlt39a8CFyP4Bpt471pWrZvxsTg&oe=63EC0310', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/294006712_5527784610575875_2986585989658433783_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=k-3Vma6DXQ0AX9gCVvH&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDgSE6uDsdMyEp2uisyLB58vxKh16W0riNnYQf0FSA_MQ&oe=63EBB71C', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/294335862_5527784837242519_5859801697389355227_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=YbFgRcVk1koAX8Z31fY&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBzepoqTfr4yHdgQUkaXqDyscOkNFyRldwvhm-30oVzFw&oe=63EC28CD'],
    },
    {
      category: '其他',
      title: '三鷹朝X田中脊隨劍',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/293240821_5517421914945478_2076812517491912110_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=xszqNHDO4SkAX8TRGhs&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfD3loKHvwkW7CC86ZYd-rROGQAHYWFRP1nFyWEmZizGZQ&oe=63ECD6C2',
    },
    {
      category: '漫畫',
      title: '蛇皮與智齒',
      imgUrl: ['https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/291247685_5497061293648207_7994144666771061843_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=qngqESC29tcAX-nX9lC&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCzBZUdoEPizT8rEhpHokc43dz28CNGI5GfRPLp8-FRRw&oe=63EBE7CA', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/291605039_5497062443648092_3270454106743080268_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=aHA9yg_fjyAAX9YOcyR&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBxcl7rd-poZaqJIaIRrlncn6lqYPp4HvVX6B_7wUskIA&oe=63ECD119'],
    },
    {
      category: '漫畫',
      title: '吸盤掛勾',
      imgUrl: ['https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/291359639_5491612674193069_1268147467614287290_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=oZQg8WlpNUgAX8iviCK&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfABcUd4-n5KCzNiIG17ffHJgXB6j2MiMIqG2e1OYf8gKw&oe=63EBDF67', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/292275425_5491612654193071_1063947965595341701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=oINMEk5_kKIAX8UBFZy&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAR-C-HTGGsbTFkUPRh0KeX-X2QXU_yqhqsGNmqednuIA&oe=63EAF6ED', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/290446330_5491612850859718_6508018406498341491_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=tD7oa0JGE8YAX_KC2aB&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAzntUBLnRo--25nRgns9YXXiyhTcBM4XMZ3_PbRVEjrg&oe=63EBB2AA', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/290810887_5491613390859664_4718119658609621223_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=YRGLfSZ9KIMAX_jkl6S&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfC_lwQic1iieJNqKLeL3F78yQOTpmrm3jNeo4k7xFvc1w&oe=63EC4FF7', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/291212250_5491613707526299_4900694774581066014_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=LUH_g4zzRvYAX8Vm08q&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfARI6Y7s6yVnzPQtRx9vMPpUqb8bIGKLCW84nYlLjramw&oe=63EBF270', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/292309565_5491613954192941_7744357120605192814_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=Lho_lIC4gAEAX-bqKXQ&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDcoJDKrAsVY_flR1xdEe5MzWODTlPZlaBYfQK-bHgK1A&oe=63EC349D'],
    },
    {
      category: '四格漫畫',
      title: '吸盤掛勾',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/291914402_5486403671380636_5407529674034017836_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=s1GWLQqgjc8AX-lPt9T&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfATmAJpkOFXruFOr7xqf54IhCNbcwarrBgkXvJCD3xssg&oe=63ECA90B',
    },
    {
      category: '四格漫畫',
      title: '黑吸盤掛勾',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/290372459_5481007215253615_8332940190756690556_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=XLe6VuR3VaAAX_8OGnt&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfC8MgJtCqOjsPmEdMu_ejrc7hIN1WzOh2T0arplZUCvNQ&oe=63EBEC01',
    },
    {
      category: '四格漫畫',
      title: '吸盤掛勾',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/289802678_5469276143093389_2524857366641600348_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=3AUQkb2PZusAX8dCVQm&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfD6WAVy7V3RZlL3iEyP1TJB-OQO4Mmxh3OsUuQx9NMPwQ&oe=63ECDE2B',
    },
    {
      category: '左手',
      title: '左手步驟圖',
      imgUrl: ['https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.6435-9/198228386_4333415680012780_7555116586878115658_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=XFFNHltEmyYAX-0pajR&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDB7IbCSW6sroSc34HLjmmYB9kCnpBHqMoSAPkaVkRtxQ&oe=640E592A', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.6435-9/201776023_4333415730012775_8903031124563956684_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Eqyc7S0hPnwAX-cyy8q&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBrm2gJUgIBQkcADaXMeR1eMDpHpr5XK4yVGw0HkJCoiQ&oe=640E8069', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.6435-9/198973210_4333415770012771_747591778161218646_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=bRHZCkmduo0AX9w_sVd&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBC9QspdChfAuZhKxFKlD5k-mqKkxkYu8wm_VLAxAeElw&oe=640E512F', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.6435-9/202758376_4333415840012764_7447903531064319333_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=mXF8TLoivYQAX9LbRaa&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDTWS39vCUflHOpkI_8SVQsgB_ZinxG7SLQ1H8_gz91hw&oe=640E50D8', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.6435-9/203663633_4333415893346092_2129799698373831032_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=z3Uqo0N4jBIAX-WeTu_&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfCpeJLlaFtMRb_cojIrj4GUU-0P8Svb_EgNX8rUSDONpA&oe=640E762E', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.6435-9/200818793_4333415930012755_8715930482710802462_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=Z5Lf5AcAl0MAX_feUko&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCEsM2FOqhkq5Vv11egq-w-xWuACzlcEU1Aihai25bKqw&oe=640E6C92', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.6435-9/209256237_4333416016679413_7284689429849258947_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=6_OS1IDWIeIAX8A63HK&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfD2iQokCeSYDiF-ck2hLGcpdlZJKJeuecZGYaiOWZ0kFw&oe=640E7016', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.6435-9/205402304_4333416000012748_7429771214377297503_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=4ITgEBg-NlkAX-ha33i&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAZJX3AFZP-xsK-DNgKArojsVz4zgeOCOiDfJe0FCTnNQ&oe=640E77E3', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.6435-9/202003483_4333416046679410_3875377900378191285_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=pXlPcGRqiMwAX8GJsqY&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfAeQBn-G2besGuYemCbjCjRkOsuPHz4xgLlpij6ny2aWw&oe=640E788B', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.6435-9/209509238_4333416173346064_5382329671751975226_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=YJJDXhDIUdcAX-Fd0II&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBJp6m3fGFtvQdHCRe-TLuuL7FROdow1pFUGEgUfdlEVQ&oe=640E6157', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.6435-9/208423310_4333415793346102_8487735541855381375_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=MT5-Sx1Fv2kAX8pYifz&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfC0BDfackgtuhAf9WwHxMlcArUUAnE_Abew5Rx2ZKY2FA&oe=640E8738'],
    },
    {
      category: '蛇皮',
      title: '蛇皮x蛇皮',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/287957075_5438518116169192_7946036794906851003_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=VSSrsfxRWGgAX-WBXkf&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDmh0D1R3sAxn_3S6rpONeDNYQgVb1pjHI6BHkL7eLggg&oe=63EBCB06',
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/285764622_5408025625885108_1490286421892211796_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=-tcjcWn_NbEAX9j7QJI&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCaNIQ7HwSYdEQyFK0Z6P0rM_oLm6hLBHPhTsqtz2CMtA&oe=63ECC707',
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/284102983_5400379076649763_2592589673101448194_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=jwRB7vZUaC4AX-OhI0-&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDhYKco0eeBWuRaREZi6Lp54fCcl4SizfIwYRcaLszi9A&oe=63EC7D38',
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/281736779_5367337373287267_8280526257605906029_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=zSOip1hOtyQAX-O_uXQ&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBwE-EmCH3e-bUR1qRJHQmBd4Jmnm2Egfnh1bIris-WJg&oe=63EC7A83',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/280753983_5357481057606232_9215795032905142348_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=vAwQQ-yybP8AX9Mvqo9&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCDHF9Kf8OBUJ_4Cfdy8LKlIgKjnH4kYvNdbQfh8qXPmQ&oe=63EB8237',
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/281187225_5346069608747377_6546128985686514383_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=9DhvJCjWS5MAX8dqAbq&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfB82ZAaB2mLzTiK6D_a7xMYX8ucUIMNjyV_S1mRsBWTEg&oe=63EAFC37',
    },
    {
      category: '漫畫',
      title: '蛇皮',
      imgUrl: ['https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/280558767_5340145392673132_184597549904835250_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=PmqpG1gLBaQAX9-tnGt&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfA6lBqt1mfNvWtv6WToYgobWDjGiAT7D4PFJxGnRLUxow&oe=63EBCFDD', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/280372429_5340158516005153_6059789533428995362_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=sy2Fq1viVB8AX-YrUth&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCILQGcXuuFB64iTzAA-bLaaxY-NyImf0d8P5NX7cj2NA&oe=63EB2AA4'],
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/280137913_5328966250457713_2242406744316112181_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=b9PP9XbyuXEAX_ifM5j&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCF1_IzEE8cNLfrIV1a6DPz1UvALuIpEvkOTbFahm-fMw&oe=63EB4BED',
    },
    {
      category: '漫畫',
      title: '蛇皮',
      imgUrl: ['https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/279390404_5300607433293595_2329374194970603019_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=Smhx6S1VTjkAX_PuCEt&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBpC3zf0_AB0WESDnDOyuV5s-5LGxGIAv0IB1ArAV-t8w&oe=63EB3769', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/279085422_5300607429960262_6148511861161974932_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=naUfPUtAcCAAX9qeMpw&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAxwCR6k6eq01cANIW01Qaa5f0y4IWQhp5UiLlJWTXpNg&oe=63EB5CCB', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/279522519_5300607563293582_5496853957334232330_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=JRlQT6IkOQwAX-P4YDf&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfC3WwQdCL8a2ZEXzRnMRELZvroR4qgk7QYV9CVrQgdiyA&oe=63EB0BE0', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/279430585_5300607566626915_8357548581565383797_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=AVwxGSmKPUIAX-LmjLf&_nc_oc=AQmMDRCAyNcvVpjuBIFnnCSYrPYsP1hmVM15YgSZINVsIwz-x0hjyiLN6p17YiVv_OQ&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAUa_BYO48gVdDbiEPb-u9sMbhs7S4re0ayxWS_uXmtbA&oe=63EB52EF'],
    },
    {
      category: '漫畫',
      title: '蛇皮',
      imgUrl: ['https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/279063880_5299142976773374_2855283978799199410_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=A_ncCaEIgD0AX-j9rlV&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDwPoyUpgMd4HW0Gx-XgjP6b7X6yvEHvUc1B0rX04Aarw&oe=63EBFB94', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/279088129_5299143426773329_7794622876455864738_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=koMAcANzyQwAX_u3hZR&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDBLx5YMJevVcOBQ-hW8Dylj9H3CJ3SDLKWA7SbyGC-vw&oe=63EC4942', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/279530203_5299144403439898_771520986479849207_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=Zye6Iy0MQ8MAX9Ldae3&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBSOCcnfqDFFKpI8XRuqm6dbEyOc8qM-CZYMKB7neU5Rg&oe=63EB9EF7', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/279280862_5299145440106461_5897270985153262409_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=09_ODHRv3gQAX9uCiVI&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfCzGHIBoAmfd0dtTtCq5azxS8D0W2WZXam70Y4YXIZyWQ&oe=63ECDD66', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/279060644_5299145830106422_5982973779403800988_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=PHp7Q9J6fUYAX_lGhco&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAfQZK3ecK6UkqZPCAFtWTJVprV42VGgROlEBFO2HZ2kA&oe=63EBC42A'],
    },
    {
      category: '漫畫',
      title: 'kk魔法學院',
      imgUrl: ['https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/279036350_5297819380239067_8792977898102244945_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=219zKz1Zg3kAX8nXT0X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfABmFLpV7NkbkZjCIaqQWU44dIxMyR-iHA7D1ly8FY0lQ&oe=63EB7AE0', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/278994270_5297819710239034_4582145584830203931_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=pGx4lQd8Le0AX8UgqsF&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBx1jMv1SjrQv-zynGXO08S5XdPbqxaQsmunpSfEx85Dg&oe=63EC4F42', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/279035877_5298148836872788_6471997544461171484_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=D7Lfzn7GS30AX8FxN4Q&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBu1lE0Jnk3fison_pSeoKXn1OJzmGcS9i1OCnVODX0Cg&oe=63EBB8B4'],
    },
    {
      category: '漫畫',
      title: '蛇皮X右手',
      imgUrl: ['https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/278354412_5262723910415281_8451797621483617716_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=kI8BBdCyPwAAX9NyR1_&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDz9NVjcLb6t8pNl7YNXjNfd8uSYYzYZS3mxTQOjOM8Cg&oe=63EC9481', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/277782063_5262723923748613_1973055753259610286_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ApXsSY7J0pYAX8LJYQI&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfC9NJO7Xp2YI_MitG-NB0d-vP_2COCdxzxLAcEskFCB6w&oe=63EBF22B', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/278384090_5262724297081909_87869289765538552_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=lXVlAfCum1cAX95Yqm7&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCapjq2jYmSj-v63ttrlxTmIF-vmnCeCZkgzKnquAPvhQ&oe=63EB5436', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/278262295_5262724310415241_6492126021636899844_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=wHqwX9AwPaIAX9Cmakh&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBxj6HnEyw9OLk0IDc6hFgDCnITeS_79-U2aY2Q49vCGA&oe=63EB0DB8', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/277799200_5262724357081903_6960689609227602242_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=36OEaX8e7B8AX-_Jegu&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfA9tbcLFAsal07K53O2lmO4zEFEeCIdyBYW1Sn8wL1iIg&oe=63EB5819', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/277814578_5262724630415209_1616111820707780864_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=vgpKnhyJlQIAX_9yN1K&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCWofBsitNE5tiI55j9svpPtVgQfMywymGeq60cGQZPAw&oe=63EB6AC6'],
      draft: ['https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/277582360_5244214732266199_4586681029022535408_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=VY8SYRAQbyAAX9UoE7O&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfB7Cq2Y9sADXMT8IsZbMZhGbIQrNR9nhrRfgn-FCrUH5g&oe=63EC4789', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/277676304_5244214842266188_3398383797114855655_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=i1aoyNHSU20AX9zuigO&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfA4FDi5w1A17yYSsB_WJnrllML7LudkSVLh8S9FKApuiw&oe=63EB8313', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/277571103_5244214975599508_7239470298565411830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=pRVF34wzUxsAX9HS2Mt&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAJESPdkP5HqTozcHHItjXZmLantCkkT_EGJnyOUHHwqw&oe=63EBE687', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/277789212_5244215078932831_1237371970919337271_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=gWmo5kOxEyUAX93fG9V&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCv21UfmU8VOc_LBpqFh559w9i3xyCtUadoEnPsFHRf0g&oe=63ECCFBB', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/277571089_5244215298932809_8141797185856428149_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=YYOKEuPTjE8AX8kkgXu&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfC2ATakemmihpqzQpV446iPSfgYYj0n8bk6SqvCtki0WA&oe=63ECBBBC', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/277679981_5244215378932801_4977024495645902122_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=3QQUCiCGixAAX_32NlJ&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCF7z8lEqFT69gk5oQB2Fz_azTi_2YCYZa7pTMd5zhNMQ&oe=63EC8A8F']
    },
    {
      category: '蛇皮',
      title: '發光的乳頭',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/277537844_5222660404421632_8624222965980401705_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=DDTW1F49_ikAX8AVrN0&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfC4zmbH954mpBx-pOces33_3Y1xiVHg2eHgSMWa3PTX1g&oe=63EB17A9',
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/276990144_5207619195925753_10213856389053308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=4UU3N63HjF0AX-7AMP5&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBt5c-4slhRvJP8jIGZWWQwIYxFZmy6vA2AUxetTjjddQ&oe=63EBAEDF',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/276286243_5206888609332145_6973133273714969149_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=vi-qslKuz1QAX8Z-lJ1&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAVZnfIynZNhAe_yVj2FrbCrdqajWU2G66MjnBrhjIS8A&oe=63EB9FA5',
    },
    {
      category: '蛇皮',
      title: '蛇皮',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/276199055_5204891012865238_2276069334706916938_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=FD_aQGHY8r0AX_Z793x&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCzEmNbOC2JtF7K8_YiFSq3os3BSh7FfnhZ1l6pP2w2Hw&oe=63EB0CF8',
    },
    {
      category: '漫畫',
      title: '貓',
      imgUrl: ['https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/275864710_5185053561515650_7201330033304991128_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=eJoYmTd8jQEAX_6rPe7&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfAAyAhGdWVZxRbhNagcZCVR28mvVKfZ5lk4t9NukdnwEQ&oe=63EC6A1B', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/275934201_5185053868182286_6889438214687748988_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=aiNeg6LqJo8AX_6n8m-&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCspzsDdePQC1IpkByPR3Kjn3gKV14jXcZdSknGR1bACw&oe=63EB47CA', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/275948202_5185054271515579_40661170859065486_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ke_9DavpXPcAX_5gUAy&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBpss31IYzwuU9OOItl9VmISgQ1Ik_KLZP90Q0Sn0QshA&oe=63EC9F06', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/275943384_5185066918180981_1263930876323585565_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=DC5bBjs_NzgAX-8Mq6o&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfD3_V_GwWXAFhgwzgszm0WtExYokdRlMXtTWAfaVFtnwg&oe=63EB44B7', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/276040556_5185065401514466_5111341189695653112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=M6KeFoJuhzgAX-D4PWa&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAevUu0boLjUAhQvFDwgnJehAR6MwsSN3IUtvKNyehaTA&oe=63EBADF8', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/276049093_5185055251515481_7376010479358569881_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=-U24Q47fwKwAX8jbJm_&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAR8yG45Q4-HYc-D_VZeTc9N8z2eixMVcj97g6vHpxrNg&oe=63EC547F', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/276156969_5185055544848785_883256782665758522_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=TzIT28jekI0AX98nE5w&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfA-UIhX4bxwxowgsC6IWsp3v-vpFGBw-JW99FwqIgPEfg&oe=63EBA4DE', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/276027599_5185055968182076_8553455171842019628_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=2VRceiuaB8MAX9UXLo6&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCfix1PYKhFYz1B3h16q4NcJc_-nDwEDvvloRkqqBBLsw&oe=63EC1462', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/275838550_5185056264848713_1850453557477633062_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=_EWhmu93WrAAX9k9Rxq&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfCNcpccu0WUmmlwae6V35AngMpA_gGPIvyvKWGHyMXyIQ&oe=63EC4917', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/275934710_5185056474848692_2960031919864330726_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=gQuOqFpWldMAX--e349&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCxqery9XrBBpo14wZ7DUwLWMfE54-StYD-U-WaaR9_IA&oe=63EC4C71', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/276205301_5185056818181991_5490771726976254209_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=iQ79enkiDhQAX-usuY0&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBaZTmy6K4Fp1yLi65GigiEtt2ZW7cFGDNdbQuDCe3r6w&oe=63EC1A84', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/276174992_5185057298181943_3553976623349857406_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=tZdYovQ3CLYAX95Y1Eh&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAhgnTSiziM_5d0fKeQ6lZ8JtPMsHi7o_moGawDHMDTUA&oe=63EB9206', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/276060355_5185057781515228_8411161371087653472_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ESJlDbzkq6kAX_-rmsk&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCul5ozWB6FGXlI1zn6HBIyRpddH9Azln61RyHxEcYkxA&oe=63EB6E9D', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/275923948_5185058164848523_7229076781165998068_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=0s-tCYezOX4AX-hHqhM&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCXxaeWWOQ4dMDV96LZGHt3Ej_aR-CJ3vSctj-U_HsZ7g&oe=63EC274A', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/276066931_5185058394848500_1858972389106574068_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ETA8rCZiCf4AX_v_5Sd&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfAP-WqCa47zsNhbILMSHD31Wg67aU615JoJ8S1zG2NNsA&oe=63ECBBD4']
    },
    {
      category: '左手X右手',
      title: '左手X右手',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/275236118_5148868448467495_8049882926782269942_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=qFF0Syy0PZIAX-SkuIW&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBalLcRauFuCkMucbKy9ZvR3s8KAFxy86EcU-hMAwDblQ&oe=63ECD7F0',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/274716341_5128742267146780_8022803851662850700_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=SyEkoMemBVEAX_l9SDz&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfA57zQrDiMoGN3B1d59W2Gt-3LBEgZUjmkit7-MZ2Q5QA&oe=63EB3B8D',
    },
    {
      category: '蛇皮',
      title: '蛇皮插圖',
      imgUrl: 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/274549064_5120432024644471_7895195927545025019_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pAhDOLLLB1YAX_Hbcrh&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDlJqzqd7hbvEB-cH3UsS74Z7Tfml1DPONO305OxWZ4Vw&oe=63EBAFA8',
    },
    {
      category: '左手',
      title: '左手步驟圖',
      imgUrl: ['https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/274355346_5116394445048229_8303316712552392881_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=BZB1_sd0CAsAX9y23tk&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDW-yrlhdRpzn__oIHbB7ZzwmPN3XAboJ9EzSF2kQTljg&oe=63EB03DB', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/274484546_5116396535048020_6204931397035587671_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=M6uiiB0e084AX8sBEA2&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAKCUaJnEBCuleWLQqaqtkz-xyeRtVf5dS0btVoz4lxjw&oe=63EC9A4C', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/274349141_5116397428381264_681417799917457868_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=IJYbnRNnCcIAX8BBWeZ&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBvBjEmx07N5bsVycB7rJtoHZUIZP4CBCTWuHxM-RPp0A&oe=63EB34E3', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/274219816_5116397925047881_8687278092484432359_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=hFXpiSWJtkMAX954glS&_nc_oc=AQnirCkly4SfEYEwVkfBb5yn0_GJs96L5tMPVj0Gh3s8xb1IGzJFA9ZZ8JqcK8TGUDE&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCuXxE4Wdf7m2QKYvD8CQfzDTEjo2Hf_71rYV2VhTn3bA&oe=63ECB9D0', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/274237543_5116398678381139_8814097077061718383_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=nlYD_vibm9EAX9sOY_H&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfByW1SxGFpLqXftrnkwap1hIUR5F11C6KKVITLhTJnNMw&oe=63EB257E', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/274345854_5116399138381093_5975180784230783576_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=_1XkuEWx0mEAX9nikjm&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfDhtEPj8TZRLvIm1nn7N3AuXcyYZCoDfh2wc84EvXitxA&oe=63EC3D1C', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/274257098_5116400651714275_5668154959783314699_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=0pB2guHJDr0AX-mdPcY&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBMP1f4OMFBQeRWT0q3i2bztXY6HRbv7aQV1RBmI6K-lA&oe=63EC8E0E']
    },
    {
      category: '其他',
      title: '白夜極光步驟圖',
      imgUrl: ['https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/248422278_4709095789111432_7081622791273455779_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=4SV6PRTZ4HYAX9WD0_x&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCwwKqxHEicLdLk3kwFL0WA8i8sNbMfyw0SIcA8jwtCdg&oe=63EB2016', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/250271304_4709095855778092_7711513721564566119_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=tEvyMj7jTLwAX9le90U&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfB9_fLAt8Eu-WgpyFZQb_wc16YjjDjDLSDqQN3dkqR9Cw&oe=63EC0493', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/247946056_4709095859111425_2917881819133885862_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=sg6g7MMqKhcAX_dXLKk&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAAE30L8da6kA6Jav4csfMHWJkFVk_Al5GM73f93Cd66A&oe=63EB5AD9', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/247476622_4709095869111424_502613959731487970_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=s_FNJ356w9gAX9f8R4m&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDn1rZaACTDda0IoYI4NkhjKw11Eeqf7sOKdBhMNtd9dw&oe=63EC7378', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/248583456_4709096045778073_4565753523136447325_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=7wb8mSs-bPsAX9tCCKU&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDEOLuPe1ggb2UCAzSfpUAmFpwZT_On4R6_VRnAFftlRA&oe=63EC2D91', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/248810003_4709096049111406_8173599149129950666_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=tHpYeUBGe2AAX8_7ASR&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCkktDqGYS5l6jOP03mD8IdUh7szShs09xnAgAj6-02CA&oe=63EB0F21', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/248421088_4709096095778068_3958948487277270478_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=pPruuVvzRRUAX9hEgMD&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBaJ7RsHfjdJ2leaF90wt4cQ5oIbygbrIJrOxYOTmo2RQ&oe=63EC6091', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/248470884_4709096125778065_9093214767298467315_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=PAGvsXWmnFkAX_tAZst&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBI69RKBY5z4rZXZlGTmu67opanEBnSLeyqqDC9sn6Pgw&oe=63EB35CB', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/249059107_4709096109111400_7253912840090431700_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=bJ0z9pYi0kkAX-_SeSC&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCZIhgiK8MMYVvKQGvXtICQJUDXoKKTBbtMsulM4XszWA&oe=63EC10C3', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/250179985_4709096379111373_6468025074378219187_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=XNdsWFA3YaMAX8QJgJE&_nc_oc=AQlxJ7FGvMgRHAoz6a5oUQgntmWmEzjBf23vqhGH3ldo_028ymTM0VPgETbB3SMtia4&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAqDgTPD84FotkJI_ZfL7uP4KJGf48qeA7abPs4aBN5Jw&oe=63EBA5F8', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/249856415_4709096415778036_9145975943747181826_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=bXa6S0BegUoAX_XWyVc&_nc_oc=AQmMVLAyWg5d3RVFFEKmZe0_-ec0nTq13s5HOZ-XWWNCwHvyaA-Hu9y0qalGAgH-kWw&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCVccrYEiuF5eEU2YD7pfqrpVBGcvVqJWi7WUP_NTHmlg&oe=63EBCF0A', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/250953805_4709096425778035_4887796108831260752_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=fudzyj5CFlYAX9fZ0xT&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBEK_pCKPQQDAHEy5u30V-WI3SQX_uqNviLCB1WEd8HNA&oe=63EB87BA', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/249012774_4709096585778019_3287319703501600124_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=HApXD9pY2gsAX8RNxyk&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCfAiacAwQjb2OSUDNf5cGD8QaOVhaZSLtT8yaYwAVzOw&oe=63EB46B0', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/250075963_4709096645778013_151668091435201763_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=HCPCT-GML4MAX-HylhL&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAl7lANjwlbOmN52ZLLWIqQbQer1S7ulYHxjc5myCrFJw&oe=63ECA5C8', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/247676247_4709097222444622_3562219136291275655_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=8W0iGEUY2yIAX9FdqQS&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBBwMhQS4YV3sLA-HavRvZZ1A-4bLwmiu7HOaApwtnB6g&oe=63EB230A', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/248385816_4709111519109859_4941151201332012257_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=bw2DyhiBQykAX9_lOMi&_nc_oc=AQlAphxOW3Nf07-ihF41_SKaByW8JXvuZj3KdpMekQOf-O6mGRhgjTneggGFJzyvD1g&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCGWJ4kzxwSA_ccaHLTFVRyT-TipFSIRED45ie2Gr9gqA&oe=63ECA686', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/248423227_4709116339109377_6393844947039856079_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=G2u3xwaYH70AX8kaHau&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfB0I8O74f8Q1wO51ckHr8uPytLYND3ORYcX2y_wucZc1Q&oe=63EB729B', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/250295187_4709119275775750_8059706251427751314_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=DbM_ER7vW7QAX_In_C4&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBLZvhGYwh4d5CfqcRncPCBSOM1kk5VyNkcvW9XoFIZ3w&oe=63EC0815', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/250315740_4709121359108875_132532945815254340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=wDxBHMVodJgAX9VzDP0&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfA8cVZECXUxixQ_4qe687jsqvQLK1wLmf6xULa4GLMvZg&oe=63EB4587', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/249412017_4709124435775234_5057401529352086134_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=xuvU53qp_vgAX-jX-t3&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfBKwvIZkqUdxdqRsxavI84Gua8JhRwwSukk2NjWghHptQ&oe=63ECBAA4', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/250198037_4709127492441595_5543397133638514434_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=Dh70BPViS2wAX-bGagu&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCvS2TtOQ__ep9Od5ClGVLmVywHk0AD2cMf6xuW0bC4Aw&oe=63EBD4F6', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/250491010_4709129025774775_6744271785590143210_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=p9nraq1oEUsAX-3Zg-q&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfC_yO8TY6CXEUzAtdqdQO2Q1zWt2QpVH70NRtCkUNideQ&oe=63EC39FC', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/248579598_4709131055774572_1733810186610073123_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q5EQD1T2FfYAX-CU0ba&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfCOHfCJqC24-tvU3xQsPjHdHq2-bUg3b3T9FddFeKpnrw&oe=63EB374F', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/250959086_4709134415774236_6499286838052112441_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZZZQG5KK6q0AX8Mb7P0&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDWiQD1Xsynyslo3YqUbtP4t5EljP_zzp_yPSrwve1ghw&oe=63EBD0F0', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/248911742_4709138609107150_4876584903902913764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=i0qrh0GNmu0AX9m5O-A&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDZvEVFA7IsVB880LcDAKdjBMUCdWouxtb0cUec3HOiZQ&oe=63ECE1FF', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/250284362_4709142542440090_3742160243782359244_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=RWO7TTFDgBQAX_C0fYq&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCYbAI3E4v1jy-MXfTzU0CV-rTxFXLk75ribwtJqG928Q&oe=63EBF55C', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/248796429_4709143142440030_6776832615967946932_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=CAl_QyM0MXMAX9AF_kC&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCVXm4fVpd4nf5hNLDXNyK6QxWmmWhwo23gY4r9wphJUg&oe=63ECC702', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/248547250_4709145992439745_5554859949769534729_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=34NlGQP5gUUAX9Ild2o&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfBoZD5EdGnugYmiwsAFvxRoxxRgq8veMbfGU6IoWOWrjw&oe=63EB8DAF', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/249443128_4709151169105894_1427728748075442466_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=9fuVnrzEt5UAX9kW5AU&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBRnfsY1XMlqg_Q47NyDmvGtBKi4xdjZNzcVE9N8qMJWQ&oe=63EC0E02', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/250416763_4709152232439121_5567863039180736053_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=4F7eweP04cwAX-Ccth7&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfA6UhAt2gyqK_SVbHbnVMgTuhsFQ97f_hhOe0RxkR00KQ&oe=63EC2D23', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/248970867_4709154355772242_2522585668696053149_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=UUUibp3xUOcAX-bMqAU&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfAqYXMEIjCoHxqVJcEdxSo44UZe3i2wC3e1sZPBPjKb7g&oe=63EC3AB5', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/249399797_4709157379105273_3522527214187753274_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=jXNnTs6yRxMAX_hUQLg&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAkgrKSJBRa0uSDFfva8xdQbk0nBaGI3ERccoavU7Mfaw&oe=63EBB72D', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/250377449_4709158502438494_6830443002407036296_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=RiuuwPhtAhwAX-uGn6T&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCMLbItt1WpQZpg-NcRRVI80djT-vExmRp0Ib6TBtRjtw&oe=63EC9172', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/250791809_4709160252438319_8439384653475964987_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=lEHyVhrnyYIAX_7tDIl&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfDtgaBvevEKFp0dMOReX5VETPSTK6qtgauZ3LVEgGmYyA&oe=63EC7D2F'],
    },
    {
      category: '左手X右手',
      title: '左手X右手',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/244302890_4643617505659261_550571850863133314_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=pevzq6pRxMQAX-cCkSz&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfAbQmS6FtAE8fUy4xxkOe0w8ac70DI_VPCItbj0Fvp0tA&oe=63ECF07F',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/244643818_4641508499203495_7933736571835112930_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=WN2WrENFUPcAX-h28ug&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfCX-eUc62b16NT-sjzx14DTX5kVgDgby0pK475aexbQPQ&oe=63EC163A',
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/244759754_4637556459598699_4430572645061341434_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=mHifC59jMDAAX8ho-SS&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDEdBXs6fYYIo-llhGvjFvcmaoN6Gyf2K4gcvzaqN07Sw&oe=63EC3DE4',
    },
    {
      category: '其他',
      title: '其他',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/241535623_4546835732004106_286663717435980390_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=S0NnWCCPQ9AAX_9yKXU&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfA5KwHNtgp0kOk0KW6MnUmngFT_Ad4LdFzgqA9mRk-x0g&oe=63EC4E08',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/241236358_4543501385670874_2637492484472587367_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=7dj8jJyDDG4AX_YJKC4&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfD_QfT83l1dbgnbS8C_66E02F1MDNf7rbTUcdKxz0X2vw&oe=63EC43F7',
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/240514400_4539121402775539_8411329360329600964_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=pHY1N5UD36cAX_nmCcH&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfA88q745dmmPJh3BvexFJG3jztnBRzxmih-ddPhVxrfvA&oe=63EB10B1',
    },
    {
      category: '蛇皮',
      title: '蛇皮',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/241239533_4535196889834657_263496791009796077_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=iIjqGMW0dCsAX8nyZxr&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfA6gGGLvvHS9t6brBw_F06m3cXKUvGXBsdQ9MG_H-RwfA&oe=63EB57D1',
    },
    {
      category: '右手教學',
      title: '肌肉上色分享',
      imgUrl: ['https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/240606647_4521602374527442_88288911461164051_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=XxHIITWp6mUAX8IwnDP&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfDAUmd6qki0Vdg5GwnIn_e-3W0ZbomFYDE7y40P_8tghw&oe=63ECAC4E', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/241001902_4521603571193989_4471919945081013695_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=RfYFLt5Vg4YAX8akZrb&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCsyjqtYJM-ncYqaelt-CqkNxdWlPUI2QUzoJAAn15bbw&oe=63EBC4CC', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/240735164_4521605651193781_438957247748637078_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=6_tz-RwF5VoAX_dHh1v&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfD1E2VlQkTGh3LmW5KazMLwCUPHNnSsSN8syBREaIaovQ&oe=63EC6521', 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/241047847_4521606281193718_7628264284061277674_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=hItIOog-QTcAX-NaH8s&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfAeczq8Z1K5JyGK5X2S2gwpExFvAUbRIEzCPMEbryrUag&oe=63EC77C8', 'https://scontent.ftpe8-3.fna.fbcdn.net/v/t39.30808-6/241109924_4521606814526998_6072893950829174793_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=vm78DWm_ZDsAX_JSa2l&_nc_ht=scontent.ftpe8-3.fna&oh=00_AfCrUA3-m-l-7GCZ8CSySAyy-EVp6_WedCDz0fa4l-iBwA&oe=63EC0CB7', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/240605750_4521607564526923_2133349435758820520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=PS-pleKoDH4AX8jDhOl&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCiURGEo8Ttc70pHlnbPiUSdr4UlIlXk3HifbW089vcbw&oe=63EB53E9', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/240730349_4521608087860204_7502798068036950999_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=ovK4kG4oKTsAX_N1lkt&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCwChC4FjJFEWW5nqqpdNJ2KhhuYhbgFOMFCgFzPhBp1A&oe=63EBA25A', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/240525318_4521608541193492_1626353448085074299_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=SlMh41-EXcYAX8kOuK2&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAWY5f08H6Ud5II6zjK-K-Cabk0qGW_vCWj0vuGje8ZZA&oe=63EBBB9B', 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/240649862_4521609154526764_8914082763583343922_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=hJmjMI3xjUwAX_7LUKa&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfAmh0q3HLHEuXWDGolV5RRlkN3VhTMfMCzuwO_eDeNWEA&oe=63ECBDBF', 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/240601950_4521609944526685_3028800849592113961_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=qvTJSix_xC0AX9lzszg&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfD0bytMu1lFt8EL4ZtasoTQkdFRKy94WyqJU-rA8Gygng&oe=63EB302A'],
    },
    {
      category: '蛇皮',
      title: '蛇皮',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/240651152_4510136822340664_8148865881386516448_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=mIYKxcXmAOkAX_Kz8ug&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfCcL98HVszvaYwMLFwUv6VcFr7GODf1zyIfAdY77212zQ&oe=63EC0BF2',
    },
    {
      category: '左手',
      title: '左手',
      imgUrl: 'https://scontent.ftpe8-2.fna.fbcdn.net/v/t39.30808-6/240522096_4504400232914323_8720781277245922897_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=7xzaAGEM8TsAX_1_sdz&_nc_ht=scontent.ftpe8-2.fna&oh=00_AfA9d9uE5sHBsymoHTOjvZ3BYnd0UDomeooSsjnQxXGwmw&oe=63EBB596',
    },
    {
      category: '右手',
      title: '右手',
      imgUrl: 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/240591985_4496785093675837_1434198542926533882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Atfa4yPDvdUAX-CFcrW&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfDOOMCBRITsuNCYSIkIaV5fByBIEc5UY0C25Cl0ewMjEg&oe=63EB0425',
    },
    {
      category: '左手X右手',
      title: '左手X右手',
      imgUrl: 'https://scontent.ftpe8-4.fna.fbcdn.net/v/t39.30808-6/237242015_4482414255112921_212680915540460541_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=cPy_SHoBdPwAX-H1oOp&tn=C98ZJeUmsqc7o--X&_nc_ht=scontent.ftpe8-4.fna&oh=00_AfBSOqM2LlR7FUh71rOtqOPP3uzG92-aK6-SyGyiz3h9jg&oe=63EB3A8D',
    }
  ]
  
  
  if (shipiArticles) {
    function articleOpenHandler() {
      // articles height
      const url = this.style.backgroundImage.slice(5, this.style.backgroundImage.length-2)
      const img = document.createElement('img')
      img.setAttribute('src', url)

      // article open & close
      if(this.classList.contains('open')) {
        this.classList.remove('open')
        return;
      }
      const article = this.parentElement.parentElement.querySelectorAll('.article')
      article.forEach(article => {
        article.classList.remove('open')
      })
      this.classList.add('open')
    }

    const imgArr = articleArr.filter(img => !img.category.includes('漫畫') && !img.category.includes('教學') && !img.title.includes('步驟') )
    // let html = ''
    imgArr.forEach((img, i, arr) => {
      // appendChild
      if ((i + 1) % 5 === 1) {
        const articles = document.createElement('div')
        articles.setAttribute('class', 'articles')
        shipiArticles.appendChild(articles)
      }
      const articles = document.querySelectorAll('.articles')
      const article = document.createElement('div')
      article.setAttribute('class', 'article')
      article.setAttribute('style', `background-image: url(${img.imgUrl})`)
      let count = Math.floor(i / 5)
      articles[count].appendChild(article)
      if (arr.length - 1 === i) {
        const article = document.querySelectorAll('.article')
        article.forEach(article => article.addEventListener('click', articleOpenHandler));
      }
    })
  }
  
})()