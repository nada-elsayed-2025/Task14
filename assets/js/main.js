// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Header Scroll Effect
document.addEventListener('scroll', () => {
    document.getElementById('header')
        .classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

// Feature Items Animation
const featureItems = document.querySelectorAll('.feature-item');
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
featureItems.forEach(item => observer.observe(item));


// Menu Items Data
const menuItemsData = [
    { name: "أصابع الجلاش المقرمشة", price: "45 Egp", category: "main", image: "..assets/img/t1.jpeg", description: "أصابع الجلاش المقرمشة مع صوص الكاتشب الحار." },
    { name: "تاكوس الدجاع", price: "55 Egp", category: "main", image: "../assets/img/t2.jpeg", description: "لحم أنجوس فاخر مع صلصة خاصة وجبن ذائب." },
    { name: "هوت دوج", price: "60 Egp", category: "main", image: "../assets/img/t3.jpeg", description: "هوت دوج الموتزريلا والبطاطس مع صوص الخردل الحار." },
    { name: "البانية المقرمش", price: "80 Egp", category: "main", image: "../assets/img/t4.jpeg", description: "بانية الدجاج الطازج والمتبل بتتبيلة رائعة." },
    { name: "فاهيتا الدجاج", price: "80 Egp", category: "main", image: "../assets/img/t5.jpeg", description: "سندويشات فاهيتا الدجاج مع خلطة الخضار المشوية." },
    { name: "اونيون رينج", price: "80 Egp", category: "main", image: "../assets/img/t6.jpeg", description: "دوائر البصل المقرمشة مع صوص الكاتشب اللذيذ ." },
    { name: "عصير نعنان طازج", price: "15 Egp", category: "drinks", image: "../assets/img/j1.jpeg", description: "عصير النعناع طبيعي 100% منعش." },
    { name: "موهيتو توت", price: "20 Egp", category: "drinks", image: "../assets/img/j2.jpeg", description: "مزيج منعش من التوت والنعناع والليمون." },
    { name: "كابتشينو", price: "18 Egp", category: "drinks", image: "../assets/img/j3.jpeg", description: "قهوة إيطالية غنية بالكريمة والرغوة." },
    { name: "سموزى", price: "18 Egp", category: "drinks", image: "../assets/img/j4.jpeg", description: "سموزى الفراولة المنعش مع قطع من الفراولة والكريمة ." },
    { name: "تشيز كيك", price: "35 Egp", category: "desserts", image: "../assets/img/d1.jpeg", description: "تشيز كيك بصوص الفراولة وقطع التوت ." },
    { name: "بلو بيري كيك", price: "40 Egp", category: "desserts", image: "../assets/img/d2.jpeg", description: "كيكة التوت الأزرق مع الكريمة البنفسجية ." },
    { name: "تيراميسو", price: "50 Egp", category: "desserts", image: "../assets/img/d3.jpeg", description: "حلوى إيطالية كلاسيكية بطبقات القهوة والبسكويت." },
    { name: "ريد فيلفيد الفراولة", price: "40 Egp", category: "desserts", image: "../assets/img/d4.jpeg", description: "كيكة الريد فيلفيد مع قطع الفراولة والصوص الأحمر ." }
];

const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-buttons .btn');
function displayMenuItems(category) {
    const currentItems = menuGrid.querySelectorAll('.menu-item');
    if (currentItems.length > 0) {
        currentItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            }, index * 50);
        });

        setTimeout(() => {
            showNewMenuItems(category);
        }, currentItems.length * 50 + 300);
    } else {
        showNewMenuItems(category);
    }
}
function showNewMenuItems(category) {
    menuGrid.innerHTML = '';
    const filteredItems = category === 'all' ? menuItemsData : menuItemsData.filter(item => item.category === category);

    filteredItems.forEach((item, index) => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.style.opacity = '0';
        menuItemDiv.style.transform = 'translateY(30px)';
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        menuGrid.appendChild(menuItemDiv);
        setTimeout(() => {
            menuItemDiv.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            menuItemDiv.style.opacity = '1';
            menuItemDiv.style.transform = 'translateY(0)';
        }, index * 100 + 100);
    });
}
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayMenuItems(button.dataset.category);
    });
});
displayMenuItems('all');

