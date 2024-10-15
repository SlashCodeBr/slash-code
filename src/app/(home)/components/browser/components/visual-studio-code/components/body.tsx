'use client'
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierHeathLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { CODE } from "../visual-studio-code.data";
export function VisualStudioCodeBody() {
  return (
    <main className="row-start-2 row-end-3 col-start-2  col-end-3">
      <SyntaxHighlighter
        language="typescript"
        style={atelierHeathLight}
        showLineNumbers
      >
        {CODE}
      </SyntaxHighlighter>
    </main>
  );
}