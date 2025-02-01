
        function startSpeechRecognition() {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.onresult = function(event) {
                const command = event.results[0][0].transcript.toLowerCase();
                alert("Recognized command: " + command);
            };
            recognition.start();
        }

        function readText() {
            const msg = new SpeechSynthesisUtterance("Hello, welcome to the accessibility assistant.");
            window.speechSynthesis.speak(msg);
        }
        
        function readUserText() {
            const userInput = document.getElementById("textInput").value;
            if (userInput) {
                const msg = new SpeechSynthesisUtterance(userInput);
                window.speechSynthesis.speak(msg);
            } else {
                alert("Please enter text to read aloud.");
            }
        }

        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }

        function toggleLargeText() {
            document.body.classList.toggle("large-text");
        }

        function translateText() {
            alert("Translation feature coming soon!");
        }

        function openHelp() {
            alert("How it works: Use voice control to navigate, enter text to be read aloud, and toggle settings for better accessibility.");
        }

        function extractTextFromImage(event) {
            const file = event.target.files[0];
            if (file) {
                alert("Extracting text from image (feature in development)...");
            }
        }
    