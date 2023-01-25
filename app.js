const wrapper = document.querySelector('.slider-wrap');
const menuItems = document.querySelectorAll('.menu-item');
const products = [{
        id: 1,
        title: 'POLO ANAK',
        price: 49.000,
        colors: [{
                code: 'green',
                img: './img/polo.svg',
            },
            {
                code: 'white',
                img: './img/polo-white.svg'
            }
        ]
    },
    {
        id: 2,
        title: 'KAOS ANAK',
        price: 29,
        colors: [{
                code: 'grey',
                img: './img/kaos-anak.svg',
            },
            {
                code: 'pink',
                img: './img/kaos-pink.svg'
            }
        ]
    },
    {
        id: 3,
        title: 'SETELAN ANAK',
        price: 49,
        colors: [{
                code: 'pink',
                img: './img/setelan.svg',
            },
            {
                code: 'yellow',
                img: './img/setelan-kuning.svg'
            }
        ]
    },
    {
        id: 4,
        title: 'TIE DYE ANAK',
        price: 39,
        colors: [{
                code: 'white',
                img: './img/koleksi.svg',
            },
            {
                code: 'lightblue',
                img: './img/koleksi-biru.svg'
            }
        ]
    },
    {
        id: 5,
        title: 'AKSESORIS KUCING',
        price: 19,
        colors: [{
                code: 'grey',
                img: './img/aksesoris.svg',
            },
            {
                code: 'lightblue',
                img: './img/aksesoris-biru.svg'
            }
        ]
    },
]

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".product-image");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProduct = products[index];
        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "Rp." + choosenProduct.price + ".000";
        currentProductImg.src = choosenProduct.colors[0].img;
        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
    currentProductColors.forEach((color, index) => {
        color.addEventListener("click", () => {
            currentProductImg.src = choosenProduct.colors[index].img;
        });
    });
    currentProductSizes.forEach((size, index) => {
        size.addEventListener("click", () => {
            currentProductSizes.forEach((size) => {
                size.style.backgroundColor = "white";
                size.style.color = "black";
            });
            size.style.backgroundColor = "black";
            size.style.color = "white";
        });
    });
});