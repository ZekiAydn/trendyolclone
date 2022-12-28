const smallimages = document.querySelectorAll(".product-img-container img")
const bigphoto = document.querySelectorAll(".productimg1")


smallimages.forEach(item=>{
    item.addEventListener("mouseover", () =>{
        bigphoto.src=item.src;
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        el: ".swiper-pagination",
        clickable: true,
    },
  });   

