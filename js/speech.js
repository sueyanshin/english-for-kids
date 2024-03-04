function pronounce(word) {
  // Create a new SpeechSynthesisUtterance object
  var utterance = new SpeechSynthesisUtterance();
  // Set the text that should be spoken
  utterance.text = word;
  // Use the default voice for the speech
  utterance.voice = speechSynthesis.getVoices()[0]; // You may need to adjust this depending on your requirements

  // Speak the text
  speechSynthesis.speak(utterance);
}
