import React from 'react';

import './landing.css'
import logo from '../img/logo.jpg'

import Jumbotron from 'react-bootstrap/Jumbotron';

const Intros = (props) => {
  var intro = 'intro-card-'+ props.className;

  if (props.className === 'middle'){

  }
  return (
    <div>
      <div className={intro}>
        <div className = {props.className}>
          <img src={logo} alt="..."/>
          <h1>{props.title}</h1>
          <p> {props.children} </p>
        </div>
      </div>
      <div className='moreInfo'>

      </div>
    </div>
);
}

const Jumbo = ({title, summary}) => (
  <Jumbotron className='jumbo'>
    <div className='vague-intro'>
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  </Jumbotron>
)

class Landing extends React.Component{


  render() {
    var jumboContent = "This is not an ordinary application this is the APP. Developed by the PEOPLE for the people. the APP is really a great way to do stuff. with the APP your life will be better!"

    return (
      <div>
        <Jumbo title='the APP'
               summary={jumboContent}
        />

        <div className='intros'>
          <Intros imgsrc={logo} title='the APP features' className='middle'>
          <p>I wonder what happens if i type here</p>
          <p>oh shoot its a paragraph component what a feature</p>
          </Intros>
          <Intros imgsrc={logo} title='the left APP feature' className='left'>
          <h3>wow what a feature!</h3>
          <h1>what if one day i could be a feature for the APP</h1>
          <p> I can finally be happy now that i have the APP </p>
          </Intros>
          <Intros imgsrc={logo} title='the right APP features' className='right'>
          <p>omg so many features its like a film, lovin the APP </p>
          </Intros>
        </div>


      </div>
    )
  }
}

export default Landing;
