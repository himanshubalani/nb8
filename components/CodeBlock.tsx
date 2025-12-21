'use client';

import React, { useState } from 'react';
import { cn } from '@/app/utils/cn';
import { AppColors } from '@/constants';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  copy?: boolean;
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ className, code, language, copy = true, children, ...props }, ref) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch(err) {
        console.warn('Copy to clipboard failed:', err);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative mt-3 rounded-lg border-2 border-black p-3 md:p-4 shadow-neo-sm w-full overflow-visible",
          className
        )}
        style={{ backgroundColor: AppColors.white }}
        {...props}
      >
        {language && (
          <div className="absolute -top-3 left-2 md:left-3 z-10 px-2 py-1 text-xs md:text-sm font-semibold rounded-md border border-black bg-white select-none">
            {language}
          </div>
        )}

        {copy && (
          <button
            onClick={handleCopy}
            className="absolute -top-2 md:-top-2 -right-2 md:-right-3 z-10 px-2 py-1 text-xs md:text-sm font-semibold rounded-md border border-black bg-white hover:bg-gray-100 shadow-neo-sm hover:shadow-neo transition"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        )}

        <pre className="pr-10 font-mono text-xs md:text-sm text-black whitespace-pre-wrap wrap-break-word">
          {code}
        </pre>
        {children}
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";

export { CodeBlock };