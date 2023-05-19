import React from 'react';
import { getImageUrl } from 'src/helper/utils';

interface CategoryProps {
  image: string;
  title: string;

  className?: string;
}
const Category: React.FC<CategoryProps> = ({ image, title, className }) => {
  return (
    <div className={`category  ${className}`}>
      <div className="overlay">
        {' '}
        <img src={getImageUrl(image)} alt="" />
        <p>{title}</p>
      </div>

      <p>{title}</p>
    </div>
  );
};

export default Category;
