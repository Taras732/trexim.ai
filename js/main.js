// ==================== TRANSLATION SYSTEM ====================
const translations = {
    uk: {
        'hero-title': 'Логістика нового рівня',
        'hero-subtitle': 'TREXIM AI — перша операційна екосистема для управління логістичними потоками України. Автоматизація замовлень, оптимізація маршрутів, прозорість у реальному часі.',
        'cta-pilot': 'Запустити пілот',
        'cta-learn': 'Дізнатися більше',
        'features-title': 'Ключові можливості',
        'f1-title': 'Управління замовленнями',
        'f1-text': 'Централізована система для управління всіма доставками в реальному часі. Від створення до доставки.',
        'f2-title': 'Оптимізація маршрутів',
        'f2-text': 'AI-розумна маршрутизація для економії часу та коштів. Економія палива до 30%.',
        'f3-title': 'Аналітика в реальному часі',
        'f3-text': 'Детальні звіти та метрики для прийняття рішень. Прозорість на кожному кроці.',
        'f4-title': 'Інтеграція з партнерами',
        'f4-text': 'Підключення банків, страховиків, сервісів платежів. API-first архітектура.',
        'f5-title': 'E-TTN інтеграція',
        'f5-text': 'Автоматична інтеграція з системою Е-ТТН. Нульові санкції від держави.',
        'f6-title': 'Безпека & Контроль',
        'f6-text': 'Шифрування даних, логування операцій, контроль доступу. Compliance з GDPR.',
        'eco-title': 'Операційна екосистема',
        'eco-desc': 'TREXIM AI об\'єднує всіх учасників логістичного ринку: перевізників, замовників, партнерів та сервісів. Один платформа для всього.',
        'eco-l1': 'Замовники доставки',
        'eco-l2': 'Перевізники & Логісти',
        'eco-l3': 'Фінансові партнери',
        'eco-l4': 'Технологічні сервіси',
        'eco-l5': 'Страховики & Юристи',
        'roadmap-title': 'Дорожна карта розвитку',
        'r1-text': 'Розробка платформи, дослідження ринку, побудова партнерств з ключовими гравцями логістики.',
        'r2-text': 'Запуск пілоту з 100+ компаніями. Реєстрація, аналітика, чати. Інтеграція з Widion, E-TTN.',
        'r3-text': 'Масштабування до 750+ компаній, 12К рейсів на місяць. 2FA, контроль T3, мобільний додаток.',
        'r4-text': 'Експансія в ЄС, нові модулі (фінанси, страхування), система мотивації партнерів.',
        'cta-title': 'Готові почати?',
        'cta-desc': 'Приєднайтесь до першої операційної екосистеми логістики України. Запишіться на пілот вже сьогодні.',
        'subscribe-btn': 'Записатися',
        'footer-text': '© 2026 TREXIM AI. Усі права захищені.',
        'email-placeholder': 'ваш@email.com',
        'modal-title': 'Запустити пілот',
        'label-name': 'Ім\'я *',
        'label-phone': 'Телефон *',
        'label-company': 'Компанія',
        'label-message': 'Повідомлення',
        'submit-btn': 'Відправити',
        'nav-features': 'Можливості',
        'nav-ecosystem': 'Екосистема',
        'nav-roadmap': 'Roadmap',
        'nav-contacts': 'Контакти'
    },
    en: {
        'hero-title': 'Logistics of the Future',
        'hero-subtitle': 'TREXIM AI is the first operational ecosystem for managing logistics flows in Ukraine. Order automation, route optimization, real-time transparency.',
        'cta-pilot': 'Start Pilot',
        'cta-learn': 'Learn More',
        'features-title': 'Key Features',
        'f1-title': 'Order Management',
        'f1-text': 'Centralized system for managing all deliveries in real-time. From creation to delivery.',
        'f2-title': 'Route Optimization',
        'f2-text': 'AI-smart routing to save time and money. Fuel savings up to 30%.',
        'f3-title': 'Real-Time Analytics',
        'f3-text': 'Detailed reports and metrics for decision making. Transparency at every step.',
        'f4-title': 'Partner Integration',
        'f4-text': 'Connection with banks, insurers, payment services. API-first architecture.',
        'f5-title': 'E-TTN Integration',
        'f5-text': 'Automatic integration with E-TTN system. Zero state penalties.',
        'f6-title': 'Security & Control',
        'f6-text': 'Data encryption, operation logging, access control. GDPR compliant.',
        'eco-title': 'Operational Ecosystem',
        'eco-desc': 'TREXIM AI unites all participants of the logistics market: carriers, customers, partners and services. One platform for everything.',
        'eco-l1': 'Shippers',
        'eco-l2': 'Carriers & Logistics',
        'eco-l3': 'Financial Partners',
        'eco-l4': 'Tech Services',
        'eco-l5': 'Insurers & Lawyers',
        'roadmap-title': 'Development Roadmap',
        'r1-text': 'Platform development, market research, building partnerships with key logistics players.',
        'r2-text': 'Pilot launch with 100+ companies. Registration, analytics, chats. Integration with Widion, E-TTN.',
        'r3-text': 'Scale to 750+ companies, 12K trips per month. 2FA, T3 control, mobile app.',
        'r4-text': 'EU expansion, new modules (finance, insurance), partner incentive system.',
        'cta-title': 'Ready to Start?',
        'cta-desc': 'Join Ukraine\'s first operational logistics ecosystem. Sign up for the pilot today.',
        'subscribe-btn': 'Subscribe',
        'footer-text': '© 2026 TREXIM AI. All rights reserved.',
        'email-placeholder': 'your@email.com',
        'modal-title': 'Start Pilot',
        'label-name': 'Name *',
        'label-phone': 'Phone *',
        'label-company': 'Company',
        'label-message': 'Message',
        'submit-btn': 'Submit',
        'nav-features': 'Features',
        'nav-ecosystem': 'Ecosystem',
        'nav-roadmap': 'Roadmap',
        'nav-contacts': 'Contacts'
    }
};

