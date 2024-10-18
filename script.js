// Handle About section
document.querySelectorAll('.about .item').forEach(item => {
    const title = item.querySelector('.title');
    const info = item.querySelector('.infoText');
    const contentContainer = document.querySelector('.content-container');

    if (title) {
        title.addEventListener('click', () => {
            info.classList.toggle('hidden');
            contentContainer.classList.toggle('fade', !info.classList.contains('hidden'));
        });
    }
});

// Handle Submit section
document.querySelectorAll('.submit .item').forEach(item => {
    const title = item.querySelector('.title');
    const info = item.querySelector('.infoText');
    const contentContainer = document.querySelector('.content-container');

    if (title) {
        title.addEventListener('click', () => {
            info.classList.toggle('hidden');
            contentContainer.classList.toggle('fade', !info.classList.contains('hidden'));
        });
    }
});

// Handle Items List
document.querySelectorAll('.grid-container .item').forEach(item => {
    const title = item.querySelector('.title');
    const info = item.querySelector('.infoText');

    if (title) {
        title.addEventListener('click', () => {
            // Toggle the visibility of the info paragraph
            info.classList.toggle('hidden');
        });
    }
});
