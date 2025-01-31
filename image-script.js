const imageInput = document.getElementById('image-input');
const readImageBtn = document.getElementById('read-image-btn');
const stopReadingBtn = document.getElementById('stop-reading-btn');
const imageTextOutput = document.getElementById('image-text-output');

readImageBtn.addEventListener('click', () => {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                Tesseract.recognize(
                    canvas,
                    'eng',
                    {
                        logger: (m) => console.log(m)
                    }
                ).then(({ data: { text } }) => {
                    imageTextOutput.textContent = text;
                    speakText(text);
                }).catch(err => {
                    imageTextOutput.textContent = 'Error recognizing text.';
                    console.error(err);
                });
            };
        };
        reader.readAsDataURL(file);
    } else {
        imageTextOutput.textContent = 'Please select an image first.';
    }
});

stopReadingBtn.addEventListener('click', () => {
    speechSynthesis.cancel();
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}