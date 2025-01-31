const arStartBtn = document.getElementById('ar-start-btn');
const subtitleDiv = document.getElementById('subtitle');
const arStatus = document.getElementById('ar-status');

const arRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
arRecognition.lang = 'en-US';
arRecognition.interimResults = true;

arStartBtn.addEventListener('click', () => {
    arStatus.textContent = 'Listening...';
    arRecognition.start();
});

arRecognition.addEventListener('result', (event) => {
    const subtitle = event.results[0][0].transcript;
    subtitleDiv.textContent = subtitle;
    arStatus.textContent = 'Processing...';
});

arRecognition.addEventListener('end', () => {
    arStatus.textContent = 'Ready';
});