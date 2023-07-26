import React from 'react';
import profile from './assets/profilepic.jpg'
import freetail from './assets/FreetailLogo.png'
import './App.css';
import './About.css';
 
function About () {
    return <div id = "About">

        {/* ABOUT ME */}
        <div className = "AboutSection">
            <img id = "JoPic" src={profile} alt="Johanna is a young white woman with curly brown hair, dyed orange at the bottom" />
            <div>
                <h2>Hey there, I'm Johanna McCormack!</h2>
                <p>My passion lies in numbers and puzzles, which leads to me being a great problem-solver. It also means
                    I love a game of Tetris in my free time! I obtained my BS in ECE at UT Austin, and am currently an Engineer 1 at Qvest.US! Please click the Contact Me button or email 
                    mccormackj2001@gmail.com to connect!
                </p>
            </div>
        </div>

        {/* FREETAIL */}
        <div className="AboutSection">
            <img id = "FreetailLogo" src={freetail} alt="The Freetail Hackers logo is the outline of a bat in white on a black background" />
            <div>
                <h2>Outreach for Freetail Hackers</h2>
                <p> In college, I was a member of the outreach team for Freetail Hackers. Freetail Hackers hosts hackathons at UT Austin, including HackTX, Texas's largest
                    hackathon! You can check them out <a href='https://freetailhackers.com/' target='_blank'>here</a>. I loved being a part of this organization because I 
                    can make coding more accessible to everyone. As a woman who didn't delve into coding until college, I know how daunting it can be when everyone else seems 
                    to have coding figured out. I love being able to help students conquer imposter syndrome and dive into coding in a fun, stress-free environment! If you're 
                    interested in sponsoring or being a part of any of their events, feel free to reach out to hello@freetailhackers.com.
                </p>
            </div>
        </div>

    </div>
}

export default About;