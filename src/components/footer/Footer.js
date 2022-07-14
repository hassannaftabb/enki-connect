import React from 'react'
import { useHistory } from 'react-router-dom'

import { ReactComponent as TwitterSVG } from '../../icons/Twitter.svg'
import { ReactComponent as FacebookSVG } from '../../icons/Facebook.svg'
import { ReactComponent as PinterestSVG } from '../../icons/Pinterest.svg'
import { ReactComponent as LinkedInSVG } from '../../icons/LinkedIn.svg'
import { ReactComponent as WhatsappSVG } from '../../icons/Whatsapp.svg'

import Logo from '../../images/Logo.png'

import './footer.css'
const Footer = () => {
  let history = useHistory()

  const handleTwitter = () => {
    window.open('https://www.twitter.com/enkiconnect/')
  }

  const handleFacebook = () => {
    window.open('https://www.facebook.com/Enki-Connect-101217775927052')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/company/enkiconnect')
  }
  const handlePinterest = () => {
    window.open('https://pin.it/608tj9r')
  }
  const handleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=61482174702')
  }

  const handleToFAQ = () => {
    history.push('/FAQ')
  }

  const handleTerms = () => {
    history.push('/Terms')
  }

  const handlePrivacy = () => {
    history.push('/Privacy')
  }

  const handleSupport = () => {
    window.open('mailto::enkiconnect_board_1651812700_b1ac2038443bc270e6b1__23995924@use1.mx.monday.com')
  }

  return (
    <div className='footerBC componentFirst'>
      <div className='footerMain componentSecond'>
        <div className='footerMainLeft'>
          <div className='footerMainLeftLogo'>
            <img src={Logo} alt='' />
            Learn, Share & Earn
          </div>
          <div className='footerMainLeftText'>Follow us on our socials</div>
          <div className='footerMainLeftLinks'>
            <FacebookSVG className='footerIcon' onClick={handleFacebook} />
            <TwitterSVG className='footerIcon' onClick={handleTwitter} />
            <LinkedInSVG className='footerIcon' onClick={handleLinkedIn} />
            <PinterestSVG className='footerIcon' onClick={handlePinterest} />
            <WhatsappSVG className='footerIcon' onClick={handleWhatsapp} />
          </div>
          <div className='footerMainLeftCopy'>All Rights Reserved Ⓒ 2021 Enki Connect Pty Ltd</div>
        </div>
        <div className='footerMainRight'>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Follow Us</div>
            <div className='footerMainRightItemText' onClick={handlePinterest}>
              Pinterest
            </div>
            <div className='footerMainRightItemText' onClick={handleTwitter}>
              Twitter
            </div>
            <div className='footerMainRightItemText' onClick={handleFacebook}>
              Facebook
            </div>
            <div className='footerMainRightItemText' onClick={handleWhatsapp}>
              Whatsapp
            </div>
          </div>
          <div className='footerMainRightItem'>
            <div className='footerMainRightItemTitle'>Legal</div>
            <div className='footerMainRightItemText' onClick={handleTerms}>
              Terms
            </div>
            <div className='footerMainRightItemText' onClick={handleToFAQ}>
              FAQ's
            </div>
            <div className='footerMainRightItemText' onClick={handlePrivacy}>
              Privacy
            </div>
            <div className='footerMainRightItemText' onClick={handleSupport}>
              Support
            </div>
          </div>
        </div>

        <div className='footerMainLeftCopyMobile'>All Rights Reserved <br />Ⓒ 2021 Enki Connect Pty Ltd</div>
      </div>
    </div>
  )
}

export default Footer
