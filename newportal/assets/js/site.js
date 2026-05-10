const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');
const nepaliDate = document.getElementById('nepali-date');
const tickerTrack = document.getElementById('ticker-track');

if (menuToggle && mainMenu) {
    const openIcon = menuToggle.querySelector('[data-menu-icon="open"]');
    const closeIcon = menuToggle.querySelector('[data-menu-icon="close"]');

    const syncMenuState = () => {
        const isOpen = !mainMenu.classList.contains('hidden');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

        if (openIcon) {
            openIcon.classList.toggle('hidden', isOpen);
        }

        if (closeIcon) {
            closeIcon.classList.toggle('hidden', !isOpen);
        }
    };

    menuToggle.addEventListener('click', () => {
        mainMenu.classList.toggle('hidden');
        syncMenuState();
    });

    syncMenuState();
}

if (nepaliDate) {
    const days = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार'];
    const months = ['जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'];
    const now = new Date();
    nepaliDate.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

if (tickerTrack) {
    tickerTrack.addEventListener('mouseenter', () => {
        tickerTrack.style.animationPlayState = 'paused';
    });
    tickerTrack.addEventListener('mouseleave', () => {
        tickerTrack.style.animationPlayState = 'running';
    });
}