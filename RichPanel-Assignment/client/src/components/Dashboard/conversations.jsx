
import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import './styles.modules.css';
import refreshIcon from '../../assets/images/refreshIcon.svg'

const Conversations = () => {
  
  const data = [
    {
      clientName : "Amit Rg",
      msgType : "Facebook DM",
      subject : "Awesome Product",
      msg : "Hey There, probably did one of the y.............",
      time: "10 min"
    },
    {
      clientName : "Abhi Yadav",
      msgType : "Twitter DM",
      subject : "Available in Store",
      msg : "Hi , Do you have any t-shirts available ......",
      time : "8 min"
    },
  ]
  return (
    <div className='containers'> 
      <div className='conversationHeader'>
      <h3>Conversations</h3>
      <button className='refreshBtn'><img src={refreshIcon} /></button>
      </div>

      {data?.map((item)=>
        (<div className="conversationItem">
          <Row >
            <Col className='checkBox' md="1" xs="1">
              <input type='checkbox' />
            </Col>
            <Col md="8" xs="8" style={{}}>
              <Row className='pl5 body-1-strong'>{item?.clientName}</Row>
              <Row className='pl5 body-2'>{item?.msgType}</Row>
            </Col >
            <Col md="3" xs="3">
            <span className='text'>{item?.time}</span>
            </Col>
          </Row>
          <Row className='itemContent'>
            <Col md="12" xs="12">
              <Row className='label'>
                {item?.subject}
              </Row>
              <Row className='text'>
                {item?.msg}
              </Row>
            </Col>
          </Row>
       </div>)
      )}
      
    </div> 
  );
};

export default Conversations;

