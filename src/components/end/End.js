import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import Image from '../../images/enki-home-end.png'

import { ReactComponent as Close } from '../../icons/Close.svg'

import Logo from '../../images/Logo.png'

import './end.css'
import GooglePlay from '../icons/GooglePlay'
import AppleStore from '../icons/AppleStore'

const End = () => {
  const [join, setJoin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const [validEmail, setValidEmail] = useState(true)
  const [validNumber, setValidNumber] = useState(true)

  const handleJoin = () => {
    setJoin(!join)
  }

  const handleApply = (e) => {
    e.preventDefault()
    const emailRegex = /\S+@\S+\.\S+/

    var pattern = new RegExp(/^[0-9\b]+$/)

    if (pattern.test(number)) {
      if (number.length > 5 && number.length < 12) {
        setValidNumber(true)
      } else {
        setValidNumber(false)
      }
    } else {
      setValidNumber(false)
    }

    if (emailRegex.test(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }

    if (!validNumber || !validEmail) {
      return
    }

    const value = {
      name: name,
      email: email,
      number: number,
    }

    emailjs.send('service_09ipewl', 'template_0xqwpfm', value, 'KixEmYbZg9Fy7VdAU').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    setJoin(!join)
  }
  return (
    <div className='componentFirst contactBC endBC'>
      <div className='contact end componentSecond'>
        <div className='contactContainer'>
          <div className='endTitle'>Make your learning experiences fun and social again.</div>
          <div className='introButtons'>
            {/* <div className='endButton' onClick={handleJoin}>
              Get Started
            </div> */}
            <GooglePlay />
            <AppleStore />
          </div>
        </div>
      </div>
      <img src={Image} alt='' className='endImage' />
      {join && (
        <div className='join'>
          <div className='joinCloseIcon'>
            <Close className='joinClose' onClick={handleJoin} />
          </div>
          <img src={Logo} alt='' />
          <div className='joinHeader'>Join Now</div>
          <div className='joinSubHeader'>Start your learning discover today</div>
          <div className='joinInputContainer'>
            <div className='joinInputText'>Full Name</div>
            <div className='joinInputField'>
              <input
                type='text'
                placeholder='Your name'
                value={name}
                name='name'
                className='joinInput'
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className='joinInputContainer'>
            <div className='joinInputText'>Email</div>
            <div className='joinInputField'>
              <input
                type='email'
                placeholder='Your email address'
                className={validEmail ? 'joinInput' : 'joinInput valid'}
                value={email}
                name='email'
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className='joinInputContainer'>
            <div className='joinInputText'>Phone Number</div>
            <div className='joinInputField'>
              <input
                type='tel'
                placeholder='Your phone number'
                className={validNumber ? 'joinInput' : 'joinInput valid'}
                name='number'
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
          </div>
          <div className='joinInputContainer'>
            <div className='joinButton' onClick={handleApply}>
              Apply
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default End
