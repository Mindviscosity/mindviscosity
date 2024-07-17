import "./copy-to-clipboard.css";

import React, { useState } from "react";

const CopyToClipboard = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <div className="copy-to-clipboard" onClick={handleCopyClick}>
      {children}
      {isCopied && <span className="copied-feedback">Copied!</span>}
    </div>
  );
};

export default CopyToClipboard;
