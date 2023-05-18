import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
export default function Navbar() {
  const listLink = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About Me',
      link: '/about',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Contact Me',
      link: '/contact',
    },
  ];
  return (
    <div className="nav-bar">
      {listLink.map((el: { title: string; link: string }, index: number) => {
        return (
          <div key={index}>
            <Link to={el.link}>{el.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
