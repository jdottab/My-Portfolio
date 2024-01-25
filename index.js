let navItems = document.querySelectorAll('.nav-item');
let infoContent = document.querySelectorAll('.info-content');
const toggle = document.querySelector('.toggle')
let mode = document.querySelector('body')

navItems.forEach(e =>{
    e.addEventListener('click', function(){
        if(!e.classList.contains('active-nav')){
            let activeNav = document.querySelector('.active-nav')
            activeNav.classList.remove('active-nav')
            e.classList.add('active-nav')
        }
        let dataID = e.getAttribute('data-id');

        infoContent.forEach(event =>{
            let activePage = document.querySelector('.active')
            if(dataID == event.id){
                activePage.classList.remove('active')
                event.classList.add('active')
            }
        })
    })
})

toggle.addEventListener('click', function(){
    if(mode.classList[0]=='lightmode'){
        mode.classList.replace('lightmode', 'darkmode')
    }
    else{
        mode.classList.replace('darkmode', 'lightmode')
    }
})

//use mouse wheel event
//scrolling up: if event.deltaY < 0
//scrolling down: if event.deltaY > 0
window.addEventListener('wheel', function(e){
    //e.preventDefault()
    window.scrollBy(0, e.deltaY * 0.05)
    e.deltaY > 0 ? NextPage() : PreviousPage()
})

//go to next page
function NextPage(){
    let currPage = document.querySelector('.active')
    let activeNav = document.querySelector('.active-nav')
    for(let i = 0; i < infoContent.length; i++){
        if((currPage == infoContent[i]) && (currPage.nextElementSibling != null)){
            currPage.classList.remove('active')
            infoContent[i].nextElementSibling.classList.add('active')
        }
    }
    for(let i = 0; i < navItems.length; i++){
        if((activeNav == navItems[i]) && (activeNav.nextElementSibling !=null)){
            activeNav.classList.remove('active-nav')
            navItems[i].nextElementSibling.classList.add('active-nav')
        }
    }
}
//go to previous page
function PreviousPage(){
    let currPage = document.querySelector('.active')
    let activeNav = document.querySelector('.active-nav')
    for(let i = 0; i < infoContent.length; i++){
        if((currPage == infoContent[i]) && (currPage.previousElementSibling != null)){
            currPage.classList.remove('active')
            infoContent[i].previousElementSibling.classList.add('active')
        }
    }
    for(let i = 0; i < navItems.length; i++){
        if((activeNav == navItems[i]) && (activeNav.previousElementSibling != null)){
            activeNav.classList.remove('active-nav')
            navItems[i].previousElementSibling.classList.add('active-nav')
        }
    }
}

//scroll between projects
let right_arrow = document.querySelector('.right')
let left_arrow = document.querySelector('.left')
let projects = document.querySelectorAll('.project')
let projnav = document.querySelectorAll('.projpagenav')

right_arrow.addEventListener('click', function(){
    //if project id = projnav data id change active projnav
    let cpp = document.querySelector('.show') //cpp = current project page
    let next_slide
    if(cpp.nextElementSibling === null){
        right_arrow.classList.add('none')
    }
    else{
        if(right_arrow.classList.contains('none')){right_arrow.classList.remove('none')}
        if(left_arrow.classList.contains('none')){left_arrow.classList.remove('none')}
        next_slide = cpp.nextElementSibling
        cpp.classList.remove('show')
        next_slide.classList.add('show')
        if(next_slide.nextElementSibling === null){right_arrow.classList.add('none')}
    }
    projnav.forEach(e =>{
        let pDataID = e.getAttribute('data-id')
        let cpn = document.querySelector('.curr-proj-btn')
        if(pDataID == next_slide.id){
            cpn.classList.remove('curr-proj-btn')
            e.classList.add('curr-proj-btn')
        }
    })
})
left_arrow.addEventListener('click', function(){
    //if project id = projnav data id change active projnav
    let cpp = document.querySelector('.show') //cpp = current project page
    let prev_slide
    if(cpp.previousElementSibling === null){
        left_arrow.classList.add('none')
    }
    else{
        if(left_arrow.classList.contains('none')){left_arrow.classList.remove('none')}
        if(right_arrow.classList.contains('none')){right_arrow.classList.remove('none')}
        prev_slide = cpp.previousElementSibling
        cpp.classList.remove('show')
        prev_slide.classList.add('show')
        if(prev_slide.previousElementSibling === null){left_arrow.classList.add('none')}
    }
    projnav.forEach(e =>{
        let pDataID = e.getAttribute('data-id')
        let cpn = document.querySelector('.curr-proj-btn')
        if(pDataID == prev_slide.id){
            cpn.classList.remove('curr-proj-btn')
            e.classList.add('curr-proj-btn')
        }
    })
})
