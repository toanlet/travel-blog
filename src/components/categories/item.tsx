import React from 'react';

interface CategoryProps {
  image: string;
  title: string;

  className: string;
}
const Category: React.FC<CategoryProps> = ({ image, title, className }) => {
  return (
    <div className={`category  ${className}`}>
      <div className="overlay">
        {' '}
        <img src={image} alt="" />
      </div>

      <p>{title}</p>
    </div>
  );
};

export default Category;
