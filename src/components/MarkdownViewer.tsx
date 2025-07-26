// src/stories/components/MarkdownViewer.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const MarkdownViewer = ({ url }: { url: string }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [url]);

  return (
    <div style={{ overflowX: 'auto' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
