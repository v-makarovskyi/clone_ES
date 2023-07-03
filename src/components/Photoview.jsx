import React from 'react'
import {Row, Col} from 'react-bootstrap'
import warrior1 from '../assets/images/photoOfWarriors/warrior1.jpg'
import warrior2 from '../assets/images/photoOfWarriors/warrior2.jpg'
import warrior3 from '../assets/images/photoOfWarriors/warrior3.jpg'
import warrior4 from '../assets/images/photoOfWarriors/warrior4.jpg'
import warrior5 from '../assets/images/photoOfWarriors/warrior5.jpg'
import warrior6 from '../assets/images/photoOfWarriors/warrior6.jpg'
import warrior7 from '../assets/images/photoOfWarriors/warrior7.jpg' 
import warrior8 from '../assets/images/photoOfWarriors/warrior8.jpg' 




export default function Photoview() {
  return (
    <Row className='photoview-wrapper'>
      <p className='blockVideo-heading'>ЗАГИНУЛИ В БОЯХ ЗА УКРАЇНУ</p>
      <hr />
      <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior1} alt='Сергій Пономаренко' />
            <span>Сергій Пономаренко</span>
          </div>
        </div>
      </Col>
      <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior2} alt='Тарас Жеребецький' />
            <span>Тарас Жеребецький</span>
          </div>
        </div>
      </Col>
      <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior3} alt='Назар Мялікгулиєв' />
            <span>Назар Мялікгулиєв</span>
          </div>
        </div>
      </Col>
      <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior4} alt='Тимофій Рудюк' />
            <span>Тимофій Рудюк</span>
          </div>
        </div>
      </Col>
      <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior5} alt='Віктор Наумов' />
            <span>Віктор Наумов</span>
          </div>
        </div>
      </Col>
      <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior6} alt='Олександр Чабан' />
            <span>Олександр Чабан</span>
          </div>
        </div>
      </Col>
     <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior7} alt='Юрій Каракай' />
            <span>Юрій Каракай</span>
          </div>
        </div>
      </Col> 
      <Col xs={3} md={3} className='photoview'>
        <div className='photoview-item'>
          <div className='photoview-img__container'>
            <img className='photoview-img' src={warrior8} alt='Володимир Левицький' />
            <span>Володимир Левицький</span>
          </div>
        </div>
      </Col>  
    </Row>
  )
}
