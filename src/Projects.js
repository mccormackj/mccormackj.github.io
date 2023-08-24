import React from 'react';
import timer from './assets/TimerSS.png'
import './App.css';
import './Projects.css';

function Projects (){
    return <div id = "Projects">
    {/* INTERVAL TIMER */}
        <div className = "ProjectSection">
            <img id = "TimerSS" src={timer} alt="A screenshot of an app with a status display, play and pause buttons, and taskbar."/>
            <div>
                <h2>Random Interval Timer</h2>
                <p>The random interval timer was inspired by the Pomodoro method, combined with B.F. Skinner's study on variable-interval schedules in operant conditioning.
                   To better enforce my own productivity, I created a timer in which the remaining time left is not only hidden, but randomized. This prevents me from fixating
                   on the timer, and instead allows me to delve deeper into my work. The app was created with JavaFX, with Maven dependency management, and is still undergoing
                   stylistic changes. You can view the git repository <a href='https://github.com/mccormackj/randomintervaltimer' target='_blank'>here</a>.
                </p>
            </div>
        </div>
    </div>
}
 
export default Projects;