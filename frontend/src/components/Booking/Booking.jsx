import React, { useContext, useState } from 'react'
import './booking.css'
import { Form, ListGroup, FormGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../Utils/config'

function Booking({ tour, avgRating }) {
    const { price, reviews, title } = tour
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullname: '',
        phone: '',
        guestSize: '1',
        bookAt: ''
    })



    const ServiceFee = 10
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(ServiceFee)

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    // send data to server
    const HandleClick = async e => {
        e.preventDefault();

        console.log(booking)
        try {
            if (!user || user === undefined || user === null) {
                alert("please Sign in")
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(booking)
            })

            const result = await res.json()

            if (!res.ok) {
                return alert(result.message)
            }
            navigate('/thank-you')
        } catch (error) {
            alert(error.message)
        }
        console.log(booking)
    }
    return <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/Per Person </span></h3>

            <span className="tour__rating d-flex align-items-center">
                <i className="ri-star-s-fill"></i>
                {avgRating === 0 ? null : avgRating
                }({reviews?.length})

            </span>
        </div>

        {/* ======================= Booking Form ================== */}

        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={HandleClick}>
                <FormGroup>
                    <input type="text" placeholder='Full Name' id='fullname' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone' id='phone' maxLength={10} required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" id='bookAt' required onChange={handleChange} />
                    <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>

        {/* ================= booking Btn ====================== */}

        <div className="booking__button">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price} <i className="ri-close-line"></i>1 Person</h5>
                    <span>${price}</span>
                </ListGroupItem>

                <ListGroupItem className='border-0 px-0'>
                    <h5>Services Charge</h5>
                    <span>${ServiceFee}</span>
                </ListGroupItem>

                <ListGroupItem className='total border-0 px-0'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>

            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4' onClick={HandleClick}>Book Now</Button>
        </div>
    </div>
}

export default Booking