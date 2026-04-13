// CLOCK LOGIC
function updateClock() {
    const now = new Date();
    const dateTimeStr = now.toLocaleString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    document.getElementById('date-time').innerHTML = dateTimeStr;
}
setInterval(updateClock, 1000);
updateClock();

// SLIDER LOGIC
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() { showSlider('next'); }
prevDom.onclick = function() { showSlider('prev'); }

let timeRunning = 2000; // Animation duration
let runTimeOut;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);


    ----------------------------------------------
        let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let thumbnailHTML = document.querySelector('.carousel .thumbnail');

nextBtn.onclick = function(){
    showSlider('next');
}

prevBtn.onclick = function(){
    showSlider('prev');
}

let unClickable; 

function showSlider(type){
    // Prevent multiple clicks during animation
    nextBtn.style.pointerEvents = 'none';
    prevBtn.style.pointerEvents = 'none';

    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        // Move the first big image to the end
        listHTML.appendChild(itemSlider[0]);
        // Move the first thumbnail to the end
        thumbnailHTML.appendChild(itemThumbnail[0]);
        carousel.classList.add('next');
    } else {
        // Move the last big image to the front
        let positionLastItem = itemSlider.length - 1;
        listHTML.prepend(itemSlider[positionLastItem]);
        // Move the last thumbnail to the front
        thumbnailHTML.prepend(itemThumbnail[positionLastItem]);
        carousel.classList.add('prev');
    }

    // Remove the class after animation finishes (0.5s match CSS)
    clearTimeout(unClickable);
    unClickable = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
        nextBtn.style.pointerEvents = 'auto';
        prevBtn.style.pointerEvents = 'auto';
    }, 500);
}

