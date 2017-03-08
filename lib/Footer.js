import React from 'react';
import { Link } from 'react-router';


export default class Footer extends React.Component {
  render() {
    return(
      <div className='home-container'>
      {window.location.pathname !== '/' ?
      <Link to='/'>
      <button className='home-btn'>Home</button>
    </Link>
    : ''}
      <div className={this.props.className}>
        <h2 className='find-me'> find me: </h2>
        <a  className='github' href='https://github.com/devinmarieb' target='blank'> GitHub </a>
        <a  className='linkedin' href='https://www.linkedin.com/in/devin-beliveau-2126448' target='blank'> LinkedIn </a>
        <h2 className='find-me'> contact me: </h2>
        <a className='mail' href="mailto:devinmarieb@gmail.com"> Email </a>
      </div>
    </div>
    )
  }
}
