# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://sneaker-product.netlify.app)

## My process
I started this project using mobile-first approach and went on to make it responsive
then later started the javascript .
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I really learnt alot from this and it showed me the areas I need to work on,  I  learnt a lot about arrays in js and loops

```
```js
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
}
```


### Continued development

I'd continue to learn more on how to manipulate the DOM and later on i'll learn more
on objects and more adveanced js concepts


### Useful resources

- [Example resource 1](https://getcssscan.com/css-box-shadow-examples) - This helped me get 
a really good box shadow for the cart on deskto view. I really liked this pattern and will use it going forward.

## Author

- Website - [Segun Ojo](https://sneaker-product.netlify.app)
- Frontend Mentor - [@lil-dev16](https://www.frontendmentor.io/profile/lil-dev16)
- Twitter - [@segun0x](https://www.twitter.com/segun0x)
