import React, { useEffect, useState } from 'react';
import './styles.scss';
import FeatureItem from './item';
import image1 from 'src/assets/images/feature.png';
import image2 from 'src/assets/images/feature1.png';
import image3 from 'src/assets/images/feature2.png';
import image4 from 'src/assets/images/feature4.png';
import Pagination from '../pagination';
import { getFeatures } from 'src/api/categories';
import { converData } from 'src/helper/utils';

export default function Feature() {
  const [list, setList] = useState<any[]>([]);
  const handleChangePage = () => {};

  useEffect(() => {
    getFeatureList();
  }, []);

  const getFeatureList = async () => {
    const res = await getFeatures();
    if (res.status === 200) {
      const result = converData(res.data.data);
      setList(result);
    }
  };
  return (
    <div className="feature">
      <h1>Featured explore</h1>
      <div className="list-item">
        {list.map((el: any, i: number) => {
          return <FeatureItem {...el} key={i} />;
        })}
      </div>

      {/* <Pagination
        pageIndex={1}
        total={10}
        perPage={2}
        onChange={handleChangePage}
      /> */}
    </div>
  );
}
