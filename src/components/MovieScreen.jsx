import React, { useEffect, useRef } from 'react';
import './MovieScreen.css';

function MovieScreen() {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);

  useEffect(() => {
    const playAudio = (audioRef) => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          // Fallback to play audio on user interaction
          document.addEventListener('click', () => {
            audioRef.current.play().catch(err => console.error("Audio playback failed again:", err));
          }, { once: true });
        });
      }
    };

    playAudio(audioRef1);
    playAudio(audioRef2);
  }, []);

  return (
    <div className='movie-screen'>
      <img src="/cat.gif" alt="Movie Screen" className="movie-screen-gif" />
      <audio ref={audioRef1} src="/people-talking.mp3" loop></audio>
      <audio ref={audioRef2} src="/atmosphere1.mp3" loop></audio>
    </div>
  );
}

export default MovieScreen;