let currentLanguage = 'uk';

// ==================== LANGUAGE SWITCHING ====================
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Оновити всі текстові елементи
    const dict = translations[lang];
    
    for (let key in dict) {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.type === 'email') {
                element.placeholder = dict[key];
            } else {
                element.textContent = dict[key];
            }
        }
    }
    
    // Оновити меню навігацію
    document.getElementById('nav-features').textContent = dict['nav-features'];
    document.getElementById('nav-ecosystem').textContent = dict['nav-ecosystem'];
    document.getElementById('nav-roadmap').textContent = dict['nav-roadmap'];
    document.getElementById('nav-contacts').textContent = dict['nav-contacts'];
    
    // Оновити активну кнопку мови
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Оновити атрибут lang документа
    document.documentElement.lang = lang;
    
    // Зберегти вибір в localStorage
    localStorage.setItem('trexim-language', lang);
}


// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Завантажити збережену мову
    const savedLang = localStorage.getItem('trexim-language') || 'uk';
    switchLanguage(savedLang);
    
    // ==================== LANGUAGE BUTTONS ====================
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // ==================== CONTACT FORM MODAL ====================
    const pilotBtn = document.getElementById('cta-pilot');
    const contactModal = document.getElementById('contactModal');
    const modalClose = document.querySelector('.modal-close');
    const contactForm = document.getElementById('contactForm');

    if (pilotBtn) {
        pilotBtn.addEventListener('click', function() {
            // Відкрити модальне вікно
            contactModal.style.display = 'block';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            // Закрити модальне вікно
            contactModal.style.display = 'none';
        });
    }

    // Закрити при кліку поза формою
    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Обробка форми
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Отримати значення з форми
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();

            // Валідація обов'язкових полів
            if (!name) {
                alert(currentLanguage === 'uk' ? 'Введіть ім\'я' : 'Please enter your name');
                return;
            }

            if (!phone) {
                alert(currentLanguage === 'uk' ? 'Введіть телефон' : 'Please enter your phone');
                return;
            }

            // Валідація телефону (мінімум 10 цифр)
            const phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length < 10) {
                alert(currentLanguage === 'uk' ? 'Введіть коректний телефон' : 'Please enter a valid phone number');
                return;
            }

            // Отримати кнопку відправлення
            const submitBtn = document.getElementById('submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = currentLanguage === 'uk' ? 'Надсилаю...' : 'Sending...';

            // Формування FormData для Formspree
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('company', document.getElementById('company').value.trim() || 'Не вказано');
            formData.append('message', document.getElementById('message').value.trim() || 'Не вказано');
            formData.append('email', 'smaliukhtaras@gmail.com');
            formData.append('_subject', 'Запит на пілот TREXIM AI');

            // Відправити на Formspree БЕЗ редиректу
            fetch('https://formspree.io/f/mnjneyre', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Скрити форму, показати success modal
                    contactModal.style.display = 'none';
                    
                    // Оновити текст success modal для поточної мови
                    const successModal = document.getElementById('successModal');
                    document.getElementById('success-title').textContent = 
                        currentLanguage === 'uk' ? 'Спасибі!' : 'Thank You!';
                    document.getElementById('success-message').textContent = 
                        currentLanguage === 'uk' 
                        ? 'Ваша заявка успішно відправлена. Ми скоро зв\'яжемося з вами.'
                        : 'Your request has been successfully sent. We will contact you soon.';
                    document.getElementById('success-btn-text').textContent = 
                        currentLanguage === 'uk' ? 'Закрити' : 'Close';
                    
                    // Показати success modal
                    successModal.style.display = 'block';
                    
                    // Очистити форму
                    contactForm.reset();
                    
                    // Повернути кнопку в нормальний стан
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    
                    // Автоматично закрити success modal через 5 секунд
                    setTimeout(() => {
                        successModal.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                alert(currentLanguage === 'uk'
                    ? 'Помилка при відправці. Спробуйте пізніше.'
                    : 'Error sending form. Please try again.');
                
                // Повернути кнопку в нормальний стан
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            });
        });
    }



    // ==================== LEARN MORE - OPEN PDF ====================
    const learnBtn = document.getElementById('cta-learn');
    if (learnBtn) {
        learnBtn.addEventListener('click', function() {
            // Відкрити PDF в новій вкладці
            window.open('assets/TREXIM_presentation.pdf', '_blank');
        });
    }

    // ==================== SUBSCRIBE BUTTON ====================
    const subscribeBtn = document.getElementById('subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const email = document.getElementById('email-input').value.trim();
            
            if (!email) {
                alert(currentLanguage === 'uk' 
                    ? 'Введіть email'
                    : 'Please enter email');
                return;
            }

            if (!isValidEmail(email)) {
                alert(currentLanguage === 'uk' 
                    ? 'Введіть коректний email'
                    : 'Please enter a valid email');
                return;
            }

            const msg = currentLanguage === 'uk' 
                ? 'Спасибі! ' + email + ' зареєстровано.'
                : 'Thank you! ' + email + ' has been registered.';
            alert(msg);
            document.getElementById('email-input').value = '';
        });

        // Дозволити надсилання по Enter
        document.getElementById('email-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ==================== UTILITY FUNCTIONS ====================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
