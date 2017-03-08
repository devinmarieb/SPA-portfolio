import React from 'react';


export default class Project extends React.Component {
  render() {
    let { site, image, stackImg, stackImgTwo, stackImgThree, name, description, github } = this.props;
    return(
      <section className='project'>
        <a href={site} target='_blank'>
          <img src={image} className='project-image' alt='projet image' />
        </a>
        <div className='stack'>
          <img className='stack-img' src={ stackImg } />
          <img className='stack-img' src={ stackImgTwo } />
          <img className='stack-img' src={ stackImgThree } />
        </div>
        <div className='project-card'>
          <h2 className='project-title'> { name } </h2>
          <p className='project-description'> { description } </p>
          <a  className='project-link' href={ site } target='blank'> Project Site </a>
          <span> / </span>
          <a className='project-link' href={ github } target='blank'> The Code </a>
        </div>
      </section>
    )
  }
}
