import { useState, useEffect } from "react";
import "./MobileFixedButtons.scss";
import whatsappIcon from "../../../assets/Common/whatsapp.svg";
import { useChatbot } from "../../../Context/ChatbotContext";
import { ESTIMATED_RESPONSE_TIME_SEC } from "../../../Constants/estimatedResponseTime";

export default function MobileFixedButtons() {
  const { openPopupForm, isPopupFormOpen } = useChatbot();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (isPopupFormOpen) return;
    let hideTimer = null;
    const interval = setInterval(() => {
      setShowHint(true);
      hideTimer = setTimeout(() => setShowHint(false), 3000);
    }, 10000);
    return () => {
      clearInterval(interval);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [isPopupFormOpen]);

  return (
    <div className="mobile-fixed-buttons">
      <div className={`floating-hint ${showHint ? "show" : ""}`}>
        <div className="floating-hint-content">
          <span className="floating-hint-dot" aria-hidden />
          <span className="floating-hint-title">Our Medical Consultants are Online…</span>
        </div>
        <span className="floating-hint-time">Est. Response Time: {ESTIMATED_RESPONSE_TIME_SEC} sec</span>
      </div>
      <button
        type="button"
        className="fixed-btn whatsapp-btn"
        onClick={openPopupForm}
        aria-label="Open booking form"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="btn-icon" />
        <span className="btn-text">WhatsApp</span>
      </button>
    </div>
  );
}

