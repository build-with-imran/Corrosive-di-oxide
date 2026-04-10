document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const questionContainer = document.getElementById('questionContainer');
    const mainContainer = document.getElementById('mainContainer');
    const resultContainer = document.getElementById('resultContainer');
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const resultImage = document.getElementById('resultImage');
    const resultMessage = document.getElementById('resultMessage');

    const checkInputs = () => {
        const nameVal = nameInput.value.trim().toLowerCase();
        const ageVal = ageInput.value.trim();

        if (nameVal === 'gayathri' && ageVal === '25') {
            questionContainer.classList.remove('hidden');
        } else {
            questionContainer.classList.add('hidden');
        }
    };

    nameInput.addEventListener('input', checkInputs);
    ageInput.addEventListener('input', checkInputs);

    btnYes.addEventListener('click', () => {
        mainContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        
        // Setup image and message for YES
        resultImage.src = 
        resultMessage.innerHTML = 'i know gayu u always love me ❤️';
        resultMessage.style.color = '#0072ff';
    });

    btnNo.addEventListener('click', () => {
        mainContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        
        // Setup image and message for NO
        resultImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/800px-Love_Heart_SVG.svg.png';
        resultMessage.innerHTML = 'you are lying gayu i knew yoou love me 😂❤️';
        resultMessage.style.color = '#ff2e63';
    });
});
