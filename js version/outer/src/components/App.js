import React from 'react';

const MainComponent = ({ head, body, footer }) => {
  if (!head || typeof head !== 'string') {
    throw new Error('no head was passed');
  }

  if (!body || typeof body !== 'string') {
    throw new Error('no body was passed');
  }

  if (!footer || typeof footer !== 'string') {
    throw new Error('no footer was passed');
  }

  return (
    <!DOCTYPE html>
    <html lang="en">
      <head>{head}</head>
      <body>{body}</body>
      <footer>{footer}</footer>
    </html>
  );
};

export default MainComponent;