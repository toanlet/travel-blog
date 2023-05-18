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
export default function Categories() {
  const [index, setIndex] = useState(0);

  const list = [
    { image: Image1, title: 'Đa Nang', id: 1 },
    { image: Image2, title: 'Hoi An', id: 2 },
    { image: Image3, title: 'Ninh Binh', id: 3 },
    { image: Image4, title: 'Nha Trang', id: 4 },
    { image: Image5, title: 'Mount Travel', id: 1 },
    { image: Image6, title: 'Solo Travel', id: 2 },
    { image: Image7, title: 'Old City Travel', id: 3 },
    { image: Image8, title: 'Osean Travel', id: 4 },
    { image: Image9, title: 'Jungal Travel', id: 3 },
    { image: Image10, title: 'Road Travel', id: 4 },
  ];

  useEffect(() => {
    const id = handleAutoEffect();

    return () => {
      clearTimeout(id);
    };
  }, [index]);

  const handleAutoEffect = () => {
    const id = setTimeout(() => {
      setIndex(index + 1);
      if (index === list.length - 1) {
        setIndex(0);
      }
    }, 3000);
    return id;
  };

  const hanldeAction = (type: string) => {
    if (type === 'next') {
      setIndex(index + 1);
      if (index === list.length - 1) {
        setIndex(0);
      }
    } else {
      setIndex(index - 1);
      if (index === 0) {
        setIndex(list.length - 1);
      }
    }
  };

  const handleClickDot = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="categories">
      <h3>Choose a category</h3>
      <div className="list">
        <SlideButton direction="next" handleAct={hanldeAction} />
        {list.map(
          (el: { image: string; title: string; id: number }, i: number) => {
            return (
              <Category
                {...el}
                className={index === i ? 'active' : ''}
                key={el.id}
              />
            );
          }
        )}

        <SlideButton direction="pre" handleAct={hanldeAction} />
      </div>

      <div className="dot-list">
        {list.map((el: any, i: number) => {
          return (
            <span
              key={el.id}
              className={`dot-item ${index === i ? 'dot-active' : ''}`}
              onClick={() => handleClickDot(i)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
