import styles from '../assets/css/styles.module.css'
import React, { Component } from 'react'
import Logo from '../img/Img_Contact.png'
import axios from 'axios'

class ContactUs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      emailAdd: '',
      message: '',
      response: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  testData = {
    "Status": "400",
    "Errors": [
      {
        "FieldName": "string",
        "MessageCode": "Success"
      },
      {
        "FieldName":"string",
        "MessageCode":"Failure"
      }
    ]
  }

  handleSubmit (event) {
    event.preventDefault()
    const jsonMessage = this.createJson(event.target[0].value, event.target[1].value, event.target[2].value)
    this.postData(jsonMessage)
  }

  createJson (name, email, message) {
    const jsonMessage = {
      FullName: name,
      EmailAddress: email,
      PhoneNumbers: [''],
      Message: message,
      bIncludeAddressDetails: true,
      AddressDetails: {
        AddressLine1: '',
        AddressLine2: '',
        CityTown: '',
        StateCounty: '',
        Postcode: '',
        Country: ''
      }
    }
    return jsonMessage
  }

  postData (message) {
    axios.post('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', message)
      .then(res =>this.handleResponse(testData))
      .catch(this.handleResponse("Error"))
  }
  
  handleResponse(response) {
    let res = ""
    if (response.Status == "200") {
      res =  "Successfully sent message"
    }
    else if (response.Status == "400"){
      console.log("in 400")
      response.Errors.forEach((err) => {
        res +=  err.MessageCode + " --- ";
      })
      } else {
        res = "Unable to contact server"
      }

      this.setState({
        response: res 
      })
    }
  


  render () {
    return (
      <div className={styles.contactBG}>
        <div className={styles.contactUsRow}>
        <div className={styles.contactUsColumn}>
          <h2>Contact us</h2>
          <p>
          Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sapien eget mi proin sed
          libero enim sed faucibus. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Sit amet
           aliquam id diam
          </p>
          <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
              <label>Full name:</label><br/>
              <input type="text" id="fname" name="fname"/><br/>
              <label>Email Address:</label><br/>
              <input type="text" id="lname" name="lname"/><br/>
              <label>Message</label><br/>
              <textarea rows = "5" cols = "60" name = "message" /><br/>
              <input type="submit" value="submit"/><br/>
          </form>
        </div>
        
        <div className={styles.contactUsColumn}>
          <img src={Logo} className={styles.contactImage}></img>
        </div>
        </div>
        </div>
    )
  }
}

export default ContactUs
