import React from 'react';


export default class Resume extends React.Component {
  render() {
    return(
      <section>
        <div className='turing-info'>
          <div className='turing-section'>
            <h2 className='turing-headline'> Looking For </h2>
            <p className='turing-text'>Front end development</p>
            <p className='turing-text'>React or MVC frameworks</p>
            <p className='turing-text'>TDD / BDD</p>
            <p className='turing-text'>Paired programming</p>
            <p className='turing-text'>Mentorship</p>
          </div>
          <br/>
          <div className='turing-section'>
            <h2 className='turing-headline'> Skills </h2>
            <p className='turing-text'>JavaScript (React / Ember)</p>
            <p className='turing-text'>CSS / Sass</p>
            <p className='turing-text'>HTML5</p>
            <p className='turing-text'>Staying organized</p>
          </div>
          <br/>
          <div className='turing-section'>
            <h2 className='turing-headline'> Preferred Locations </h2>
            <p className='turing-text'>Denver</p>
            <p className='turing-text'>Boulder</p>
            <p className='turing-text'>Boston</p>
            <p className='turing-text'>International</p>
          </div>
        </div>
        {/* <div className='triangle-down-resume'></div> */}
        <h2 className='resume-title'> EDUCATION </h2>
        <h3 className='resume-subtitle'> Turing School of Software & Design </h3>
        <p className='paragraph'> Front End Engineering </p>
        <h3 className='resume-subtitle'> Champlain College </h3>
        <p className='paragraph'> BS Professional Writing and Communication </p>
        <h3 className='resume-subtitle'> Griffith University </h3>
        <p className='paragraph'> Australian Culture Exchange </p>
        <br/>
        <h2 className='resume-title'> EMPLOYMENT </h2>
        <h3 className='resume-subtitle'> Apple, Inc. , Scheduling Administrator , Cambridge, MA	Spring 2014 - Jun 2015 </h3>
        <p className='paragraph'> -Responsible for creating, organizing and maintaining weekly work schedules and daily tasks for over one hundred employees using the Kronos Time Keeping application. </p>
        <p className='paragraph'> -Analyzed sales and traffic trends to create a schedule that caters to the needs of the business as well as maintains a healthy work/life balance for employees. </p>
        <p className='paragraph'> -Partnered with other leaders to create training schedules for new employees and continuing development training for existing employees. </p>
        <p className='paragraph'> -Addressed immediate issues such as employee call-outs. </p>
        <p className='paragraph'> -Planned store meetings for the entire staff. </p>
        <p className='paragraph'> -Played a major role in creating launch day schedules that provided a healthy environment for both employees and customers. </p>
        <h3 className='resume-subtitle'> Visual Merchandising Lead , Cambridge, MA	Winter 2010 - Spring 2014 </h3>
        <p className='paragraph'> -Led a small team of employees that were responsible for upholding the brand identity of Apple. </p>
        <p className='paragraph'> -Made sure everything in our store functioned properly when customers came in to try out our products. </p>
        <p className='paragraph'> -Maintained the software and hardware of all customer facing demo devices and internal employee devices. </p>
        <p className='paragraph'> -Fixed any demo devices that were broken. </p>
        <p className='paragraph'> -Maintained inventory of merchandising supplies the store needed to function smoothly on a daily basis. </p>
        <p className='paragraph'> -Led the merchandising team overnight before launch days to swap out and test all new products coming into the store. </p>
        <h3 className='resume-subtitle'> Specialist , Cambridge, MA	Sep 2008 - Winter 2010 </h3>
        <p className='paragraph'> -Supported customer sales, technical support and training. </p>
        <p className='paragraph'> -Responsible for updating and maintaining the point of sale software. </p>
        <p className='paragraph'> -Trained employees on more complicated sales transactions. </p>
        <p className='paragraph'> -Partnered with store leaders every night to help with cash handling and reporting. </p>
        <br/>
        <h2 className='resume-title'> SKILLS </h2>
        <h3 className='resume-subtitle'> FRONT END PROGRAMMING: JavaScript, HTML5, CSS3, Sass, React, Ember </h3>
        <br/>
        <h2 className='resume-title'> VOLUNTEERING </h2>
        <h3 className='resume-subtitle'> Boys and Girls Club Denver </h3>
        <p className='paragraph'> For two modules at Turing I was able to volunteer on Thursdays at the Boys and Girls Club in Denver. Thursday nights were designated as a girl's technology night and we taught girls to code through fun games and activities. </p>
      </section>
    )
  }
}
