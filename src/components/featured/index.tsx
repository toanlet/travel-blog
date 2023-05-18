import React, { useState } from 'react';
import './styles.scss';
import FeatureItem from './item';
import image1 from 'src/assets/images/feature.png';
import image2 from 'src/assets/images/feature1.png';
import image3 from 'src/assets/images/feature2.png';
import image4 from 'src/assets/images/feature4.png';
import Pagination from '../pagination';

export default function Feature() {
  // const [feature, setFeature] = useState([]);

  const list = [
    {
      image: image1,
      title: 'The Golden Sands of Florida and clifornia',
      description: `Lorem ipsum dolor sit amet, con turadip
      iscingelit. In sed et donec purus viverra. Sit
      justo velit, eu sed
      `,
    },
    {
      image: image4,
      title: 'The Golden Sands of Florida and clifornia',
      description: `Lorem ipsum dolor sit amet, con turadip
      iscingelit. In sed et donec purus viverra. Sit
      justo velit, eu sed
      `,
    },
    {
      image: image1,
      title: 'The Golden Sands of Florida and clifornia',
      description: `Lorem ipsum dolor sit amet, con turadip
      iscingelit. In sed et donec purus viverra. Sit
      justo velit, eu sed
      `,
    },
    {
      image: image2,
      title: 'The Golden Sands of Florida and clifornia',
      description: `Lorem ipsum dolor sit amet, con turadip
      iscingelit. In sed et donec purus viverra. Sit
      justo velit, eu sed
      `,
    },
    {
      image: image3,
      title: 'The Golden Sands of Florida and clifornia',
      description: `Lorem ipsum dolor sit amet, con turadip
      iscingelit. In sed et donec purus viverra. Sit
      justo velit, eu sed
      `,
    },
    {
      image: image4,
      title: 'The Golden Sands of Florida and clifornia',
      description: `Lorem ipsum dolor sit amet, con turadip
      iscingelit. In sed et donec purus viverra. Sit
      justo velit, eu sed
      `,
    },
  ];

  const list1 = [...list];

  const handleChangePage = () => {};

  return (
    <div className="feature">
      <h3>Featured explore</h3>
      <div className="list-item">
        {list1.concat(list).map((el: any, i: number) => {
          return <FeatureItem {...el} key={i} />;
        })}
      </div>

      <Pagination
        pageIndex={1}
        total={10}
        perPage={2}
        onChange={handleChangePage}
      />
    </div>
  );
}
