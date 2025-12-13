'use client';

import React, { useState } from 'react';
import { AppColors } from '../constants';

export const CodeBlock = ({
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
    } catch {}
  };

  return (
    <div
      className="
        relative mt-6
        rounded-lg border-2 border-black
        p-4
        shadow-neo-sm
        overflow-visible
      "
      style={{ backgroundColor: AppColors.white }}
    >
      {/* Language badge — top-left */}
      {language && (
        <div
          className="
            absolute -top-3 left-3
            z-2
            px-2 py-1
            text-sm font-semibold
            rounded-md border border-black
            bg-white
            select-none
          "
        >
          {language}
        </div>
      )}

      {/* Copy button — top-right */}
      <button
        onClick={handleCopy}
        className="
          absolute -top-2 -right-3
          z-2
          px-2 py-1
          text-md font-semibold
          rounded-md border border-black shadow-neo-sm hover:shadow-neo
          bg-white hover:bg-gray-100
          transition
        "
      >
        {copied ? 'Copied' : 'Copy'}
      </button>

      <pre className="font-mono text-md text-black whitespace-pre text-wrap">
        {code}
      </pre>

      {children}
    </div>
  );
};
