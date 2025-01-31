const contrastToggle = document.getElementById('contrast-toggle');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const textSizeSelect = document.getElementById('text-size-select');

contrastToggle.addEventListener('change', () => {
    document.body.classList.toggle('high-contrast', contrastToggle.checked);
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('high-contrast', contrastToggle.checked);
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('high-contrast', contrastToggle.checked);
    });
});

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('dark-mode', darkModeToggle.checked);
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});

textSizeSelect.addEventListener('change', () => {
    document.body.classList.remove('small-text', 'medium-text', 'large-text', 'x-large-text');
    document.body.classList.add(`${textSizeSelect.value}-text`);
});