// Optional JavaScript for added interactivity
document.querySelectorAll('.link-button, .button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button clicked: ${button.textContent}`);
    });
});
