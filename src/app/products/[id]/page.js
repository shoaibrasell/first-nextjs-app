import React from 'react';

const DynamicPageRoute = ({params , searchParams}) => {
  return (
    <div>
      <h1>This is Dynamic Page : {params.id}</h1>
      <h2>Search : {searchParams.category}</h2>
    </div>
  );
};

export default DynamicPageRoute;