import React from 'react'
import '../Style/Home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg01 from '../assets/images/hero-img02.jpg'
import heroImg02 from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import FeaturedTourList from '../components/Featured/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar'
import ServicesList from '../Services/ServicesList'
import MasonyImagesGallary from '../components/image-gallary/MasonryImagesGallery.jsx'
import Testomonial from '../components/Testimonial/Testomonial.jsx'
import NewsLatter from '../shared/NewsLatter.jsx'
function Home() {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Travelling opens the door to creating
                <span className='highlight'> memories</span>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus cumque atque nulla corrupti, fugit quidem illum distinctio illo totam earum reiciendis harum facilis mollitia ipsum rem eligendi soluta molestias perferendis!</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroImg02} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg01} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className='services__title'>We offer our best Services</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>


    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='featured__Tour-title'>
              Our featured tours
            </h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>


    <section className='Experience'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>With our all experience <br /> we will serve you </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Blanditiis sunt molestias aut soluta tempore reprehenderit?</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>12k+</span>
                <h6>Successfully Trip</h6>
              </div>
              <div className="counter_box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter_box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__image">
              <img src={experienceImg} alt="" />
            </div>

          </Col>
        </Row>
      </Container>
    </section>


    <section className='gallary'>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallary'} />
            <h2 className="gallary__title">Visit our customers tour gallary</h2>
          </Col>
          <Col>
            <MasonyImagesGallary />
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testo__title">What our fans say about us .</h2>
          </Col>
          <Col lg='12'>
            <Testomonial />
          </Col>
        </Row>
      </Container>
    </section>
    <NewsLatter />


  </>
}

export default Home