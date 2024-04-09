import { useState, useEffect, useRef } from 'react';

export default function Dictaphone() {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const speechSynthesis = typeof window !== 'undefined' && window.speechSynthesis;
  const recognitionRef = useRef(null); // Use a ref to hold the recognition instance

  useEffect(() => {
    if (listening) {
      startListening();
    } else {
      stopListening();
    }
  }, [listening]); // Effect runs when `listening` changes

  const initializeRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(transcript + currentTranscript); // Concatenate new transcript to existing
      if (event.results[event.results.length - 1].isFinal) {
        console.log(transcript + currentTranscript);
        sendToOpenAI(transcript + currentTranscript);
      }
    };

    recognitionRef.current.onend = () => {
      if (listening) {
        recognitionRef.current.start(); // Only restart if still listening
      }
    };
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      initializeRecognition();
    }
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (speechSynthesis) {
      speechSynthesis.cancel(); // Stop any ongoing speech synthesis
    }
  };

  const handleListen = () => {
    setListening(!listening);
  };

  const sendToOpenAI = async (text) => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      const answer = data.choices[0].message.content; // Adapt based on your API response structure
      speak(answer);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  };

  const speak = (text) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const resetTranscript = () => {
    setTranscript('');
  };

  return (
    <div>
      <button className='bg-gray-200 mx-2 px-2' onClick={handleListen}>
        {listening ? 'Stop' : 'Start'}
      </button>
      <button className='bg-gray-200 mx-2 px-2' onClick={resetTranscript}>Reset</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
}
