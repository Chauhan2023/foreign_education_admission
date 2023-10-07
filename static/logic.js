const burger=document.querySelector('.burger');
const navbar=document.querySelector('.navbar')
const ullist=document.querySelector('.ullist')
const search=document.querySelector('.search')

burger.addEventListener('click',()=>{
  navbar.classList.toggle('nav-height')
  ullist.classList.toggle('v-class')
  search.classList.toggle('v-class')
})
