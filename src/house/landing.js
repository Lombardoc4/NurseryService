import React from 'react';

import Jumbo from '../uniComp/jumbotron.component'
import './landing.css'
import logo from '../img/logo.jpg'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intros = (props) => {
  var intro = 'intros intro-card-'+ props.className;
  var more = 'more-' + props.className;


  return (
    <div>
      <div className={intro}>
        <div className = {props.className}>
          <Row>
            <Col xl={6}>
              <div style={{maxWidth: '800px'}}>
                <img src={logo} alt="..."/>
                <h1>{props.title}</h1>
                {props.children}
              </div>
            </Col>
            <Col xl={6}>
              <div>
                <button className='btn-primary'>
                  Test Button
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
);
}



class Landing extends React.Component{


  render() {
    var jumboContent = "This is not an ordinary application this is the APP. Developed by the PEOPLE for the people. the APP is really a great way to do stuff. with the APP your life will be better!"

    return (
      <div>
        <Jumbo title='the APP' summary={jumboContent}/>
        <div className='intros'>

          <Intros imgsrc={logo} title='the APP features' className='middle'>
            <h5>
              I wonder what happens if i type here
            </h5>
            <p>
              oh shoot its a paragraph component what a feature, im so amazed i have to write more to test more and more. wonder what happens if this is the full width. looks like the button survived... not for long
            </p>
          </Intros>

          <Intros imgsrc={logo} title='the left APP feature' className='left'>
            <h3>
              wow what a feature!
            </h3>
            <h1>
              what if one day i could be a feature for the APP
            </h1>
            <p>
              I can finally be happy now that i have the APP
            </p>
          </Intros>

          <Intros imgsrc={logo} title='the right APP features' className='right'>
            <p>
              omg so many features its like a film, lovin the APP
            </p>
          </Intros>
        </div>
      </div>
    );
  }
}

export default Landing;
