import React from 'react'
import news1 from '../assets/images/news/news1.jpeg'
import {CiClock2} from 'react-icons/ci'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-wrapper'>
            <p className='sidebar-heading'>НОВИНИ</p>
            <hr />
            <div className='sidebar-item'>
                <div className='sidebar-item__content'>
                    <img src={news1} alt='news1' className='img-fluid sidebar-img'/>
                    <p>Годують до 3 тисяч людей на добу: Порошенко дорогою з фронту заїхав у відоме волонтерське кафе</p>
                </div>
                <div className='sidebar-item__time'>
                    <CiClock2 style={{fontSize:'12px', marginRight:'7px'}}/>
                    <span style={{fontSize:'12px'}}>03-06-2023</span>
                </div>
            </div>
            <div className='sidebar-item'>
                <div className='sidebar-item__content'>
                    <img src={news1} alt='news1' className='img-fluid sidebar-img'/>
                    <p>Годують до 3 тисяч людей на добу: Порошенко дорогою з фронту заїхав у відоме волонтерське кафе</p>
                </div>
                <div className='sidebar-item__time'>
                    <CiClock2 style={{fontSize:'12px', marginRight:'7px'}}/>
                    <span style={{fontSize:'12px'}}>03-06-2023</span>
                </div>
            </div>
            <div className='sidebar-item'>
                <div className='sidebar-item__content'>
                    <img src={news1} alt='news1' className='img-fluid sidebar-img'/>
                    <p>Годують до 3 тисяч людей на добу: Порошенко дорогою з фронту заїхав у відоме волонтерське кафе</p>
                </div>
                <div className='sidebar-item__time'>
                    <CiClock2 style={{fontSize:'12px', marginRight:'7px'}}/>
                    <span style={{fontSize:'12px'}}>03-06-2023</span>
                </div>
            </div>
            <div className='sidebar-item'>
                <div className='sidebar-item__content'>
                    <img src={news1} alt='news1' className='img-fluid sidebar-img'/>
                    <p>Годують до 3 тисяч людей на добу: Порошенко дорогою з фронту заїхав у відоме волонтерське кафе</p>
                </div>
                <div className='sidebar-item__time'>
                    <CiClock2 style={{fontSize:'12px', marginRight:'7px'}}/>
                    <span style={{fontSize:'12px'}}>03-06-2023</span>
                </div>
            </div>
            <div className='sidebar-item'>
                <div className='sidebar-item__content'>
                    <img src={news1} alt='news1' className='img-fluid sidebar-img'/>
                    <p>Годують до 3 тисяч людей на добу: Порошенко дорогою з фронту заїхав у відоме волонтерське кафе</p>
                </div>
                <div className='sidebar-item__time'>
                    <CiClock2 style={{fontSize:'12px', marginRight:'7px'}}/>
                    <span style={{fontSize:'12px'}}>03-06-2023</span>
                </div>
            </div>
        </div>
    </div>
  )
}
