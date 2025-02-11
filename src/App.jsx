import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home,Picture,Card,Cake,Present } from "./components"
import './index.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const playMusic = () => {
      const audio = document.getElementById("bg-music");
      if (audio) {
        audio.volume = 0.5;
        audio.play().catch((error) => console.log("Autoplay blocked:", error));
      }
    };

    document.addEventListener("click", playMusic);
    return () => document.removeEventListener("click", playMusic);
  }, []);

  return (
    <Router>
      <div>
        {/* 🎵 Background Music */}
        <audio id="bg-music" loop>
          <source src="/public/assets/Afternoon Jazz  [jazz lofi].mp3" type="audio/mpeg" />
        </audio>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<Picture />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/present" element={<Present />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
