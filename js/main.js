/* ========================================
   SoftwareSlice - Main JavaScript
   ======================================== */

// === Language System ===
const translations = {
  // Navigation
  'nav.home': { pl: 'Strona Glowna', en: 'Home' },
  'nav.categories': { pl: 'Kategorie', en: 'Categories' },
  'nav.reviews': { pl: 'Recenzje', en: 'Reviews' },
  'nav.about': { pl: 'O Nas', en: 'About' },
  'nav.contact': { pl: 'Kontakt', en: 'Contact' },
  'nav.search': { pl: 'Szukaj oprogramowania...', en: 'Search software...' },

  // Hero
  'hero.badge': { pl: 'Zaufane Recenzje Oprogramowania', en: 'Trusted Software Reviews' },
  'hero.title1': { pl: 'Znajdz Idealne', en: 'Find Your Perfect' },
  'hero.title2': { pl: 'Oprogramowanie', en: 'Software' },
  'hero.desc': { pl: 'Dostarczamy szczegolowe, uczciwe recenzje oprogramowania, ktore pomoga Ci podejmowac lepsze decyzje. Od narzedzi biurowych po oprogramowanie do projektowania \u2014 testujemy wszystko.', en: 'We deliver detailed, honest software reviews to help you make better decisions. From office tools to design software \u2014 we test everything.' },
  'hero.btn1': { pl: 'Przegladaj Recenzje', en: 'Browse Reviews' },
  'hero.btn2': { pl: 'Zobacz Kategorie', en: 'View Categories' },
  'hero.stat1': { pl: 'Recenzji', en: 'Reviews' },
  'hero.stat2': { pl: 'Kategorii', en: 'Categories' },
  'hero.stat3': { pl: 'Uzytkownikow', en: 'Users' },

  // Section Headers
  'categories.title': { pl: 'Kategorie Oprogramowania', en: 'Software Categories' },
  'categories.desc': { pl: 'Przegladaj nasze recenzje wedlug kategorii i znajdz najlepsze oprogramowanie dla swoich potrzeb.', en: 'Browse our reviews by category and find the best software for your needs.' },
  'latest.title': { pl: 'Najnowsze Recenzje', en: 'Latest Reviews' },
  'latest.desc': { pl: 'Najswiezsze recenzje oprogramowania od naszego zespolu ekspertow.', en: 'The freshest software reviews from our expert team.' },
  'cta.title': { pl: 'Badz na Biezaco', en: 'Stay Updated' },
  'cta.desc': { pl: 'Zapisz sie do naszego newslettera i otrzymuj najnowsze recenzje oprogramowania prosto na skrzynke.', en: 'Subscribe to our newsletter and get the latest software reviews delivered to your inbox.' },
  'cta.placeholder': { pl: 'Twoj adres email', en: 'Your email address' },
  'cta.btn': { pl: 'Subskrybuj', en: 'Subscribe' },

  // Categories
  'cat.office': { pl: 'Biuro i Produktywnosc', en: 'Office & Productivity' },
  'cat.office.desc': { pl: 'Edytory tekstu, arkusze kalkulacyjne, prezentacje i narzedzia do zarzadzania dokumentami.', en: 'Word processors, spreadsheets, presentations, and document management tools.' },
  'cat.design': { pl: 'Projektowanie i Grafika', en: 'Design & Creative' },
  'cat.design.desc': { pl: 'Edytory graficzne, narzedzia UI/UX, oprogramowanie do modelowania 3D i animacji.', en: 'Graphics editors, UI/UX tools, 3D modeling and animation software.' },
  'cat.dev': { pl: 'Narzedzia Programistyczne', en: 'Development Tools' },
  'cat.dev.desc': { pl: 'IDE, edytory kodu, systemy kontroli wersji i narzedzia deweloperskie.', en: 'IDEs, code editors, version control systems, and developer utilities.' },
  'cat.security': { pl: 'Bezpieczenstwo i Prywatnosc', en: 'Security & Privacy' },
  'cat.security.desc': { pl: 'Antywirusy, VPN-y, menedzery hasel i narzedzia szyfrowania.', en: 'Antivirus, VPNs, password managers, and encryption tools.' },
  'cat.ai': { pl: 'AI i Automatyzacja', en: 'AI & Automation' },
  'cat.ai.desc': { pl: 'Narzedzia sztucznej inteligencji, automatyzacji procesow i uczenia maszynowego.', en: 'Artificial intelligence tools, process automation, and machine learning.' },
  'cat.video': { pl: 'Wideo i Audio', en: 'Video & Audio' },
  'cat.video.desc': { pl: 'Edytory wideo, stacje robocze audio, narzedzia do streamingu i podcastow.', en: 'Video editors, audio workstations, streaming and podcast tools.' },
  'cat.cloud': { pl: 'Chmura i Przechowywanie', en: 'Cloud & Storage' },
  'cat.cloud.desc': { pl: 'Uslugu chmurowe, synchronizacja plikow, kopie zapasowe i hosting.', en: 'Cloud services, file sync, backups, and hosting solutions.' },
  'cat.communication': { pl: 'Komunikacja', en: 'Communication' },
  'cat.communication.desc': { pl: 'Komunikatory, wideokonferencje, poczta email i narzedzia zespolowe.', en: 'Messaging, video conferencing, email, and team collaboration tools.' },
  'cat.pm': { pl: 'Zarzadzanie Projektami', en: 'Project Management' },
  'cat.pm.desc': { pl: 'Narzedzia do planowania, sledzenia zadan, metodyk Agile i wspolpracy zespolowej.', en: 'Planning tools, task tracking, Agile methodologies, and team collaboration.' },

  // Footer
  'footer.desc': { pl: 'Twoje zaufane zrodlo szczegolowych recenzji oprogramowania. Pomagamy podejmowac lepsze decyzje technologiczne.', en: 'Your trusted source for detailed software reviews. We help you make better technology decisions.' },
  'footer.categories': { pl: 'Kategorie', en: 'Categories' },
  'footer.company': { pl: 'Firma', en: 'Company' },
  'footer.legal': { pl: 'Prawne', en: 'Legal' },
  'footer.about': { pl: 'O Nas', en: 'About Us' },
  'footer.contact': { pl: 'Kontakt', en: 'Contact' },
  'footer.privacy': { pl: 'Polityka Prywatnosci', en: 'Privacy Policy' },
  'footer.disclaimer': { pl: 'Zastrzezenia', en: 'Disclaimer' },
  'footer.terms': { pl: 'Regulamin', en: 'Terms of Use' },
  'footer.rights': { pl: 'Wszelkie prawa zastrzezone.', en: 'All rights reserved.' },

  // About Page
  'about.title': { pl: 'O SoftwareSlice', en: 'About SoftwareSlice' },
  'about.desc': { pl: 'Poznaj nasz zespol i misje stojaca za najlepszymi recenzjami oprogramowania w Polsce.', en: 'Meet our team and the mission behind the best software reviews in Poland.' },
  'about.mission.title': { pl: 'Nasza Misja', en: 'Our Mission' },
  'about.mission.p1': { pl: 'SoftwareSlice to niezalezna platforma recenzji oprogramowania, ktora powstala z pasji do technologii i checi pomocy innym w wyborze najlepszych narzedzi.', en: 'SoftwareSlice is an independent software review platform born from a passion for technology and the desire to help others choose the best tools.' },
  'about.mission.p2': { pl: 'Nasz zespol doswiadczonych recenzentow testuje kazde oprogramowanie w rzeczywistych warunkach, aby dostarczyc Ci najbardziej wiarygodne i przydatne recenzje.', en: 'Our team of experienced reviewers tests every software in real-world conditions to provide you with the most reliable and useful reviews.' },
  'about.mission.p3': { pl: 'Wierzymy w przejrzystosc \u2014 nasze recenzje sa uczciwe, szczegolowe i wolne od wplywu producentow oprogramowania.', en: 'We believe in transparency \u2014 our reviews are honest, detailed, and free from software vendor influence.' },
  'about.values': { pl: 'Nasze Wartosci', en: 'Our Values' },
  'about.value1.title': { pl: 'Uczciwosc', en: 'Honesty' },
  'about.value1.desc': { pl: 'Kazda recenzja jest pisana uczciwie i bezstronnie, niezaleznie od partnerstw afiliacyjnych.', en: 'Every review is written honestly and impartially, regardless of affiliate partnerships.' },
  'about.value2.title': { pl: 'Dokladnosc', en: 'Thoroughness' },
  'about.value2.desc': { pl: 'Testujemy kazde oprogramowanie gruntownie, sprawdzajac wszystkie funkcje i mozliwosci.', en: 'We test every software thoroughly, checking all features and capabilities.' },
  'about.value3.title': { pl: 'Przejrzystosc', en: 'Transparency' },
  'about.value3.desc': { pl: 'Jasno oznaczamy linki afiliacyjne i informujemy o naszym modelu biznesowym.', en: 'We clearly mark affiliate links and inform about our business model.' },

  // Contact Page
  'contact.title': { pl: 'Skontaktuj sie z Nami', en: 'Contact Us' },
  'contact.desc': { pl: 'Masz pytanie, sugestie lub chcesz nawiazac wspolprace? Chcielibysmy uslyszec od Ciebie.', en: 'Have a question, suggestion, or want to collaborate? We would love to hear from you.' },
  'contact.name': { pl: 'Imie i Nazwisko', en: 'Full Name' },
  'contact.email': { pl: 'Adres Email', en: 'Email Address' },
  'contact.subject': { pl: 'Temat', en: 'Subject' },
  'contact.message': { pl: 'Wiadomosc', en: 'Message' },
  'contact.send': { pl: 'Wyslij Wiadomosc', en: 'Send Message' },
  'contact.general': { pl: 'Ogolne Pytania', en: 'General Inquiries' },
  'contact.general.desc': { pl: 'Skontaktuj sie z nami w sprawie pytan ogolnych.', en: 'Reach out to us for general questions.' },
  'contact.business': { pl: 'Wspolpraca Biznesowa', en: 'Business Collaboration' },
  'contact.business.desc': { pl: 'Zainteresowany partnerstwem? Porozmawiajmy.', en: 'Interested in partnership? Let\'s talk.' },
  'contact.review': { pl: 'Prosba o Recenzje', en: 'Review Request' },
  'contact.review.desc': { pl: 'Chcesz, zebysmy zrecenzowali Twoje oprogramowanie?', en: 'Want us to review your software?' },

  // Review Detail
  'review.verdict': { pl: 'Werdykt', en: 'Verdict' },
  'review.pros': { pl: 'Zalety', en: 'Pros' },
  'review.cons': { pl: 'Wady', en: 'Cons' },
  'review.pricing': { pl: 'Cennik', en: 'Pricing' },
  'review.overview': { pl: 'Przeglad', en: 'Overview' },
  'review.features': { pl: 'Funkcje', en: 'Key Features' },
  'review.tryit': { pl: 'Wyprobuj Teraz', en: 'Try It Now' },
  'review.affiliate': { pl: 'Ten link jest linkiem afiliacyjnym. Mozemy otrzymac prowizje bez dodatkowych kosztow dla Ciebie.', en: 'This is an affiliate link. We may earn a commission at no extra cost to you.' },
  'review.readmore': { pl: 'Czytaj Wiecej', en: 'Read More' },

  // Privacy & Disclaimer
  'privacy.title': { pl: 'Polityka Prywatnosci', en: 'Privacy Policy' },
  'disclaimer.title': { pl: 'Zastrzezenia Prawne', en: 'Legal Disclaimer' },

  // Category pages
  'cat.page.software': { pl: 'programow', en: 'software' },
  'cat.page.all': { pl: 'Wszystkie', en: 'All' },
  'cat.page.free': { pl: 'Darmowe', en: 'Free' },
  'cat.page.paid': { pl: 'Platne', en: 'Paid' },
  'cat.page.popular': { pl: 'Popularne', en: 'Popular' },

  // Common
  'common.viewall': { pl: 'Zobacz Wszystkie', en: 'View All' },
  'common.learnmore': { pl: 'Dowiedz sie wiecej', en: 'Learn More' },
};

