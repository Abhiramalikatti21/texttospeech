const speakButton = document.getElementById("speakButton");
const textToSpeak = document.getElementById("textToSpeak");

// Check if the browser supports speech synthesis
if ('speechSynthesis' in window) {
    const synthesis = window.speechSynthesis;

    speakButton.addEventListener("click", () => {
        const text = textToSpeak.value;
        if (text !== "") {
            const utterance = new SpeechSynthesisUtterance(text);
            synthesis.speak(utterance);
        }
    });
} else {
    speakButton.disabled = true;
    textToSpeak.placeholder = "Speech synthesis not supported";
}