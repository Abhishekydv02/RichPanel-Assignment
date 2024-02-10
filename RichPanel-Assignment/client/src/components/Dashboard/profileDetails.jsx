import React, { useState } from 'react'
import './styles.modules.css';
import {Row,Col} from 'reactstrap';
import userIcon from '../../assets/images/userIcon.svg'

const ProfileDetails = () => {

  const [viewMoreDetail, setViewMoreDetails] = useState(false);

  return (
    <div className='containers'>
      <Row className='sectionTop'>
        <Row className='userDetails'>
          <img src = {userIcon} className='profileImg'/>
          <h4 className='userName'>Amit RG</h4>
          <span className='text userStatus'>{' • ' + 'Offline'}</span>
        </Row>
        <Row style={{display:'flex',justifyContent:'center'}}>
          <button className='callBtn'>Call</button>
          <button className='profileBtn'>Profile</button>
        </Row>
      </Row>

      <Row className='customerDetails'>
        <Row>
           <h3>Customer Details</h3>
        </Row>
        <Row>
           <Row>
            <Col md="6">
              <label  className='text'>Email</label>
            </Col>
             <Col md="6">
              <span className='label'>abhi@gmail.com</span>
             </Col>
           </Row>
           <Row>
             <Col md="6">
              <label  className='text'>First Name</label>
            </Col>
             <Col md="6">
              <span className='label'>Amit</span>
             </Col>
           </Row>
           <Row>
             <Col md="6">
              <label  className='text'>Last Name</label>
            </Col>
             <Col md="6">
              <span className='label'>RG</span>
             </Col>
           </Row>
        </Row>
        {!viewMoreDetail && (<button className='viewMoreBtn' onClick={()=>setViewMoreDetails(true)}>View more details</button>)}
        {viewMoreDetail && 
        (<Row>
          <Row>
          <Col md="6">
              <label  className='text'>Mobile No</label>
            </Col>
             <Col md="6">
              <span className='label'>123354312</span>
             </Col>
          </Row>
          {(<button className='showLessBtn' onClick={()=>setViewMoreDetails(false)}>Show Less</button>)}
        </Row>)
        }
      </Row>
    </div>
  )
}

export default ProfileDetails