import React, { useContext, useState } from 'react'
import '../Style/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext.js'
import { BASE_URL } from '../Utils/config.js'
function Login() {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  })

  const {dispatch} = useContext(AuthContext)

  const navigate = useNavigate()


  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault();

    dispatch({type:"LOGIN_START"})

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method: "post",
        headers:{
          'content-type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(credentials),
      })
      // console.log(credentials,"crede")
      const result =await res.json()
      if(!res.ok) alert(result.message)
        dispatch({type:"LOGIN_SUCCESS",payload:result.data})

      navigate('/')
    } catch (err) {
      dispatch({type:'LOGIN_FAILURE',payload:err.message})
    }
  }
  return <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" id='email' placeholder='Enter Your Email' required onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                  <input type="password" id='password' placeholder='Enter Your password' required onChange={handleChange} />
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' onClick={handleClick} type='submit'>Login</Button>
                <p>Don't have an account ? <Link to='/register'>Create</Link></p>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login

