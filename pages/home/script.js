/* menu */
let HIDDEN_CLASS_NAME =  'hidden'
var TARGET_CLASS_NAME =  'target'
var SOURCE_CLASS_NAME =  'source'
var targetIdToShow = 1

function main() {
    var targets = getElements(TARGET_CLASS_NAME)
    var sources = getElements(SOURCE_CLASS_NAME)
    sources.forEach(function (sourceNode) {
        var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
        sourceNode.addEventListener('click', function () {
            showTarget(targets, sourceNodeId)
        })
    })
    showTarget(targets, targetIdToShow)
}
function getElements(type) {
    return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
        var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
        var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
        return target1Num > target2Num
    })
}
function extractId(targetNode, baseClass) {
    var currentClassIndex = targetNode.classList.length
    while (currentClassIndex--) {
        var currentClass = targetNode.classList.item(currentClassIndex)
        var maybeIdNum = parseInt(currentClass.split('-')[1])
        if (isNaN(maybeIdNum)) {
            continue
        }
        var classStrinToValidate = baseClass + '-' + maybeIdNum
        if (classStrinToValidate === currentClass) {
            return maybeIdNum
        }
    }
}
function showTarget(targets, targetId) {
    targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
        if (currentTargetNodeId === targetId) {
            targetNode.classList.remove(HIDDEN_CLASS_NAME)
        } else {
            targetNode.classList.add(HIDDEN_CLASS_NAME)
        }
    })
}
main()
/* menu */

/* menu slider */
let slideNumber = 1;
menu__showBurger(slideNumber);

let slidePizza = 1;
menu__showPizza(slidePizza);

let slideJapanese = 1;
menu__showJapanese(slideJapanese);

let slideSweets = 1;
menu__showSweets(slideSweets);

let slideMeat = 1;
menu__showMeat(slideMeat);

let menu__prev = document.querySelector ('.menu__prev');
let menu__next = document.querySelector ('.menu__next');

menu__next.addEventListener ("click",  () => {
    menu__showBurger(slideNumber += 1);
    menu__showPizza(slidePizza += 1);
    menu__showJapanese(slideJapanese += 1);
    menu__showSweets(slideSweets += 1);
    menu__showMeat(slideMeat += 1);
});

menu__prev.addEventListener ("click", () => {
    menu__showBurger(slideNumber -= 1);
    menu__showPizza(slidePizza -= 1);
    menu__showJapanese(slideJapanese -= 1);
    menu__showSweets(slideSweets -= 1);
    menu__showMeat(slideMeat -= 1);

});

function actualSlide(index) {
    menu__showBurger(slideNumber = index);
    menu__showPizza(slidePizza = index);
    menu__showJapanese(slideJapanese = index);
    menu__showSweets(slideSweets = index);
    menu__showMeat(slideMeat = index);
}

function menu__showBurger(index) {
    let menu__slides = document.getElementsByClassName("menu__burger");
    if (index > menu__slides.length) {
        slideNumber = 1;
    }
    if (index < 1) {
        slideNumber = menu__slides.length;
    }
 
    for (let slide of menu__slides) {
        slide.style.display = "none";
    }
    menu__slides[slideNumber - 1].style.display = "flex";    
}

function menu__showPizza(index) {
    let menu__slides = document.getElementsByClassName("menu__pizza-slide");
    if (index > menu__slides.length) {
        slidePizza = 1;
    }
    if (index < 1) {
        slidePizza = menu__slides.length;
    }
 
    for (let slide of menu__slides) {
        slide.style.display = "none";
    }
    menu__slides[slidePizza - 1].style.display = "flex";    
}

function menu__showJapanese(index){
    let menu__slides = document.getElementsByClassName("menu__japanese");
    if (index > menu__slides.length) {
        slideJapanese = 1;
    }
    if (index < 1) {
        slideJapanese = menu__slides.length;
    }
 
    for (let slide of menu__slides) {
        slide.style.display = "none";
    }
    menu__slides[slideJapanese - 1].style.display = "flex";    
}

function menu__showSweets(index){
    let menu__slides = document.getElementsByClassName("menu__sweets");
    if (index > menu__slides.length) {
        slideSweets = 1;
    }
    if (index < 1) {
        slideSweets = menu__slides.length;
    }
 
    for (let slide of menu__slides) {
        slide.style.display = "none";
    }
    menu__slides[slideSweets - 1].style.display = "flex";    
}

function menu__showMeat(index){
    let menu__slides = document.getElementsByClassName("menu__meat");
    if (index > menu__slides.length) {
        slideMeat = 1;
    }
    if (index < 1) {
        slideMeat = menu__slides.length;
    }
 
    for (let slide of menu__slides) {
        slide.style.display = "none";
    }
    menu__slides[slideMeat - 1].style.display = "flex";    
}
/* menu slider */

/* customer slider */
let slideIndex = 1;
showSlides(slideIndex);

let prev = document.querySelector ('.prev');
let next = document.querySelector ('.next');

next.addEventListener ("click", function () {
  showSlides(slideIndex += 1);

});

prev.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("customers__slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";    
}
/* customer slider */

/* basket start*/
const cards = document.querySelectorAll(".menu__one")

cards.forEach((element, index) => {
    /* console.dir(element) */
    const btn = element.childNodes[5]
    const title = element.childNodes[1].innerText
    const price = element.childNodes[3].innerText

    btn.addEventListener("click", () => {
        const cartStorage = localStorage.getItem("cart") || "[]"

        const cart = JSON.parse(cartStorage)
        const card = { title, price}
        localStorage.setItem("cart", JSON.stringify([...cart , card]))
    })
})

//console.log(cards)

/* basket end */