// Offers Slider
const offersSlidesContainer = document.getElementById('offersSlidesContainer');
const offersSlides = document.querySelectorAll('.offer-slide-card');
const offersPrevButton = document.getElementById('offersPrevSlide');
const offersNextButton = document.getElementById('offersNextSlide');
const offersPaginationDotsContainer = document.getElementById('offersPaginationDots');
const offersDots = document.querySelectorAll('.offers-dot');
let currentOfferSlideIndex = 0;

// Array to hold countdown end dates and element IDs for each offer
const offersCountdownData = [
    {
        endDate: new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000) + (1 * 60 * 60 * 1000) + (30 * 60 * 1000) + (15 * 1000)).getTime(),
        hoursEl: document.getElementById('hours-offer-1'),
        minutesEl: document.getElementById('minutes-offer-1'),
        secondsEl: document.getElementById('seconds-offer-1'),
        countdownContainerId: 'offerCountdown1'
    },
    {
        endDate: new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (5 * 60 * 60 * 1000) + (10 * 60 * 1000) + (45 * 1000)).getTime(),
        hoursEl: document.getElementById('hours-offer-2'),
        minutesEl: document.getElementById('minutes-offer-2'),
        secondsEl: document.getElementById('seconds-offer-2'),
        countdownContainerId: 'offerCountdown2'
    },
    {
        endDate: new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000) + (10 * 60 * 60 * 1000) + (5 * 60 * 1000) + (30 * 1000)).getTime(),
        hoursEl: document.getElementById('hours-offer-3'),
        minutesEl: document.getElementById('minutes-offer-3'),
        secondsEl: document.getElementById('seconds-offer-3'),
        countdownContainerId: 'offerCountdown3'
    }
];

function showOfferSlide(index) {
    offersSlidesContainer.style.transform = `translateX(${-index * 100}%)`;
    offersDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
function nextOfferSlide() {
    currentOfferSlideIndex = (currentOfferSlideIndex + 1) % offersSlides.length;
    showOfferSlide(currentOfferSlideIndex);
}
function prevOfferSlide() {
    currentOfferSlideIndex = (currentOfferSlideIndex - 1 + offersSlides.length) % offersSlides.length;
    showOfferSlide(currentOfferSlideIndex);
}
offersNextButton.addEventListener('click', nextOfferSlide);
offersPrevButton.addEventListener('click', prevOfferSlide);
offersDots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        const slideIndex = parseInt(event.target.dataset.slide);
        currentOfferSlideIndex = slideIndex;
        showOfferSlide(currentOfferSlideIndex);
    });
});
function updateSingleOfferCountdown(offer) {
    const currentTime = new Date().getTime();
    const timeLeft = offer.endDate - currentTime;
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
        if (offer.hoursEl) offer.hoursEl.textContent = '00';
        if (offer.minutesEl) offer.minutesEl.textContent = '00';
        if (offer.secondsEl) offer.secondsEl.textContent = '00';
        const countdownContainer = document.getElementById(offer.countdownContainerId);
        if (countdownContainer) {
            countdownContainer.innerHTML = `<p id="countdown-message">انتهى العرض!</p>`;
        }
    } else {
        if (offer.hoursEl) offer.hoursEl.textContent = String(hours).padStart(2, '0');
        if (offer.minutesEl) offer.minutesEl.textContent = String(minutes).padStart(2, '0');
        if (offer.secondsEl) offer.secondsEl.textContent = String(seconds).padStart(2, '0');
    }
}
setInterval(() => {
    offersCountdownData.forEach(updateSingleOfferCountdown);
}, 1000);
offersCountdownData.forEach(updateSingleOfferCountdown);
showOfferSlide(currentOfferSlideIndex);

// Testimonials Auto Slider
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.getElementById('testimonialSlides');
    const items = document.querySelectorAll('.testimonial-item');
    if (!slides || items.length === 0) return;
    let current = 0;
    const INTERVAL_MS = 5000;
    let intervalId = null;
    function showSlide(index) {
        slides.style.transform = `translateX(${-index * 100}%)`;
    }
    function nextSlide() {
        current = (current + 1) % items.length;
        showSlide(current);
    }
    function startAuto() {
        stopAuto();
        intervalId = setInterval(nextSlide, INTERVAL_MS);
    }
    function stopAuto() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    showSlide(current);
    startAuto();
    const container = slides.parentElement;
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);
});
