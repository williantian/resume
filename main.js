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
    window.scrollTo(0, top - 80,)
    }
}