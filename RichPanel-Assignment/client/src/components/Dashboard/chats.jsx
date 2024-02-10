
import React, { useState } from 'react';
import './styles.modules.css';
import {Row} from 'reactstrap';
import userIcon from '../../assets/images/userIcon.svg';

const ChatsSection = () => {

  const currentUserId = "1";

  const messages = [
    {
      text : "Hello hritik, bauua this side",
      id : "1",
      userId : "2",
      time : 123456
    },
    {
      text : "Hello bauaa, hritik this side",
      id : "2",
      userId : "1",
      time : 123456
    },
    {
      text : "Please let me know , how can i help you !",
      id : "3",
      userId : "1",
      time : 123456
    },
  ]

  const renderMsg = (msg) => {
     if(msg?.userId == currentUserId){
        return (
        <Row className='userChatsText' key={msg?.id}>
            <span>{msg?.text}</span>
            <img style={{height:"25px",width:"50px"}} src={userIcon}></img>
        </Row>)
     }
     else{
        return (<Row className='customerChatsText' key={msg?.id}>
            <img style={{height:"25px",width:"50px"}} src={userIcon}></img>
            <span>{msg?.text}</span>
        </Row>)
     }
  }

  return (
    <div className='containers chatContainer'> 
      <div className='chatUserName'>
        <h3>Amit RG</h3>
      </div>
      <div>
          {messages?.map((msg)=>{
            return renderMsg(msg);
          })}
      </div>
      <div className='msgDiv'>
        <input className='msgInput' type="text" placeholder='Type your msg here'></input>
      </div>
    </div> 
  );
};

export default ChatsSection;

