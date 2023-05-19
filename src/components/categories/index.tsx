import React, { useState, useEffect } from 'react';
import Image1 from 'src/assets/images/danang.jpg';
import Image2 from 'src/assets/images/hoian.jpg';
import Image3 from 'src/assets/images/ninhbinh.jpg';
import Image4 from 'src/assets/images/nhatrang.jpg';
import Image5 from 'src/assets/images/mount.png';
import Image6 from 'src/assets/images/solo.png';
import Image7 from 'src/assets/images/old-city.png';
import Image8 from 'src/assets/images/osean.png';
import Image9 from 'src/assets/images/jungal.png';
import Image10 from 'src/assets/images/road.png';

import Category from './item';
import './styles.scss';
import SlideButton from './slide-button';
import { getCategories } from 'src/api/categories';
import { converData } from 'src/helper/utils';
export default function Categories() {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState<any[]>([]);

  const hanldeAction = (type: string) => {
    if (type === 'next') {
      setIndex(index + 1);
      if (index >= list.length) {
        setIndex(0);
      }
    } else {
      if (index <= 0) {
        setIndex(list.length);
      } else {
        setIndex(index - 1);
      }
    }
  };
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (index === list.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 1500);

    return () => {
      clearTimeout(id);
    };
  }, [index, list.length]);

  const getList = async () => {
    const res = await getCategories();

    if (res.status === 200 && res.data.data) {
      const data = converData(res.data.data);
      setList(data);
    }
  };

  const getClassActive = (el: any) => {
    const position = [...list];
    let activeList = [];
    if (index === position.length) {
      activeList = position.splice(-6);
    } else if (index >= 0 && index <= 6) {
      activeList = position.splice(index, 6);
    } else if (index > 6 && index < list.length) {
      const add = index - 6;
      activeList = position.splice(add, 6);
    }

    if (activeList.some((item: any) => item.id === el.id)) {
      return 'active';
    }
    return 'no-active';
  };

  return (
    <div className="categories">
      <h1>Choose a category</h1>
      <div className="list">
        <SlideButton direction="next" handleAct={hanldeAction} />
        {list.map(
          (
            el: {
              image: string;
              title: string;
              id: number;
              class?: string;
            },
            i: number
          ) => {
            return (
              <Category {...el} key={el.id} className={getClassActive(el)} />
            );
          }
        )}

        <SlideButton direction="pre" handleAct={hanldeAction} />
      </div>
      <div className="dot">{}</div>
    </div>
  );
}
