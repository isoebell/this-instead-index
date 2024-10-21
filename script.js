// Function to hide all info sections
function hideAllInfo() {
    document.querySelectorAll('.infoText').forEach(info => {
        info.classList.add('hidden');
    });
    document.querySelector('.content-container').classList.remove('fade');
}

// Handle About section
document.querySelectorAll('.about .item').forEach(item => {
    const title = item.querySelector('.title');
    const info = item.querySelector('.infoText');
    const contentContainer = document.querySelector('.content-container');

    if (title) {
        title.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the document click from firing
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
        title.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the document click from firing
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
        title.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the document click from firing
            info.classList.toggle('hidden');
        });
    }
});

// Handle clicks on the document
document.addEventListener('click', () => {
    hideAllInfo(); // Hide all info sections when clicking anywhere else
});
