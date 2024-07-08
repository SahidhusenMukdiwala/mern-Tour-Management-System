import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours',
  }
]
const quick_links2 = [
  {
    path: '/gallary',
    display: 'Gallary'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register',
  }
]
function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, adipisci.</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className='ri-youtube-line'></i></Link>
                </span>
                <span>
                  <Link to='#'><i className='ri-instagram-line'></i></Link>
                </span>
                <span>
                  <Link to='#'><i className='ri-facebook-line'></i></Link>
                </span>
                <span>
                  <Link to='#'><i className='ri-github-line'></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path} >{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Contect</h5>
            <ListGroup className='footer_quick-links'>
             
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i className='ri-map-pin-line'></i></span>
                      Address: 
                    </h6>
                    <p className='mb-0'>Lorem ipsum dolor sit amet.</p>
                  </ListGroupItem>
          
            </ListGroup>

            <ListGroup className='footer_quick-links'>
             
             <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
               
               <h6 className='mb-0 d-flex align-items-center gap-2'>
                 <span><i className='ri-mail-line'></i></span>
                 Mail: 
               </h6>
               <p className='mb-0'>Abc@gmail.com</p>
             </ListGroupItem>
     
       </ListGroup>
          </Col>
          <Col lg='12'>
            <p style={{textAlign:'center',marginTop:'15px',marginBottom:'0px4'}}>
            All copyright reseved By <span style={{fontSize:'1.1rem',color:'#faa935',fontWeight:'500'}}>Sahidhusen Mukdiwala</span>
            </p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer