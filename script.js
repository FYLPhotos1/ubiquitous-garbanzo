document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-button');
    const titleScreen = document.getElementById('title-screen');

    startBtn.addEventListener('click', () => {
        titleScreen.classList.add('fade-out');
    });
});
