const voiceStartBtn = document.getElementById('voice-start-btn');
const commandOutput = document.getElementById('command-output');
const voiceStatus = document.getElementById('voice-status');

const voiceRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
voiceRecognition.lang = 'en-US';
voiceRecognition.interimResults = false;
voiceRecognition.maxAlternatives = 1;

voiceStartBtn.addEventListener('click', () => {
    voiceStatus.textContent = 'Listening...';
    voiceRecognition.start();
});

voiceRecognition.addEventListener('result', (event) => {
    const command = event.results[0][0].transcript;
    commandOutput.textContent = `Command received: ${command}`;
    processVoiceCommand(command);
    voiceStatus.textContent = 'Processing...';
});

voiceRecognition.addEventListener('end', () => {
    voiceStatus.textContent = 'Ready';
});

function processVoiceCommand(command) {
    // Implement command processing logic here
    console.log(`Processing command: ${command}`);
}