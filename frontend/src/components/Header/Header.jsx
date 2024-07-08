import React, { useContext, useEffect, useRef } from 'react'
import './header.css'
import { Container, Row, Button } from 'reactstrap'

import { NavLink, Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import { AuthContext } from '../../context/AuthContext'

const nav_links = [
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
function Header() {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      }
      else {
        headerRef.current.classList.remove('sticky__header')

      }
    })
  }

  useEffect(() => {
    stickyHeader()
    return window.addEventListener('scroll', stickyHeader)
  },)

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* ================= Logo ================= */}
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>

          {/* ==================== Menu Start ====================== */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className='menu d-flex align-items-center gap-5'>
              {
                nav_links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ""}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* ================= menu end ============== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">

              {
                user ?
                  <>
                    <h5 className='mb-0'>{user.username}</h5>
                    <Button className='btn btn-dark' onClick={logout}>Logout</Button> 
                  </>
                    :
                    <>
                       <Button className='btn primary__btn'><Link to='/login'>Login</Link></Button>
                    </>
              
            }
            {/* <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button> */}
            </div>

            <span className='mobile__menu' onClick={toggleMenu}><i className="ri-menu-line"></i></span>

          </div>

        </div>
      </Row>
    </Container>
  </header>
}

export default Header