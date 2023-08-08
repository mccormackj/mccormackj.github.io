import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Contact (){
 return <div>
    <h2> Looking to connect?</h2>
        <p> Currently, I am based in Austin, TX. The best way to reach me is via email at mccormackj2001@gmail.com. You can also send me a connection request
         on LinkedIn or view my GitHub account!</p>
         <div class = "icons">
        <FontAwesomeIcon class="contact-icon" icon = { faLinkedin} onClick={() => openURL("https://www.linkedin.com/in/johanna-mccormack/")}/>
        <FontAwesomeIcon class="contact-icon" icon = { faGithubSquare} onClick={() => openURL("https://www.github.com/mccormackj")}/>
        <FontAwesomeIcon class="contact-icon" icon = { faEnvelope } onClick={() => openURL("mailto: mccormackj2001@gmail.com")}/>
        </div>
    </div>
}
 
function openURL(url){
    window.open(url)
}
export default Contact;