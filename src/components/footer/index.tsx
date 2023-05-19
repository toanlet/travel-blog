import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/svg/twitter.svg';
import { ReactComponent as InstagramIcon } from 'src/assets/icons/svg/instagram.svg';
import { ReactComponent as YoutubeIcon } from 'src/assets/icons/svg/youtube.svg';
import { ReactComponent as FacebookIcon } from 'src/assets/icons/svg/facebook.svg';
import './styles.scss';
export default function Footer() {
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
    <div className="footer">
      <div className="left">2020 ojjomedia All Right Reserved</div>
      <div className="content">
        <ul>
          <li>
            <Link to="/contact"> Contact</Link>{' '}
          </li>
          <li>
            <Link to="/privacy"> Privacy</Link>
          </li>
          <li>
            <Link to="/terms"> Terms</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        {' '}
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
