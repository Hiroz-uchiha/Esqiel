'use client'
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ code, language = 'sql' }) => {
  return (
    <div className="my-4 shadow-md rounded-md">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLines={true}
        showLineNumbers={false}
        customStyle={{
          fontSize: '0.9rem',
          padding: '1rem',
          borderRadius: '10px',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
