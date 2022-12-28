import fontawesome from '@fortawesome/fontawesome'
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ContactItem.css'

fontawesome.library.add(faLocationDot, faClock, faEnvelope, faPhone);

function ContactItem({title, icon, content}) {
  return (
    <div className="home__bottom-contact-item">
      <FontAwesomeIcon className="home__bottom-contact-item-icon" icon={icon} />
      <div className="home__bottom-contact-item-title">{title}</div>
      {
        content.map((element, index) => (
          <div key={index} className="home__bottom-contact-item-content">{element}</div>
        ))
      }
    </div>
  )
}

export default ContactItem
