window.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();

    setCountersForShortCodes();
    copyCounterValuesToCrefs();
});

function setCountersForShortCodes() {
    const counters = document.querySelectorAll('[data-rst-counter-type]');
    // Group counters by their data-rst-counter-type attribute
    const groupedCounters = {};
    counters.forEach(counter => {
        const type = counter.getAttribute('data-rst-counter-type');
        if (!groupedCounters[type]) {
            groupedCounters[type] = [];
        }
        groupedCounters[type].push(counter);
    });

    // Iterate over each group and set the .counter span to the index i
    Object.keys(groupedCounters).forEach(type => {
        groupedCounters[type].forEach((counter, i) => {
            const span = counter.querySelector('.counter');
            if (span) {
                span.textContent = i + 1;
            }
        });
    });
}

function copyCounterValuesToCrefs() {
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
}

function copyCode(selectorString) {
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