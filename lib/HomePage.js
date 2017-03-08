import React from 'react';
import { Link } from 'react-router'
import App from './App'
import Resume from './Resume'
import Footer from './Footer'

export default class HomePage extends React.Component {
  render() {
    return(
      <div>
        <section className='left'>
          <div className='header'>
            <h1 className='my-name'> devin beliveau </h1>
            <h2 className='my-title'> front end developer </h2>
          </div>
          <Footer className='footer' />
        </section>
        <section className='right'>
          <div className='top'>
            <p className='welcome-text'>
              I'm a front end engineering student at the
              <a href='https://www.turing.io/' className='turing' target='blank'> Turing School of Software & Design </a>
              in Denver, CO.
              In the front end program, I've focused on the world of JavaScript, CSS and HTML.
              I enjoy working in React and Ember and am eager to learn more about MVC frameworks and TDD/BDD.
              Inside my site are links to project repos and deliverables as well as my resume.
            </p>
            <p className='welcome-text'>
              Turing is split up into four six week modules which all focus on different aspects of front end development.
              The majority of the time we work in teams and have as little as a few days and as much as two weeks to learn a concept and deliver a project.
              The projects on this site are listed from newest to oldest and each one has a link to the deliverable as well as the code on GitHub.
            </p>
        </div>
        {/* <div className='triangle-down'></div> */}
        <App />
        <Resume />
        </section>
      </div>
    )
  }
}
