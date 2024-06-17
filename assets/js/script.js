document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            playSound(key.dataset.note);
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = document.querySelector(`.key[data-note="${e.key.toUpperCase()}"]`);
        if (key) playSound(key.dataset.note);
    });

    function playSound(note) {
        const audio = new Audio(`sounds/${note}.wav`);
        audio.play();
    }
});
