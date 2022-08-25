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
//array for thumbnails switch
const imgMatch = [
    {
        id: 1,
        sor: './images/image-product-1.jpg'
    },
    {
        id: 2,
        sor: './images/image-product-2.jpg'
    },
    {
        id: 3,
        sor: './images/image-product-3.jpg'
    },
        {
        id: 4,
        sor: './images/image-product-4.jpg'
    }
]
//buttons
let target= 0;
const showImg = (index) => {
    product.src = images[index];

}

//REFERENCE FOR LIGHTBOX
let target2 = 0;
const showlightImg = (i)=> {
    prod1.src = images[i];
}
//END OF LIGHTBOX REFERENCE

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
    thumbnails.forEach(thumb=> {
        thumb.classList.remove('select')
        this.classList.add('select')
        
    });
    
}
thumbnails.forEach(element => {
    element.addEventListener('click', (e)=>{
        console.log('working');
        let id = e.target.dataset.id;
        // console.log(num);
        let blah = imgMatch.map((elem)=>{
            const num = elem.id;
            if(id == num) {
                return `${elem.sor}`
            }
        })
        blah = blah.join('');
        product.src = blah
        console.log(blah);
    })
});

thumbnails.forEach(thumb=>{
    thumb.addEventListener('click', thumbAction);
})

//thumbnails slect
// function imgSel(){}
const thumbnais = document.querySelectorAll('.thum');
function idc(){
    thumbnais.forEach(thu=>{
        thu.classList.remove('select');
        this.classList.add('select');
    })
}
thumbnais.forEach(thu=> {
    thu.addEventListener('click', idc);
})


    thumbnais.forEach(element => {
        element.addEventListener('click', (e)=>{
            console.log('working');
            let id = e.target.dataset.id;
            // console.log(num);
            let blh = imgMatch.map((elem)=>{
                const num = elem.id;
                if(id == num) {
                    return `${elem.sor}`
                }
            })
            blh = blh.join('');
            prod1.src = blh
            console.log(blh);
        })
    });
    


//LARGE IMAGE CLICK
const modal = document.querySelector('.modal-container');
const close = document.querySelector('.closee')
product.addEventListener('click', ()=>{
    modal.classList.add('show');
    prod1.src = product.src;
});
close.addEventListener('click', ()=> {
    modal.classList.remove('show');
})

//lightbox sec
const prod1 = document.querySelector('.pro');
const btnnex = document.querySelector('.nex');
const btnprev = document.querySelector('.pre');

 btnnex.addEventListener('click', ()=> {
    target2++;
    if(target2 >= images.length){
        target2 = 0;
    }
    showlightImg(target2);
 });

 btnprev.addEventListener('click', ()=> {
    target2--;
    if(target2 < 0){
        target2 = images.length - 1;
    }
    showlightImg(target2);
});


///NOWWW FINALLLYYYY! THE CART SECTION LOL:)
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const cartNo = document.querySelector('.num');
const orderBtn = document.querySelector('.order');
const title = document.getElementById('tit');
const price = document.getElementById('price');
let targetNum = 0;

const changeText = () => {
    cartNo.textContent = targetNum;
}

plusBtn.addEventListener('click', ()=> {
targetNum++;
changeText();
});

minusBtn.addEventListener('click', ()=> {
targetNum--;
changeText();
});

//array
const items = []

const juu1 = document.querySelector('.numc');
const juu =document.querySelector('.pr');
///ORDER BTN CLICK
const addToCart = () => {
    if (targetNum == 0) {
        return
    }else{

        // items.push({pic: product.src, ty:title.textContent, pr: price.textContent, id:Number(items.length), no:targetNum});
        // let output = items.map(item=> {
        //     return `
        //     <div class="itemI">
        //     <img src = ${item.pic} class="tre">
        //     <div class="cart-text">
        //     <p>${item.ty}</p>
        //     <p>${item.pr} * ${item.no} $${125*item.no}</p>
        //         </div>
        //         <div class = "del">
        //         <img src = './images/icon-delete.svg' id=${id}>
        //         </div>
        //         </div>`
        // })
        // console.log(items);
        // output = output.join('');
        // cont.innerHTML = output;
        // console.log(output);
        const id = new Date().getTime().toString();
        const element = document.createElement('div');
        element.classList.add('itemI');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        cont.appendChild(element);
        element.innerHTML = `
        <img src = ${product.src} class="tre">
          <div class="cart-text">
        <p>Fall Limited Edition Sneakers</p>
           <p>${price.textContent} * ${targetNum} $${125*targetNum}</p>
            </div>
            <div class = "del">
            <img src = './images/icon-delete.svg' >
            </div>`
    }

    //DELETE ITEM FROM CART
    const deleteIcon = document.querySelectorAll('.del');
    deleteIcon.forEach(element => {
        element.addEventListener('click', (e)=> {
            const pare = e.currentTarget.parentElement;
            cont.removeChild(pare);
        })
    });

    //small orange thingy
    if(element.length == 0){
        juu1.style.display = "none";
    }else{
        juu1.style.display = "block";
        juu.textContent = items.length;
    }
}

orderBtn.addEventListener('click', addToCart);

const cart1 = document.querySelector('.cart');
const cartInfo = document.querySelector('.cart-info');
const cont = document.querySelector('.items');
cart1.addEventListener('click', ()=>{
cartInfo.classList.toggle('sho')
})

//

