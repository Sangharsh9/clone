import React from 'react';
import './About.css';
const About = () => {
    return (
        <div>
           

            
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1253.3131556724907!2d74.49478608957172!3d19.899901450902323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4474a245d261%3A0x806a6b9889186a80!2z4KS44KSC4KSc4KWA4KS14KSo4KWAIOCkleClieCksuClh-CknCDgpJHgpKvgpLwg4KSH4KSC4KSc4KWA4KSo4KS_4KSv4KSw4KS_4KSC4KSX!5e0!3m2!1shi!2sin!4v1726498276838!5m2!1shi!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ width: "50%", height: "400px", border: "0" }}
                />
            </div>
        </div>
    );
};

export default About;
