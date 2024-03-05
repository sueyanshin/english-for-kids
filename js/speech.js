// function pronounce(word) {
//   // Create a new SpeechSynthesisUtterance object
//   var utterance = new SpeechSynthesisUtterance();
//   // Set the text that should be spoken
//   utterance.text = word;
//   // Use the default voice for the speech
//   utterance.voice = speechSynthesis.getVoices()[0]; // You may need to adjust this depending on your requirements

//   // Speak the text
//   speechSynthesis.speak(utterance);
// }
function pronounce(word) {
  // Create a new SpeechSynthesisUtterance object
  var utterance = new SpeechSynthesisUtterance();
  // Set the text that should be spoken
  utterance.text = word;

  // Get all available voices
  var voices = speechSynthesis.getVoices();

  // Find the desired English voice
  var desiredVoice = null;
  for (var i = 0; i < voices.length; i++) {
    // Check if the voice language starts with 'en'
    if (voices[i].lang.startsWith("en")) {
      desiredVoice = voices[i];
      break;
    }
  }

  // If an English voice is found, set it; otherwise, use the default voice
  if (desiredVoice) {
    utterance.voice = desiredVoice;
  } else {
    console.warn("English voice not found, using default voice.");
  }

  // Speak the text
  speechSynthesis.speak(utterance);
}
