
// JSON menu fetch

const foodMenu = "../menu.json";
const main = document.querySelector('.main-menu');

function getMenu(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showMenu(data.foodMenu);

        })
}

getMenu(foodMenu)



function showMenu(data) {

    data.forEach(element => {
        const { name, price, image, rating } = element;
        const hrana = document.createElement('div');
        hrana.classList.add('main-menu_box');
        hrana.innerHTML = `<img src="${image}" alt="${name}">
            <div class="price">
            ${price}
            </div>
            <div class="text">
            <h3 class="main-menu_box-title">
            ${name}
            </h3>
            <span class="rating ${getRatingColor(rating)}"">${rating}</span>
            </div>`


        main.appendChild(hrana);

    }
  
)}

// basic if else statment to color rating depend on the score
function getRatingColor(vote) {
    if (vote >= 4) {
        return 'green'
    } else if (vote >= 3) {
        return 'orange'
    } else {
        return 'red';
    }
}

// Show image modal

const gallery = document.querySelectorAll('.gallery_img img');
const popup = document.querySelector('.gallery_popup-img');
const popImg = document.querySelector('.gallery_popup-img img');



gallery.forEach(image => {

    popup.style.visibility = 'hidden';
    image.onclick = () => {
        popup.style.display = 'block';
        popup.style.visibility = 'visible';
        popImg.src = image.getAttribute('src');

    }
});

document.querySelector('.gallery_popup-img span').onclick = () => {
    popup.style.display = 'none';
}


// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach(n => n.onclick = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});

// Intersection Observer

const loadingAnimation = function () {
    const load = document.querySelectorAll('.load');

    const show = (entries, observer) => {
        entries.forEach(element => {

            if (!element.isIntersecting) {
                return;
            } else {
                element.target.classList.add('fadeIn');
            };
            observer.unobserve(element.target);
        });
    };



    const Observer = new IntersectionObserver(show, { threshold: 0.7 });

    load.forEach(tb => Observer.observe(tb));
}
loadingAnimation();




