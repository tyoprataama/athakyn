const wrapper = document.querySelector('.slider-wrap');
const menuItems = document.querySelectorAll('.menu-item');
const products = [
    {
        id: 1,
        title: 'POLO ANAK',
        price: 49.000,
        colors: [
            {
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
        price: 29.000,
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
        price: 49.000,
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
        price: 49.000,
        colors: [{
                code: 'white',
                img: './img/koleksi.svg',
            },
            {
                code: 'blue',
                img: './img/koleksi-biru.svg'
            }
        ]
    },
    {
        id: 5,
        title: 'AKSESORIS KUCING',
        price: 49.000,
        colors: [{
                code: 'grey',
                img: './img/aksesoris.svg',
            },
            {
                code: 'blue',
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
    });
});