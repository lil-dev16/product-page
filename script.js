const bar = document.getElementById('bar');
const nav = document.getElementById('nav__link');
console.log('gvrt');
bar.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    bar.classList.toggle('close');
    console.log('done!!');
})

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const product  = document.querySelector('.product');

const images = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
]

const imgMatch = [
    {
        id: 1,
        sor: './images/image-product-1.jpg'
    },
    {
        id: 2,
        sor: './images/image-product-1.jpg'
    },
    {
        id: 3,
        sor: './images/image-product-1.jpg'
    },
        {
        id: 4,
        sor: './images/image-product-1.jpg'
    }
]

let target= 0;
const showImg = (index) => {
    product.src = images[index];

}

nextBtn.addEventListener('click', ()=> {
        target++;
        if(target >= images.length){
            target = 0;
        }
        showImg(target);
})

prevBtn.addEventListener('click', ()=> {
        target--;
        if(target <= -1 ){
            target = images.length - 1;
            console.log(target);
        }
        showImg(target);
})

//thumbnails sec
const thumbnails = document.querySelectorAll('.thumb-img');
function thumbAction() {
    product.src= imgMatch[1].sor;
    thumbnails.forEach(thumb=> {
        thumb.classList.remove('select')
        this.classList.add('select')
        
    })
}

thumbnails.forEach(thumb=>{
    thumb.addEventListener('click', thumbAction)
})