'use client';

import React, { useState } from 'react';
import { AppColors } from '../constants';

const CodeBlock = ({
  code,
  language,
  children,
}: {
  code: string;
  language?: string;
  children?: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // silently fail
    }
  };

  return (
    <div
      className="
        relative mt-4
        rounded-lg border-2 border-black
        p-4 overflow-x-auto
        shadow-neo-sm
      "
      style={{ backgroundColor: AppColors.white }}
    >
      {/* Top-right controls */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="
            px-2 py-1
            text-xs font-semibold
            rounded-md border border-black
            bg-white hover:bg-gray-100
            transition
          "
        >
          {copied ? 'Copied' : 'Copy'}
        </button>

        {/* Language box */}
        {language && (
          <div
            className="
              px-2 py-1
              text-xs font-semibold
              rounded-md border border-black
              bg-white
              select-none
            "
          >
            {language}
          </div>
        )}
      </div>

      <pre className="font-mono text-md text-black whitespace-pre">
        {code}
      </pre>

      {children}
    </div>
  );
};

export default CodeBlock;
