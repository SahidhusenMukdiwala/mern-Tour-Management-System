import React, { useContext, useState } from 'react'
import '../Style/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import {AuthContext} from '../context/AuthContext.js'
import {BASE_URL} from '../Utils/config.js'

function Register() {
  
  const [credentials, setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
  })
  
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
 
 const handleChange = e => {
   setCredentials(prev => ({...prev,[e.target.id]:e.target.value}))
 }
 
 const handleClick =async e => {
   e.preventDefault()

   try {
    const res = await fetch(`${BASE_URL}/auth/register`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })

    const result = await res.json() 

    if(!res.ok) alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})

      navigate('/login')
   } catch (err) {
    alert(err.message)
   }
 }
 
  return  <section>
  <Container>
    <Row>
      <Col lg='8' className='m-auto'>
        <div className="login__container d-flex justify-content-between">
          <div className="login__img">
            <img src={registerImg} alt="" />
          </div>

          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Login</h2>

            <Form onSubmit={handleClick}>
            <FormGroup>
                <input type="text" id='username' placeholder='Username' required onChange={handleChange}/>
              </FormGroup>

              <FormGroup>
                <input type="email" id='email' placeholder='Enter Your Email' required onChange={handleChange}/>
              </FormGroup>

              <FormGroup>
              <input type="password" id='password' placeholder='Enter Your password' required onChange={handleChange}/>
              </FormGroup>
              <Button className='btn secondary__btn auth__btn' onClick={handleClick} type='submit'>Register</Button>
              <p>Already have an account ? <Link to='/login'>Create Account</Link></p>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
}

export default Register


// http://localhost:4000/api/v1/auth/register

// http://localhost:4000/api/v1/auth/register