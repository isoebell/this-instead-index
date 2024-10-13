document.querySelectorAll('.grid-container .item').forEach(item => {
    const title = item.querySelector('.title');
    const info = item.querySelector('.infoText');

    // Add click event to the title
    if (title) {
        title.addEventListener('click', () => {
            // Toggle the visibility of the info paragraph
            info.classList.toggle('hidden');
        });
    }
});
