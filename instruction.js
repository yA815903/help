const readInstructionsBtn = document.getElementById('read-instructions-btn');

readInstructionsBtn.addEventListener('click', () => {
    const instructionsText = document.getElementById('instructions').innerText;
    speakText(instructionsText);
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}