import "./MobileFixedButtons.scss";
import whatsappIcon from "../../../assets/Common/whatsapp.svg";
import { useChatbot } from "../../../Context/ChatbotContext";

export default function MobileFixedButtons() {
  const { openPopupForm } = useChatbot();

  return (
    <div className="mobile-fixed-buttons">
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

