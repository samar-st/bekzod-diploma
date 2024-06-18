const addButton = document.getElementById("add-button");
    const inputGroupsContainer = document.getElementById("input-groups");
    const fileMessage = document.getElementById("file-message");
    let inputCount = 0;
    let fileCount = 0;

    addButton.addEventListener("click", () => {
        if (inputCount < 10) {
            inputCount++;

            const inputGroup = document.createElement("div");
            inputGroup.classList.add("input-group");
            inputGroup.classList.add("show");

            // Create text input
            const textInput = document.createElement("input");
            textInput.type = "text";
            textInput.placeholder = "Enter text";
            inputGroup.appendChild(textInput);

            // Create file input
            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.addEventListener("change", () => {
                if (fileInput.files.length > 0) {
                    fileCount++;
                    updateFileMessage();
                }
            });
            inputGroup.appendChild(fileInput);

            inputGroupsContainer.appendChild(inputGroup);
        } else {
            alert("Maximum 10 inputs allowed.");
        }
    });

    function updateFileMessage() {
        if (fileCount > 10) {
            fileMessage.textContent = "Maximum 10 files allowed.";
        } else {
            fileMessage.textContent = `${fileCount} file${fileCount > 1 ? 's' : ''} available`;
        }
    }

//
//

const addButton1 = document.getElementById("add-button1");
    const inputGroupsContainer1 = document.getElementById("input-groups1");
    const fileMessage1 = document.getElementById("file-message1");
    let inputCount1 = 0;
    let fileCount1 = 0;

    addButton1.addEventListener("click", () => {
        if (inputCount1 < 10) {
            inputCount1++;

            const inputGroup1 = document.createElement("div");
            inputGroup1.classList.add("input-group");
            inputGroup1.classList.add("show");

            // Create text input
            const textInput1 = document.createElement("input");
            textInput1.type = "text";
            textInput1.placeholder = "Enter text";
            inputGroup1.appendChild(textInput1);

            // Create file input
            const fileInput1 = document.createElement("input");
            fileInput1.type = "file";
            fileInput1.addEventListener("change", () => {
                if (fileInput1.files.length > 0) {
                    fileCount1++;
                    updateFileMessage1();
                }
            });
            inputGroup1.appendChild(fileInput1);

            inputGroupsContainer1.appendChild(inputGroup1);
        } else {
            alert("Maximum 10 inputs allowed.");
        }
    });

    function updateFileMessage1() {
        if (fileCount1 > 10) {
            fileMessage1.textContent = "Maximum 10 files allowed.";
        } else {
            fileMessage1.textContent = `${fileCount1} file${fileCount1 > 1 ? 's' : ''} available`;
        }
    }

//
//
const addButton2 = document.getElementById("add-button2");
const inputGroupsContainer2 = document.getElementById("input-groups2");
let inputCount2 = 0;

addButton2.addEventListener("click", () => {
  if (inputCount2 < 10) {
    inputCount2++;

    const inputGroup2 = document.createElement("div");
    inputGroup2.classList.add("input-group");
    inputGroup2.classList.add("show"); // Show input group immediately

    // Create text input
    const textInput2 = document.createElement("input");
    textInput2.type = "text";
    textInput2.placeholder = "Enter text";
    inputGroup2.appendChild(textInput2);

    // Create file input
    const fileInput2 = document.createElement("input");
    fileInput2.type = "file";
    inputGroup2.appendChild(fileInput2);

    inputGroupsContainer2.appendChild(inputGroup2);
  } else {
    alert("Maximum 10 inputs allowed.");
  }
});

//

// const numberInput3 = document.getElementById('numberInput3');
//     const messageDiv3 = document.getElementById('message3');
//     let previousValue3 = '';

//     numberInput3.addEventListener('input', () => {
//         const value = numberInput3.value;

//         if (value === '') {
//             previousValue3 = '';
//             messageDiv3.textContent = '';
//             return;
//         }

//         const intValue3 = parseInt(value);

//         if (intValue3 > 20) {
//             numberInput3.value = previousValue3;
//             messageDiv3.textContent = "Number must be between 1 and 20.";
//         } else if (intValue3 < 1 || isNaN(intValue3)) {
//             numberInput3.value = '';
//             previousValue3 = '';
//             messageDiv3.textContent = "Please enter a valid number between 1 and 20.";
//         } else {
//             previousValue3 = value;
//             messageDiv3.textContent = '';
//         }
//     });
    // 
    // 
    const numberInput4 = document.getElementById('numberInput4');
    const messageDiv4 = document.getElementById('message4');
    let previousValue4 = '';

    numberInput4.addEventListener('input', () => {
        const value = numberInput4.value;

        if (value === '') {
            previousValue4 = '';
            messageDiv4.textContent = '';
            return;
        }

        const intValue = parseInt(value);

        if (intValue > 10) {
            numberInput4.value = previousValue4;
            messageDiv4.textContent = "Number must be between 1 and 10.";
        } else if (intValue < 1 || isNaN(intValue)) {
            numberInput4.value = '';
            previousValue4 = '';
            messageDiv4.textContent = "Please enter a valid number between 1 and 10.";
        } else {
            previousValue4 = value;
            messageDiv4.textContent = '';
        }
    });

    // 
    // 
    const numberInput5 = document.getElementById('numberInput5');
    const messageDiv5 = document.getElementById('message5');
    let previousValue5 = '';

    numberInput5.addEventListener('input', () => {
        const value = numberInput5.value;

        if (value === '') {
            previousValue5 = '';
            messageDiv5.textContent = '';
            return;
        }

        const intValue = parseInt(value);

        if (intValue > 5) {
            numberInput5.value = previousValue5;
            messageDiv5.textContent = "Number must be between 1 and 5.";
        } else if (intValue < 1 || isNaN(intValue)) {
            numberInput5.value = '';
            previousValue5 = '';
            messageDiv5.textContent = "Please enter a valid number between 1 and 5.";
        } else {
            previousValue5 = value;
            messageDiv5.textContent = '';
        }
    });