import React from 'react';
import Project from './Project';
import Footer from './Footer';
import { remember, netflix, shoot, breakout, hangman, ideaBox, numberGuesser } from './Descriptions';
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return(
      <section>
        <section className='left-side'>
          <Project name='remEMBER' description={ remember() } site='https://shoot-the-breeze-8b841.firebaseapp.com/' github='https://github.com/sljohnson32/shoot-the-breeze' image='../images/remember.png' stackImg='../images/emberjs.png' stackImgTwo='../images/sass.png' stackImgThree='../images/invisible.png' />
          <Project name='Not Quite Netflix' description={ netflix() } site='https://shoot-the-breeze-8b841.firebaseapp.com/' github='https://github.com/sljohnson32/shoot-the-breeze' image='../images/not-quite-netflix.png' stackImg='../images/react.png' stackImgTwo='../images/redux.png' stackImgThree='../images/react-router.png' />
          <Project name='Message App' description={ shoot() } site='https://shoot-the-breeze-8b841.firebaseapp.com/' github='https://github.com/sljohnson32/shoot-the-breeze' image='../images/shoot.png' stackImg='../images/react.png' stackImgTwo='../images/firebase.png' stackImgThree='../images/sass.png' />
          <Project name='Breakout Game' description={ breakout() } site='https://devinmarieb.github.io/game-time-md/' github='https://github.com/devinmarieb/game-time-md' image='../images/breakout.png' stackImg='../images/canvas.png' stackImgTwo='../images/jquery.png' stackImgThree='../images/css.png' />
          <Project name='Halloween Hangman' description={ hangman() } site='https://devinmarieb.github.io/game-time/' github='https://github.com/devinmarieb/game-time' image='../images/hangman.png' stackImg='../images/jQuery.png' stackImgTwo='../images/css.png' stackImgThree='../images/invisible.png' />
          <Project name='Idea Box' description={ ideaBox() } site='https://devinmarieb.github.io/Idea_Box/' github='https://github.com/devinmarieb/Idea_Box' image='../images/ideabox.png' stackImg='../images/jquery.png' stackImgTwo='../images/css.png' stackImgThree='../images/invisible.png' />
          <Project name='Number Guesser' description={ numberGuesser() } site='https://devinmarieb.github.io/number-guesser-two/' github='https://github.com/devinmarieb/number-guesser-two' image='../images/numberguesser.png' stackImg='../images/js.jpg' stackImgTwo='../images/css.png' stackImgThree='../images/invisible.png' />
        </section>
    </section>
    )
  }
}
