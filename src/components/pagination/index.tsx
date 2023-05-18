import React, { useEffect, useState } from 'react';

import './styles.scss';
import SlideButton from '../categories/slide-button';
interface PaginationProps {
  pageIndex: number;
  onChange: (type: string) => void;

  total: number;

  perPage: number;
}
export default function Pagination({
  pageIndex,
  onChange,
  total,
  perPage,
}: PaginationProps) {
  const [item, setItem] = useState<number[]>([]);
  useEffect(() => {
    const res = createArray(total / perPage);
    setItem(res);
  }, [total, perPage]);

  const createArray = (n: number) => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }

    return arr;
  };
  const hanldeAction = () => {};
  return (
    <div className="pagination">
      <SlideButton direction="next" handleAct={hanldeAction} />
      {item.map((el: number) => {
        return (
          <div key={el} className="page">
            {el}
          </div>
        );
      })}
      <SlideButton direction="pre" handleAct={hanldeAction} />
    </div>
  );
}
