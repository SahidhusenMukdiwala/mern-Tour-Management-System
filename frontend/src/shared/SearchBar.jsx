import React, { useRef } from 'react'
import './SearchBar.css'
import { Col, Form, FormGroup } from 'reactstrap'
import { BASE_URL } from '../Utils/config.js'
import { useNavigate } from 'react-router-dom'



function SearchBar() {

    const locationref = useRef('')
    const distanceref = useRef(0)
    const maxGroupSizeref = useRef(0)
    const navigate = useNavigate()

    const searchHandle = async () => {
        const location = locationref.current.value
        const distance = distanceref.current.value
        const maxGroupSize = maxGroupSizeref.current.value

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert('All feild are required !!')
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if (!res.ok) alert('Something went wrong')

        const result = await res.json()
        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data })

    }


    return <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i className="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going ?' ref={locationref} />
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i className="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distence</h6>
                        <input type="number" placeholder='Distence k/m' ref={distanceref} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                        <i className="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="text" placeholder='0' ref={maxGroupSizeref} />
                    </div>
                </FormGroup>

                <span className='search__icon' type='submit' onClick={searchHandle}>
                    <i className='ri-search-line'></i>
                </span>
            </Form>
        </div>
    </Col>
}

export default SearchBar