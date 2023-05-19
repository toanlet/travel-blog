import React from 'react';
import Image from 'src/assets/images/blog.png';
// import Image1 from 'src/assets/images/blog-1.png';
// import Image2 from 'src/assets/images/blog-2.png';
// import Image3 from 'src/assets/images/blog-3.png';
// import Image4 from 'src/assets/images/blog-4.png';

export default function Blog() {
  const list = [
    {
      image: Image,
      title: '',
      description: '',
    },
  ];
  return (
    <div className="main-blog">
      <h3>My latest blog</h3>
      <div className="content">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}
