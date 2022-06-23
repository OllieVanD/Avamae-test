import styles from '../assets/css/styles.module.css'
import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Logo from '../img/Img_Contact.png'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'

const Header = () => {
  return (

      <>
      <div>
        <Router>
        <div className={styles.header}>
      <div className={styles.columnOne}>
       <p> <img src={Logo} className={styles.headerLogo}></img>COMPANY</p>

        </div>

      <div className={styles.columnFurtherBlock}>
      <div className={styles.columnFurther}>
      <p><Link to="/about-us" id={styles.header}>ABOUT US</Link></p>
      </div>
      <div className={styles.columnFurther}>
        <p><Link to ="contact-us" id={styles.header}>CONTACT US</Link></p>
      </div>
      <div className={styles.columnFurther}>
        <p>
          <Link to="/" id={styles.header}>HOME</Link>
          </p>
      </div>
      </div>
      </div>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about-us" element={< AboutUs/>} />
      <Route path="/contact-us" element={< ContactUs/>} />
      </Routes>
      </Router>
    </div>

    </>
  )
}

export default Header
