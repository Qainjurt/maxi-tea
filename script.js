// Тілдердің аудармалары
const translations = {
    kk: {
        title: "Макси Чай - Премиум Шайдың Дәмі",
        nav_home: "Басты",
        nav_products: "Біздің Шай",
        nav_history: "Бренд Тарихы",
        nav_contact: "Байланыс",
        nav_distributors: "Дистрибьюторлар",
        hero_title: "Макси Чай",
        hero_subtitle: "Табиғи дәм мен премиум сапаның үйлесімі",
        hero_cta: "Коллекцияны Көрсет",
        products_title: "Біздің Шай Коллекциямыз",
        filter_all: "Барлығы",
        filter_black: "Қара Шай",
        filter_green: "Жасыл Шай",
        filter_fruit: "Жеміс Шайы",
        product_classic_title: "Макси Классик",
        product_classic_desc: "Дәстүрлі қара шай, бай хош иіс.",
        product_green_title: "Макси Жасыл",
        product_green_desc: "Жаңа піскен жапырақтардан жасалған.",
        product_fruit_title: "Макси Жеміс",
        product_fruit_desc: "Жемістер мен шөптердің үйлесімі.",
        add_to_cart: "Себетке Қосу",
        history_title: "Бренд Тарихы",
        history_desc: "Макси Чай 1995 жылдан бері Қазақстанда шай өндірісінің көшбасшысы. Біз табиғи ингредиенттер мен дәстүрлі әдістерді қолдана отырып, премиум сапалы шай ұсынамыз. Біздің миссиямыз – әр шыныаяқ шаймен шынайы ләззат сыйлау.",
        history_more: "Толығырақ",
        contact_title: "Бізбен Байланыс",
        contact_name: "Аты-жөніңіз",
        contact_email: "Электронды пошта",
        contact_message: "Хабарлама",
        contact_submit: "Жіберу",
        distributors_title: "Дистрибьюторлар",
        distributor_almaty_title: "Алматы",
        distributor_almaty_address: "Мекенжай: Абай даңғылы 123",
        distributor_almaty_phone: "Телефон: +7 (727) 123-45-67",
        distributor_almaty_email: "Email: almaty@maxitea.kz",
        distributor_astana_title: "Астана",
        distributor_astana_address: "Мекенжай: Республика даңғылы 45",
        distributor_astana_phone: "Телефон: +7 (717) 987-65-43",
        distributor_astana_email: "Email: astana@maxitea.kz",
        cart_title: "Сіздің Себетіңіз",
        cart_total: "Жалпы: 0 KZT",
        cart_checkout: "Төлем Жасау",
        footer_copyright: "© 2025 Макси Чай. Барлық құқықтар қорғалған."
    },
    ru: {
        title: "Макси Чай - Вкус Премиум Чая",
        nav_home: "Главная",
        nav_products: "Наши Чаи",
        nav_history: "История Бренда",
        nav_contact: "Контакты",
        nav_distributors: "Дистрибьюторы",
        hero_title: "Макси Чай",
        hero_subtitle: "Сочетание натурального вкуса и премиум качества",
        hero_cta: "Посмотреть Коллекцию",
        products_title: "Наша Коллекция Чаев",
        filter_all: "Все",
        filter_black: "Черный Чай",
        filter_green: "Зеленый Чай",
        filter_fruit: "Фруктовый Чай",
        product_classic_title: "Макси Классик",
        product_classic_desc: "Традиционный черный чай с богатым ароматом.",
        product_green_title: "Макси Зеленый",
        product_green_desc: "Изготовлен из свежесобранных листьев.",
        product_fruit_title: "Макси Фруктовый",
        product_fruit_desc: "Сочетание фруктов и трав.",
        add_to_cart: "Добавить в Корзину",
        history_title: "История Бренда",
        history_desc: "Макси Чай – лидер производства чая в Казахстане с 1995 года. Мы предлагаем премиум чай, используя натуральные ингредиенты и традиционные методы. Наша миссия – дарить истинное удовольствие с каждой чашкой чая.",
        history_more: "Подробнее",
        contact_title: "Связаться с Нами",
        contact_name: "Ваше Имя",
        contact_email: "Электронная почта",
        contact_message: "Сообщение",
        contact_submit: "Отправить",
        distributors_title: "Дистрибьюторы",
        distributor_almaty_title: "Алматы",
        distributor_almaty_address: "Адрес: Проспект Абая 123",
        distributor_almaty_phone: "Телефон: +7 (727) 123-45-67",
        distributor_almaty_email: "Email: almaty@maxitea.kz",
        distributor_astana_title: "Астана",
        distributor_astana_address: "Адрес: Проспект Республики 45",
        distributor_astana_phone: "Телефон: +7 (717) 987-65-43",
        distributor_astana_email: "Email: astana@maxitea.kz",
        cart_title: "Ваша Корзина",
        cart_total: "Итого: 0 KZT",
        cart_checkout: "Оформить Заказ",
        footer_copyright: "© 2025 Макси Чай. Все права защищены."
    },
    en: {
        title: "Maxi Tea - The Taste of Premium Tea",
        nav_home: "Home",
        nav_products: "Our Teas",
        nav_history: "Brand History",
        nav_contact: "Contact",
        hype_distributors: "Distributors",
        hero_title: "Maxi Tea",
        hero_subtitle: "A blend of natural taste and premium quality",
        hero_cta: "View Collection",
        products_title: "Our Tea Collection",
        filter_all: "All",
        filter_black: "Black Tea",
        filter_green: "Green Tea",
        filter_fruit: "Fruit Tea",
        product_classic_title: "Maxi Classic",
        product_classic_desc: "Traditional black tea with a rich aroma.",
        product_green_title: "Maxi Green",
        product_green_desc: "Made from freshly picked leaves.",
        product_fruit_title: "Maxi Fruit",
        product_fruit_desc: "A blend of fruits and herbs.",
        add_to_cart: "Add to Cart",
        history_title: "Brand History",
        history_desc: "Since 1995, Maxi Tea has been a leader in tea production in Kazakhstan. We offer premium tea using natural ingredients and traditional methods. Our mission is to bring true enjoyment with every cup of tea.",
        history_more: "Learn More",
        contact_title: "Contact Us",
        contact_name: "Your Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_submit: "Submit",
        distributors_title: "Distributors",
        distributor_almaty_title: "Almaty",
        distributor_almaty_address: "Address: Abay Avenue 123",
        distributor_almaty_phone: "Phone: +7 (727) 123-45-67",
        distributor_almaty_email: "Email: almaty@maxitea.kz",
        distributor_astana_title: "Astana",
        distributor_astana_address: "Address: Republic Avenue 45",
        distributor_astana_phone: "Phone: +7 (717) 987-65-43",
        distributor_astana_email: "Email: astana@maxitea.kz",
        cart_title: "Your Cart",
        cart_total: "Total: 0 KZT",
        cart_checkout: "Checkout",
        footer_copyright: "© 2025 Maxi Tea. All rights reserved."
    }
};

