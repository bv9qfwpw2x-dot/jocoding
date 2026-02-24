const generateBtn = document.getElementById('generate-btn');
const numberDivs = document.querySelectorAll('.number');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberDivs.forEach((div, index) => {
        div.textContent = sortedNumbers[index];
    });
}

generateBtn.addEventListener('click', generateNumbers);

// Initial generation
generateNumbers();
