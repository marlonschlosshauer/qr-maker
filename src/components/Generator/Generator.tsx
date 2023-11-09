"use client";

import React, { useRef, useState } from "react";
import { Button } from "../Button/Button";
import { Code } from "../Code/Code";
import { Input } from "../Input/Input";
import { saveAs } from "file-saver";

export interface GeneratorProps {
  code: string;
}

export const Generator: React.FC<GeneratorProps> = ({ code }) => {
  const [url, setUrl] = useState(code ?? "");
  const ref = useRef<any>();

  const onDownload = () => {
    const image = ref.current?.firstChild;
    if (url.length > 0 && image) {
      saveAs(
        new Blob(
          [new XMLSerializer().serializeToString(image.cloneNode(true))],
          { type: "image/svg+xml;charset=utf-8" }
        ),
        `qr-code.svg`
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 align-center justify-center">
      <Code codeRef={ref} code={url} />
      <Input onChange={setUrl} value={url} />
      <Button onClick={onDownload}>Download</Button>
    </div>
  );
};
