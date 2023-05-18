import React from 'react';
import SearchIcon from 'src/assets/icons/svg/search.svg';

import { ReactComponent as TwitterIcon } from 'src/assets/icons/svg/twitter.svg';
import { ReactComponent as InstagramIcon } from 'src/assets/icons/svg/instagram.svg';
import { ReactComponent as YoutubeIcon } from 'src/assets/icons/svg/youtube.svg';
import { ReactComponent as FacebookIcon } from 'src/assets/icons/svg/facebook.svg';

import './styles.scss';
export default function Header() {
  const listIcon = [
    {
      component: <FacebookIcon className="icon-img" width={12} />,
    },
    {
      component: <TwitterIcon className="icon-img" width={12} />,
    },
    {
      component: <InstagramIcon className="icon-img" width={12} />,
    },
    {
      component: <YoutubeIcon className="icon-img" width={12} />,
    },
  ];
  return (
    <div className="header">
      <div className="logo">
        <a href="/"> Gallivant</a>
      </div>
      <div className="form-search">
        <img src={SearchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search your option"
          className="input-search"
        />
      </div>
      <div className="list-icon">
        {listIcon.map((el: any, index: number) => {
          return (
            <span className="icon-item" key={index + 1}>
              {' '}
              {el.component}
            </span>
          );
        })}
      </div>
    </div>
  );
}
