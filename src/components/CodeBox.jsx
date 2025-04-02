import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBox = ({ codeString, Title }) => {

  return (
    <div className="w-full max-w-2xl">
      <div className="rounded-lg overflow-hidden">
        {/* Mac-style dots */}
        <div className="flex items-center justify-between px-4 py-3 bg-black">
          <div className='flex items-center gap-2'>
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <p className='text-lg text-white text-center flex-1'>{Title ? Title : ''}</p>
          <div className="w-[72px]"></div> {/* Empty div for balance */}
        </div>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '20px',
            background: '#0d1117',
            // background: '#131314',
            fontSize: '16px',
          }}
          lineProps={{style: {wordBreak: 'normal', whiteSpace: 'pre-wrap'}}}
          showLineNumbers={false}
          wrapLines={true}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBox;