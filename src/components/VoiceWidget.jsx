import { useEffect, useRef, useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

function VoiceWidget() {
  const [listening, setListening] = useState(false);
  const [logs, setLogs] = useState([]);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setLogs((prev) => [...prev, { role: 'user', text: transcript }]);

      try {
        const res = await fetch(`${BACKEND_URL}/api/voice-intent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: transcript })
        });
        const data = await res.json();
        setLogs((prev) => [...prev, { role: 'assistant', text: data.reply }]);
        // Speak back
        const utter = new SpeechSynthesisUtterance(data.reply);
        utter.rate = 1.0;
        utter.pitch = 1.0;
        window.speechSynthesis.speak(utter);
      } catch (e) {
        setLogs((prev) => [...prev, { role: 'assistant', text: 'Sorry, something went wrong connecting to the assistant.' }]);
      }
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggle = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return alert('Your browser does not support speech recognition. Try Chrome.');
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      setLogs((prev) => [...prev, { role: 'system', text: 'Listening…' }]);
      recognition.start();
      setListening(true);
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="w-80 max-w-[90vw] rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="text-sm font-medium text-white">AI Legal Assistant</div>
          <button onClick={toggle} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${listening ? 'bg-emerald-400 text-slate-900' : 'bg-white text-slate-900'}`}>{listening ? 'Stop' : 'Talk'}</button>
        </div>
        <div className="max-h-64 overflow-auto p-3 space-y-2">
          {logs.length === 0 && (
            <div className="text-xs text-slate-400">Tap Talk and say: "Book a consultation" or "What are your practice areas?"</div>
          )}
          {logs.map((m, i) => (
            <div key={i} className={`text-xs leading-relaxed ${m.role === 'user' ? 'text-blue-300' : m.role === 'assistant' ? 'text-slate-200' : 'text-slate-400'}`}>{m.text}</div>
          ))}
        </div>
      </div>
      <button onClick={toggle} className={`mt-3 w-14 h-14 rounded-2xl grid place-items-center shadow-xl transition border ${listening ? 'bg-emerald-400 text-slate-900 border-emerald-300' : 'bg-white text-slate-900 border-white'}`} title="Start voice">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14c1.657 0 3-1.567 3-3.5v-3C15 5.567 13.657 4 12 4s-3 1.567-3 3.5v3C9 12.433 10.343 14 12 14Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 11.5a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 21v-3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </button>
    </div>
  );
}

export default VoiceWidget;
