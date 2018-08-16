import React from 'react';

import Button from '../ui/Button';

export default () => {
  return (
    <div
      className="w3-container w3-red w3-center"
      style={{ padding: '128px 16px', height: '100vh' }}
    >
      <h1 className="w3-margin w3-jumbo">React with w3css</h1>
      <p className="w3-xlarge">Smaller and faster than other CSS frameworks.</p>
      <Button text="Single Page" linkTo="/SinglePage" />
    </div>
  );
};
