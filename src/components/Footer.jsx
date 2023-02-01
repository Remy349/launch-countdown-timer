import React from 'react'
import { FaPinterest, FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const FooterLink = ({ children }) => {
  return <a href='#!'>{children}</a>
}

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterLink>
        <FaFacebookSquare className='footer__link' />
      </FooterLink>
      <FooterLink>
        <FaPinterest className='footer__link' />
      </FooterLink>
      <FooterLink>
        <FaInstagram className='footer__link' />
      </FooterLink>
    </footer>
  )
}

export default Footer
