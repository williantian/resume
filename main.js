setTimeout(function(){
    siteWlecome.classList.remove('active')
},1000)

window.onscroll = function(a){
    if(window.scrollY>0){
        topNavBar.classList.add('sticky')
    }
    else{
        topNavBar.classList.remove('sticky')
    }
}
let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
    }   
}
let aTags = document.querySelectorAll('nav.menu > ul >li > a')
for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function(x){
            x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href') // href就为'siteAbout'
        let element = document.querySelector(href)
        let rect = element.getBoundingClientRect()
        let top = element.offsetTop

        let n = 25 //一共滚动多少次
        let duration = 500 / n //多少时间动一次  一次持续多长时间
        let currentTop = window.scrollY
        let targetTop = top - 80
        let distance = (targetTop - currentTop) / n//每一次滚动多长距离
        let i = 0
        let id = setInterval(()=> {
            if(i===n){
                window.clearInterval(id)
                return
            }
            i = i + 1
            window.scrollTo(0, currentTop + distance * i)
        },duration)
    }
}