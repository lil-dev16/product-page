const bar = document.getElementById('bar');
const nav = document.getElementById('nav__link');
console.log('gvrt');
bar.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    bar.classList.toggle('close');
    console.log('done!!');
})

