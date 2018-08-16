import React from 'react';

import Button from '../ui/Button';

export default () => {
  return (
    <div
      className="w3-container w3-red w3-center"
      style={{ padding: '128px 16px' }}
    >
      <h1 className="w3-margin w3-jumbo">About w3css</h1>
      <ul className="w3-ul">
        <li>Smaller and faster than other CSS frameworks.</li>
        <li>Easier to learn, and easier to use than other CSS frameworks.</li>
        <li>Better cross-browser compatibility than other CSS frameworks.</li>
        <li>Uses standard CSS only (No jQuery or JavaScript library).</li>
        <li>Supports modern responsive mobile first design by default.</li>
        <li>
          Provides CSS equality for all browsers: Chrome, Firefox, Edge, IE,
          Safari, Opera, ...
        </li>
        <li>
          Provides CSS equality for all devices: desktop, laptop, tablet, and
          mobile.
        </li>
        <li>Speeds up and simplifies web development.</li>
      </ul>
      <Button text="Home" linkTo="/" />
    </div>
  );
};
