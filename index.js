const nav = document.querySelector('.navigation');
const navitem = document.querySelectorAll('.nav-item');
const page = document.querySelectorAll('.page');
const all = document.querySelector('.content');
const activePage = document.querySelector('.active');
const activeNav = document.querySelectorAll('.active-nav');

//function to scroll to page (change active)
function ChangeActiveNav(){
    for(let i=0; i < navitem.length; i++){
        navitem[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-nav');
            currentBtn[0].className = currentBtn[0].className.replace(' active-nav', '');
            this.className += ' active-nav';
        })
    }
}

let dataID;
//function connecting pages to nav
function ScrollToPage(){
    for(let i = 0; i < navitem; i++){
        dataID = navitem[i].getAttribute('data-id');
        if(dataID == activePage.id){
            activeNav[0].className = activeNav[0].className.replace (' active-nav', '');
            navitem[i].className +=  ' active-nav';
        }
    }
}

for(let i = 0; i < page.length; i++){
    page[i].addEventListener('mouseover', function(){
        let currPage = document.querySelectorAll('.active');
        currPage[0].className = currPage[0].className.replace(' active', '');
        this.className += ' active';
    })
}

//if this page is active, this navitem should also be active
//query active page classList
//change active-nav

ChangeActiveNav();
ScrollToPage();

//scroll to top
function ToTop(){
    scrollTo(0, 0);
}