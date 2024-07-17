import "./copy-to-clipboard.css";

import { useState } from "react";

const CopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText("CEzWsLdchL3st89zwADa2xKo6McU816hXrCTA7dEpump")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
  };

  return (
    <div className="copy-to-clipboard" onClick={handleCopyClick}>
      <h2 className="desktop-only">
        Contract Address: CEzWsLdchL3st89zwADa2xKo6McU816hXrCTA7dEpump
      </h2>
      <h2 className="mobile-only">
        Contract Address: <br />
        CEzWsLdchL3st89zwADa2xKo6McU816hXrCTA7dEpump
      </h2>
      <button className="copy-button">{isCopied ? "Copied!" : "Copy"}</button>
    </div>
  );
};

export default CopyToClipboard;
