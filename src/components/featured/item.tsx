import React from 'react';
import { getImageUrl } from 'src/helper/utils';

interface FeatureItemProps {
  image: string;
  description: string;
  title: string;
}
export default function FeatureItem({
  image,
  description,
  title,
}: FeatureItemProps) {
  return (
    <div className="card">
      <img src={getImageUrl(image)} alt="title" height={200} />
      <div className="content">
        {' '}
        <h3>{title}</h3>
        <p className="description">{description}</p>{' '}
        <p className="view-more">View more</p>
      </div>
    </div>
  );
}
