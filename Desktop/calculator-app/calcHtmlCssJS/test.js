const displayEl = document.getElementById('display');
const keys = document.querySelectorAll('button');
const equalBtn = document.getElementById('equal');


keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let val = key.dataset.key;
        if (val !== "=") {  // Prevent "=" from being added
            displayEl.value += val;
        }
    });
});

equalBtn.addEventListener('click', () => {
    try {
        let expression = displayEl.value;
        if (!expression) 
            return; // Avoid evaluating empty input
        let ans = eval(expression);
        displayEl.value = ans;
    } catch (error) {
        displayEl.value = "Error";
    }
});

