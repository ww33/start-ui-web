export const testSpeech = () => {
  const voices = window.speechSynthesis.getVoices();
  const voice1 = voices.find(({ voiceURI }) => voiceURI === 'Google русский');
  const voice2 = voices.find(
    ({ voiceURI }) => voiceURI === 'Microsoft Pavel Mobile - Russian (Russia)'
  );
  const voice3 = voices.find(
    ({ voiceURI }) => voiceURI === 'Microsoft Irina Desktop'
  );
  const rate = 1.1;

  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'ru';
  // @ts-ignore
  speech.voice = voice1;
  speech.text = 'здорова, корова!';
  speech.rate = rate;
  window.speechSynthesis.speak(speech);

  const speech2 = new SpeechSynthesisUtterance();
  speech2.lang = 'ru';
  // @ts-ignore
  speech2.voice = voice2;
  speech2.text = 'здорова, корова!';
  speech2.pitch = 2;
  speech.rate = rate;
  window.speechSynthesis.speak(speech2);

  const speech3 = new SpeechSynthesisUtterance();
  speech3.lang = 'ru';
  // @ts-ignore
  speech3.voice = voice3;
  speech3.text = 'здорова, корова!';
  speech.rate = 2;
  window.speechSynthesis.speak(speech3);
  //console.log(await getContracts());
};
