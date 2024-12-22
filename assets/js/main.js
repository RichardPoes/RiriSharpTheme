window.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('[data-rst-counter-id]');
    elements.forEach(element => {
        // Get the value of the data-rst-counter-id attribute
        const counterId = element.getAttribute('data-rst-counter-id');

        // Find the element with the id equal to the counterId
        const targetElement = document.getElementById(counterId);
        console.log(targetElement);
        if (!targetElement) return;
        
        const counterSpan = targetElement.querySelector('.counter');
        if (!counterSpan) return;

        const counterValue = counterSpan.textContent;
        if (!counterValue) return;

        element.textContent = counterValue;
    });
});