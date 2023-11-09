import React from "react";
import QRCode from "qrcode.react";

export interface CodeProps {
  code: string;
  codeRef?: any;
}

export const Code: React.FC<CodeProps> = ({ code, codeRef }) => (
  <div className="" ref={codeRef}>
    <QRCode
      className="qr-code"
      value={code}
      renderAs="svg"
      size={300}
      fgColor="white"
      bgColor="black"
    />
  </div>
);
