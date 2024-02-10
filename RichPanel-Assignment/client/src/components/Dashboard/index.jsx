// Login.js

import React, { useState } from 'react';
import { Col,Row } from 'reactstrap';
import Conversations from './conversations';
import ChatsSection from './chats';
import Navigation from './navigation';
import ProfileDetails from './profileDetails';

const Dashboard = () => {

  return (
    <> 
      <Row style={{background:"rgba(205,209,228,0.3"}}>
        <Col md="1" xs="12">
            <Navigation />
        </Col>
        <Col md="3" xs="12">
            <Conversations />
        </Col>
        <Col md="5" xs="12">
            <ChatsSection />
        </Col>
        <Col md="3" xs="12">
            <ProfileDetails />
        </Col>
      </Row>
      {/* <h1>Hello</h1> */}
    </> 
  );
};

export default Dashboard;