// Тіл ауыстыру функциясы
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translations[lang][key];
    });
    document.title = translations[lang].title;
    updateCart();
}

// Тіл селекторын тыңдау
document.getElementById('language').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

// Әдепкі тіл - қазақша
changeLanguage('kk');

// Мобильді мәзір
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Байланыс формасы
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    console.log('Форма жіберілді:', { name, email, message });
    alert(translations[document.getElementById('language').value].contact_submit + '!');
    e.target.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Себет логикасы
let cart = [];

function addToCart(id, name, price) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const lang = document.getElementById('language').value;
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${translations[lang][`product_${item.id === 1 ? 'classic' : item.id === 2 ? 'green' : 'fruit'}_title`]} x${item.quantity}</span>
            <span>${item.price * item.quantity} KZT</span>
        `;
        cartItems.appendChild(div);
    });
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = `${translations[lang].cart_total.split(':')[0]}: ${total} KZT`;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.dataset.id);
        const name = button.parentElement.querySelector('h3').textContent;
        const price = parseInt(button.parentElement.querySelector('.price').textContent);
        addToCart(id, name, price);
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    alert('Төлем жүйесіне қосылу қажет!');
});

// Өнім сүзгілері
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        document.querySelectorAll('.product-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Google Maps
function initMap() {
    const almaty = { lat: 43.238949, lng: 76.889709 };
    const astana = { lat: 51.180103, lng: 71.445981 };

    const mapAlmaty = new google.maps.Map(document.getElementById('map-almaty'), {
        zoom: 14,
        center: almaty
    });
    new google.maps.Marker({ position: almaty, map: mapAlmaty });

    const mapAstana = new google.maps.Map(document.getElementById('map-astana'), {
        zoom: 14,
        center: astana
    });
    new google.maps.Marker({ position: astana, map: mapAstana });
}

window.onload = initMap;

// GSAP анимациялары
// Басты беттің "бомба" эффектісі
gsap.from('.hero-content', {
    duration: 2,
    scale: 0.1,
    opacity: 0,
    ease: 'elastic.out(1, 0.3)',
    onStart: () => {
        gsap.to('.hero-content', {
            duration: 0.8,
            boxShadow: '0 0 100px rgba(244, 208, 63, 1)',
            repeat: 3,
            yoyo: true
        });
    }
});

// Навигация анимациясы
gsap.from('.navbar', {
    duration: 1.5,
    y: -100,
    ease: 'power4.out'
});

// Өнім карточкалары
gsap.utils.toArray('.product-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 1.2,
        y: 150,
        opacity: 0,
        ease: 'power4.out',
        rotateX: 30,
        transformOrigin: 'center bottom'
    });
});

// Бренд тарихы
gsap.from('.history-content', {
    scrollTrigger: {
        trigger: '.history',
        start: 'top 85%'
    },
    duration: 1.5,
    opacity: 0,
    x: -200,
    ease: 'power4.out'
});

// Байланыс формасы
gsap.from('#contact-form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 85%'
    },
    duration: 1.2,
    scale: 0.7,
    opacity: 0,
    ease: 'elastic.out(1, 0.5)'
});

// Дистрибьюторлар
gsap.utils.toArray('.distributor-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%'
        },
        duration: 1.2,
        x: 200,
        opacity: 0,
        ease: 'power4.out'
    });
});

// Себет
gsap.from('.cart', {
    scrollTrigger: {
        trigger: '.cart',
        start: 'top 85%'
    },
    duration: 1.2,
    opacity: 0,
    y: 100,
    ease: 'power4.out'
});

// Particles.js конфигурациясы
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#f4d03f', '#1a3c34'] },
        shape: { type: 'circle' },
        opacity: { value: 0.6, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});