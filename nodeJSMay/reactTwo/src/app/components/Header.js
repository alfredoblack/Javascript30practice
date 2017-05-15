import React from 'react';

export class Header extends React.Component{
  render(){
    return(

      <nav className='navbar navbar-inverse'>
        <ul className='nav nav-tabs'>
          <li role="presentation" className="dropdown"><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Gallery</a></li>
        </ul>
      </nav>

      )
  }
}