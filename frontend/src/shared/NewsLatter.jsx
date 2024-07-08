import React from 'react'
import './news-latter.css'
import { Container,Row,Col } from 'reactstrap'

import maleTourist from '../assets/images/male-tourist.png'

function NewsLatter() {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get Useful travelling information</h2>


                    <div className="newslatter__input">
                        <input type="email" placeholder='Enter Your mail' />
                        <button className='btn newsletter__btn'>Subscribe Now</button>
                    </div>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam facere consequuntur asperiores aut quisquam, et quas rerum, deleniti accusamus reiciendis ipsum.</p>
                </div>
            </Col>

            <Col lg='6'>
                <div className="newsletter_Img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default NewsLatter