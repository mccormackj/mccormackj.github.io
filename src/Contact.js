import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Contact (){
 return <div>
    <FontAwesomeIcon class="contact-icon" icon = { faLinkedin} size="5x" onClick={() => openURL("https://www.linkedin.com/in/johanna-mccormack/")}/>
    <FontAwesomeIcon class="contact-icon" icon = { faGithubSquare} size="5x" onClick={() => openURL("https://www.github.com/mccormackj")}/>
    <FontAwesomeIcon class="contact-icon" icon = { faPhone } size="5x" onClick={() => openURL("tel:+2149237938")}/>
    <FontAwesomeIcon class="contact-icon" icon = { faEnvelope } size="5x" onClick={() => openURL("mailto: mccormackj2001@gmail.com")}/>
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
 
function openURL(url){
    window.open(url)
}
export default Contact;