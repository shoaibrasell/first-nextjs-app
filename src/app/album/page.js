import React from 'react';
import Image from 'next/image';
import nextImage from "@/assets/ship.png";

const AlbumPage = () => {
  return (
    <div>
      <h1>This is image Component</h1>
      <Image
      src={nextImage}
      width={1000}
      height={600}
      alt="Ship Logo"
      />
      <h1>This is image Component</h1>
      <Image
      src={nextImage}
      width={1000}
      height={600}
      alt="Ship Logo"
      />
      <h1>This is image Component</h1>
      <Image
      src={nextImage}
      width={1000}
      height={600}
      alt="Ship Logo"
      />
    </div>
  );
};

export default AlbumPage;