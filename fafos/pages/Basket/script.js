const cartSide = document. querySelector(".cart")

const cartStorage =  JSON.parse(localStorage.getItem("cart") || "[]")

if(cartStorage.length){
    cartStorage.forEach(el => {
        const {title, price} = el
        const newCard = document.createElement("div")
        newCard.innerHTML = `<div class="menu__right-title">${title}</div> <div class="menu__price"> ${price}</div>` 
        cartSide.appendChild(newCard)
        /* <div class="menu__right-subtitle"><a href="#!" class="menu__subtitle-link">Order now <img src="../../assets/icons/arrow-right(white).png" class="arrow-right-white" alt="arrow"></a> </div> */
    });
}

const BtnCLear = document.querySelector(".basket__menu-right__btn")

BtnCLear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})
