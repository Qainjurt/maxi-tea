document.getElementById('header').innerHTML = `
    <header>
        <nav class="navbar">
            <div class="logo">
                <img src="images/logo.png" alt="Макси Чай Логотипі" class="logo-img">
            </div>
            <ul class="nav-links">
                <li><a href="index.html" data-i18n="nav_home">Басты</a></li>
                <li><a href="products.html" data-i18n="nav_products">Біздің Шай</a></li>
                <li><a href="history.html" data-i18n="nav_history">Бренд Тарихы</a></li>
                <li><a href="contact.html" data-i18n="nav_contact">Байланыс</a></li>
                <li><a href="distributors.html" data-i18n="nav_distributors">Дистрибьюторлар</a></li>
                <li><a href="eco.html" data-i18n="nav_eco">Экология</a></li>
                <li><a href="culture.html" data-i18n="nav_culture">Шай Мәдениеті</a></li>
                <li><a href="stories.html" data-i18n="nav_stories">Тұтынушы Әңгімелері</a></li>
                <li><a href="tour.html" data-i18n="nav_tour">Виртуалды Тур</a></li>
            </ul>
            <div class="language-selector">
                <select id="language">
                    <option value="kk">Қазақша</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>
`;