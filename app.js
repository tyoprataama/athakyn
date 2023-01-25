const wrapper = document.querySelector('.slider-wrap');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});