import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false)
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

  return <div className={`header ${show && 'header__black'}`}>
      <img src="netflix.png" alt="" />
  </div>;
}

export default Header;
