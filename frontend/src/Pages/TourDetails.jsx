import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Style/tourdetails.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
// import TourData from '../assets/data/tours'
import calculateAvgRating from '../Utils/avgRating';
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/NewsLatter'
import useFetch from '../hooks/usefetch.js';
import { BASE_URL } from '../Utils/config.js'
import {AuthContext} from '../context/AuthContext.js'

function TourDetails() {

  const { id } = useParams()

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const {user} = useContext(AuthContext)

  const { data: tour,loading,error } = useFetch(`${BASE_URL}/tours/${id}`)
  console.log(`${BASE_URL}/tours/${id}`)

  const { title, city, distance, price, maxGroupSize, desc, reviews, photo, address } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  console.log(reviews,"reviews to")


  const option = { day: 'numeric', month: 'long', year: 'numeric' }

  const SubmitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value

    console.log(reviewText)
    try {
        if(!user || user === undefined || user === null){
          alert("please Sign in")
        }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating:tourRating
      }
      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method: 'post',
        headers:{
          'content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify(reviewObj),
      })
      const result = await res.json()
      console.log(`${BASE_URL}/review/${id}`,"tour")

      if(!result.ok) {
        return alert(result.message)
      }

      alert(result.message)

    } catch (err) {
      alert(err.message)
    }
  }


  useEffect(()=>{
    window.scrollTo(0, 0)
  },[tour]);



  return <>
    <section>
      <Container>

        {
          loading && <h4 className="text-center">Loading .........</h4>
        }
        {
          error && <h4 className="text-center">{error}</h4>
        }
{
  !loading && !error && (
    <Row>
    <Col lg='8'>
      <div className="tour__content">
        <img src={photo} alt="" />

        <div className="tour__info">
          <h2>{title}</h2>

          <div className="d-flex align-items-center gap-5">
            <span className='tour__location d-flex align-items-center gap-1'>
              <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i> 
              {avgRating === 0 ? null : avgRating}
               {totalRating === 0 ? ('Not rated') :  (<span>({reviews?.length})</span>)}
            </span>

            <span><i className="ri-map-pin-user-fill"></i>{address}</span>
          </div>

          <div className="tour_extra-details">
            <span><i className="ri-map-pin-2-line"></i>{city}</span>
            <span><i className="ri-money-dollar-circle-line"></i>{price}/per Person</span>
            <span><i className="ri-map-pin-time-line"></i>{distance} k/m</span>
            <span><i className="ri-group-line"></i>{maxGroupSize} People</span>
          </div>
          <h5>Description</h5>
          <p>{desc}</p>
        </div>

        {/* ========= Tour reviews =============== */}
        <div className="tour__reviews mt-4">
          <h4>Reviews ({reviews?.length} reviews)</h4>

          <Form onSubmit={SubmitHandler}>
            <div className="d-flex align-items-center gap-3 mb-4 rating__group">
              <span style={{ cursor: 'pointer' }} onClick={() => setTourRating(1)}>1
                <i className='ri-star-s-fill'></i>
              </span>

              <span style={{ cursor: 'pointer' }} onClick={() => setTourRating(2)}>2
                <i className='ri-star-s-fill'></i>
              </span>

              <span style={{ cursor: 'pointer' }} onClick={() => setTourRating(3)}>3
                <i className='ri-star-s-fill'></i>
              </span>

              <span style={{ cursor: 'pointer' }} onClick={() => setTourRating(4)}>4
                <i className='ri-star-s-fill'></i>
              </span>

              <span style={{ cursor: 'pointer' }} onClick={() => setTourRating(5)}>5
                <i className='ri-star-s-fill'></i>
              </span>
            </div>

            <div className="review__input">
              <input type="text" ref={reviewMsgRef} placeholder='Share Your Thoughts' required />
              <button className='btn primary__btn text-white' type='submit'>Submit</button>
            </div>
          </Form>

          <ListGroup className='user__reviews'>
            {
             reviews?.map(review => (
              <div className="review__item">
                <img src={avatar} alt="" />

                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5>{review.username}</h5>
                      <p>{new Date(review.createdAt).toLocaleDateString('en-us', option)}
                      </p>
                    </div>
                    <span className="d-flex-align-items-center">{review.rating}<i className="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <h6>{review.reviewText}</h6>
                </div>
              </div>
            ))
            }
          </ListGroup>
        </div>
      </div>
    </Col>
    <Col lg='4'>
      <Booking tour={tour} avgRating={avgRating}/>
    </Col>
  </Row>
  )
}
      </Container>
    </section>
    <Newsletter />
  </>
}

export default TourDetails