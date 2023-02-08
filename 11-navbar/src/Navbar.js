import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showlinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  
  useEffect(() =>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    

    if(showlinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }

  }, [showlinks])
  return (
  <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo'></img>
        <button className='nav-toggle' onClick={() => setShowLinks(!showlinks)}>
          <FaBars></FaBars>
        </button>
      </div>
      
      <div className= 'links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
         {links.map((link) => {
          const {id, url, text} = link;
          return<li key={id}>
            <a href='url'>{text}</a>
          </li>
         })}
          </ul>
      </div>
      <ul className='social-icons'>
        {social.map((socialIcon) => {
          const {id, url, icon} = socialIcon;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>

        })}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
