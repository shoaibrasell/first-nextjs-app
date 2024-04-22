import React from 'react';

const Layout = ({children}) => {
  return (
    <div>
      <h1>Heaer</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;