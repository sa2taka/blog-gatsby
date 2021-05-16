import React from 'react';
import './postBody.css';
import { markdown as markdownRenderer } from '../../libs/markdown';

interface Props {
  markdown: string;
}

export const PostBody: React.VFC<Props> = ({ markdown }) => {
  const rendered = markdownRenderer.render(markdown);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: rendered }}
      className="post-body"
    ></div>
  );
};
