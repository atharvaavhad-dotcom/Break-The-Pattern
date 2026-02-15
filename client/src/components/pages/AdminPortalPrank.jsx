import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../AdminPortalPrank.css";

const AdminPortalPrank = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [currentLog, setCurrentLog] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [shake, setShake] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const navigate = useNavigate();

  const fakeAlerts = [
    "Access denied",
    "Firewall triggered",
    "Tracking IP…",
    "Intrusion detected",
    "System lockdown initiated"
  ];

  const fakeLogs = [
    "Initializing secure connection...",
    "Verifying credentials...",
    "Scanning for vulnerabilities...",
    "Access level: DENIED",
    "Logging attempt..."
  ];

  useEffect(() => {
    if (password.length > 3) {
      const randomAlert = fakeAlerts[Math.floor(Math.random() * fakeAlerts.length)];
      setAlertMessage(randomAlert);
      setGlitch(true);
      setTimeout(() => setGlitch(false), 500);
    } else {
      setAlertMessage("");
    }
  }, [password]);

  useEffect(() => {
    if (currentLog && typingIndex < currentLog.length) {
      const timer = setTimeout(() => {
        setTypingIndex(typingIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (currentLog && typingIndex === currentLog.length) {
      setTimeout(() => {
        setLogs(prev => [...prev, currentLog]);
        setCurrentLog("");
        setTypingIndex(0);
      }, 1000);
    }
  }, [currentLog, typingIndex]);

  const handleLogin = () => {
    setAttemptCount(prev => prev + 1);
    setClickCount(prev => prev + 1);

    if (clickCount === 0) {
      // First click: shake
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else if (clickCount === 1) {
      // Second click: loading
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentLog(fakeLogs[Math.floor(Math.random() * fakeLogs.length)]);
      }, 2000);
    } else if (clickCount === 2) {
      // Third click: prank message
      setAlertMessage("Nice try 😄 You’re not the admin.");
      setGlitch(true);
      setTimeout(() => setGlitch(false), 1000);
      setClickCount(0); // Reset for next attempts
    }

    if (attemptCount + 1 >= 10) {
      // Bonus: after 10 attempts
      setTimeout(() => {
        setAlertMessage("Okay okay… you passed the vibe check 😎");
        setTimeout(() => navigate("/"), 2000);
      }, 1000);
    }
  };

  const handleGoBack = () => {
    navigate("/careers");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div className={`bg-gray-900 border-2 border-green-400 rounded-lg p-8 max-w-md w-full shadow-lg ${shake ? 'animate-shake' : ''} ${glitch ? 'animate-glitch' : ''}`}>
        <div className="text-center mb-6">
          <h1 className="text-green-400 text-2xl md:text-3xl font-bold mb-2 animate-flicker">
            COMPANY ADMIN ACCESS
          </h1>
          <p className="text-green-300 text-sm">
            Authorized Personnel Only
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-4">
            <label className="block text-green-400 mb-2">Admin Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-800 border border-green-400 text-green-400 p-2 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-green-400 mb-2">Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-green-400 text-green-400 p-2 rounded focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Enter password"
            />
            {alertMessage && (
              <p className="text-red-400 text-sm mt-2 animate-typing">
                {alertMessage}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-4 rounded transition duration-200"
            disabled={loading}
          >
            {loading ? "Decrypting credentials…" : "Login"}
          </button>
        </form>

        <div className="mt-6 text-green-400 text-xs">
          <div className="bg-gray-800 p-2 rounded h-20 overflow-y-auto">
            {logs.map((log, idx) => (
              <p key={idx} className="mb-1">{log}</p>
            ))}
            {currentLog && (
              <p className="mb-1">
                {currentLog.substring(0, typingIndex)}
                <span className="animate-blink">|</span>
              </p>
            )}
          </div>
        </div>

        <button
          onClick={handleGoBack}
          className="mt-4 text-green-400 hover:text-green-300 text-sm underline"
        >
          ← Go Back to Careers
        </button>
      </div>
    </div>
  );
};

export default AdminPortalPrank;
