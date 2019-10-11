import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './jumbo.css'

const Jumbo = (props) => {
  return(
    <Jumbotron className='jumbo'>
      <div className='vague-intro'>
        <h1>{props.title}</h1>
        <p>{props.summary}</p>
      </div>
    </Jumbotron>
  )
}

export default Jumbo;
