

import { FaWhatsapp } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import "../css/ScrollToTop.css";

const ScrollToTop = () => {

  const scrollToTop = () => {
    window.open("https://wa.me/918830379766", "_blank");
  };

  return (
    <div>
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        data-tooltip-id="whatsapp-tooltip"
      >
        <FaWhatsapp />
      </div>
      <Tooltip id="whatsapp-tooltip" place="top" content="Message us on WhatsApp!" />
    </div>
  );
};

export default ScrollToTop;