// Language state
let currentLang = localStorage.getItem('softwareslice-lang') || 'pl';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('softwareslice-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][lang]) {
      el.setAttribute('placeholder', translations[key][lang]);
    }
  });

  // Update lang switcher button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// === Navbar Scroll Effect ===
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// === Mobile Menu ===
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// === Scroll Animations ===
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// === Search Functionality ===
function initSearch() {
  const searchInput = document.querySelector('.nav-search input');
  if (!searchInput) return;

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      // Simple search - redirect to categories with search param
      const query = encodeURIComponent(searchInput.value.trim());
      window.location.href = `categories.html?search=${query}`;
    }
  });
}

// === Newsletter Form ===
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input.value.trim()) {
      const msg = currentLang === 'pl'
        ? 'Dziekujemy za subskrypcje!'
        : 'Thank you for subscribing!';
      alert(msg);
      input.value = '';
    }
  });
}

// === Contact Form ===
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = currentLang === 'pl'
      ? 'Dziekujemy za wiadomosc! Odpowiemy najszybciej jak to mozliwe.'
      : 'Thank you for your message! We will respond as soon as possible.';
    alert(msg);
    form.reset();
  });
}

// === Language Switcher ===
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// === Active Nav Link ===
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// === Counter Animation ===
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        const suffix = entry.target.dataset.suffix || '';
        let current = 0;
        const increment = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = current.toLocaleString() + suffix;
        }, 20);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// === Init All ===
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initSearch();
  initNewsletter();
  initContactForm();
  initLangSwitcher();
  setActiveNavLink();
  animateCounters();

  // Set initial language
  setLanguage(currentLang);
});
