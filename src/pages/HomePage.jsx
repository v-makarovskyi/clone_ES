import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import Slider from '../components/Slider'
import SideBar from '../components/SideBar'


export default function HomePage() {
  return (
    <div className='home'>
       <Container className='home-container'>
      <Row>
        <Col md={8}>
          <div className='slider-wrapper'>
              <Slider />
          </div>
        </Col>
        <Col md={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
    </div>
   
  )
}
