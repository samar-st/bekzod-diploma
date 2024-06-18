const numberInput3 = document.getElementById('numberInput3');
    const messageDiv3 = document.getElementById('message3');
    let previousValue3 = '';

    numberInput3.addEventListener('input', () => {
        const value = numberInput3.value;

        if (value === '') {
            previousValue3 = '';
            messageDiv3.textContent = '';
            return;
        }

        const intValue3 = parseInt(value);

        if (intValue3 > 20) {
            numberInput3.value = previousValue3;
            messageDiv3.textContent = "Number must be between 1 and 20.";
        } else if (intValue3 < 1 || isNaN(intValue3)) {
            numberInput3.value = '';
            previousValue3 = '';
            messageDiv3.textContent = "Please enter a valid number between 1 and 20.";
        } else {
            previousValue3 = value;
            messageDiv3.textContent = '';
        }
    });
    // 
    // 
    const numberInput6 = document.getElementById('numberInput6');
    const messageDiv6 = document.getElementById('message6');

    numberInput6.addEventListener('blur', () => {
        const value = parseInt(numberInput6.value);

        if (value > 1600) {
            messageDiv6.textContent = "Number must be between 800 and 1600. " + value + " is not a valid input.";
            numberInput6.value = "";
        } else if (value < 800) {
            messageDiv6.textContent = "Number must be between 800 and 1600. " + value + " is not a valid input.";
            numberInput6.value = "";
        } else {
            messageDiv6.textContent = "";
        }
    });
    