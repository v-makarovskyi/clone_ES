import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import Slider from '../components/Slider'


export default function HomePage() {
  return (
    <Container className='home-container'>
      <Row>
        <Col md={8}>
          <Slider />
        </Col>
        <Col md={4}>Sidebar</Col>
      </Row>
    </Container>
  )
}
