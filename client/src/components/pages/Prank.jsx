import { useState } from "react";
import "../../prank.css";

const PrankContact = () => {
  const [yesPosition, setYesPosition] = useState({
    top: "50%",
    left: "60%",
  });

  const [cardMoved, setCardMoved] = useState(false);

  const moveYesButton = () => {
    const randomTop = Math.random() * 90;
    const randomLeft = Math.random() * 90;

    setYesPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleNoClick = () => {
    window.location.href = "/";
  };

  const handleDrag = () => {
    setCardMoved(true);
  };

  return (
    <div className="prank-container">
      <div
        className="prank-card"
        draggable
        onDrag={handleDrag}
      >
        <h1>Do you want the password? 🤫</h1>

        <div className="button-area">
          <button
            className="yes-btn"
            style={{
              top: yesPosition.top,
              left: yesPosition.left,
            }}
            onMouseOver={moveYesButton}
            onMouseMove={moveYesButton}
          >
            YES
          </button>

          <button className="no-btn" onClick={handleNoClick}>
            NO
          </button>
        </div>
      </div>

      {cardMoved && (
        <a href="/admin-quiz" className="hidden-admin-link">
          🔓 adminaccess
        </a>
      )}
    </div>
  );
};

export default PrankContact;
