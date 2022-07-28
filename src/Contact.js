import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Contact (){
 return <div>
    <FontAwesomeIcon icon = {faLinkedin} />
    <FontAwesomeIcon icon = {faGithubSquare} />
    <FontAwesomeIcon icon = { faPhone } />
    <FontAwesomeIcon icon = { faEnvelope } />
            <h2> Phone Number</h2>
            <h2> Email </h2>
            <address>
                You can find us here:<br />
                GeeksforGeeks<br />
                5th & 6th Floor, Royal Kapsons, A- 118, <br />
                Sector- 136, Noida, Uttar Pradesh (201305)
            </address>
        </div>
}
 
export default Contact;