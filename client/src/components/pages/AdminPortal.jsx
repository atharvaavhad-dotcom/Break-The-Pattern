import { useState, useEffect } from "react";
import "../../AdminPortal.css";

const AdminPortal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const handleLogin = () => {
    if (username === "ceo_access" && password === "brainbuzz_placement") {
      setAccess(true);

      let text = "Initializing Secure Server Access...";
      let i = 0;

      const typing = setInterval(() => {
        setLoadingText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(typing);

          setTimeout(() => {
            const fileName = "Break The Pattern.xlsx";
            const encodedFileName = encodeURIComponent(fileName);

            const link = document.createElement("a");
            link.href = `/${encodedFileName}`;
            link.download = fileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, 1500);
        }
      }, 40);
    } else {
      alert("❌ ACCESS DENIED. Unauthorized Attempt Logged.");
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-green-400 font-mono flex flex-col items-center justify-center">

      {/* Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.15)_0,_black_70%)] animate-pulse"></div>

      {/* Glowing Title */}
      <h1 className="text-4xl md:text-5xl mb-10 tracking-widest neonText">
        ⚡ SECURE ADMIN TERMINAL ⚡
      </h1>

      {!access ? (
        <div className="bg-black/60 backdrop-blur-md p-8 border border-green-500 shadow-lg shadow-green-500/30 rounded-xl w-80 animate-fadeIn">

          <input
            className="w-full bg-black border border-green-400 p-3 mb-4 focus:outline-none focus:shadow-green-500 focus:shadow-md transition"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="w-full bg-black border border-green-400 p-3 mb-6 focus:outline-none focus:shadow-green-500 focus:shadow-md transition"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full border border-green-400 py-2 hover:bg-green-400 hover:text-black transition duration-300 tracking-widest"
            onClick={handleLogin}
          >
            AUTHENTICATE
          </button>
        </div>
      ) : (
        <div className="text-center animate-fadeIn">
          <h2 className="text-2xl mb-4 text-green-500 animate-pulse">
            ✔ ACCESS GRANTED
          </h2>

          <p className="mb-2">🔐 {loadingText}</p>
          <p className="text-green-600 animate-pulse">
            ⬇ Downloading Classified Data...
          </p>
        </div>
      )}

    </div>
  );
};

export default AdminPortal;
