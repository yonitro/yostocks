import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ScripQuote = () => {
  const { singleScrip } = useContext(GlobalContext);
  const [scrip] = singleScrip;

  return (
    <div className="app-row">
      <div className="quote-header">
        <div className="quote-header-block">
          <div className="quote-scrip-name">{scrip.scripname}</div>
          <div className="quote-scrip-desc">{scrip.scripmarket}</div>
          <span className="quote-scrip-price">{scrip.currentprice}</span>
          <span
            style={{ color: scrip.color }}
            className="quote-scrip-price-updn"
          >
            {scrip.updown}
          </span>
          <div className="quote-scrip-close">At close: May 14 4:00PM EDT</div>
        </div>
      </div>
    </div>
  );
};

export default ScripQuote;
