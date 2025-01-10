window.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
    
    const elements = document.querySelectorAll('[data-rst-counter-id]');
    elements.forEach(element => {
        // Get the value of the data-rst-counter-id attribute
        const counterId = element.getAttribute('data-rst-counter-id');

        // Find the element with the id equal to the counterId
        const targetElement = document.getElementById(counterId);
        if (!targetElement) return;
        
        const counterSpan = targetElement.querySelector('.counter');
        if (!counterSpan) return;

        const counterValue = counterSpan.textContent;
        if (!counterValue) return;

        element.textContent = counterValue;
    });
});

export function copyCode(selectorString) {
    const element = document.querySelector(selectorString);
    if (!element) {
        console.error(`Element not found for selector: ${selectorString}`);
        return;
    }

    const codeBlock = element.querySelector('code');
    if (!codeBlock) {
        console.error(`Code block not found inside element: ${selectorString}`);
        return;
    }
    
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
window.copyCode = copyCode; // Makes sure copyCode is callable.