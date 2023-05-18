import React from 'react';

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
      <img src={image} alt="title" />
      <div className="content">
        {' '}
        <h3>{title}</h3>
        <p>{description}</p>{' '}
      </div>
    </div>
  );
}
