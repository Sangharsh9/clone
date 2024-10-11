import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="container">
                <h1 className="text-center my-4">About Sanjivani College Bus Services</h1>
                <div className="row">
                    {/* Map Section */}
                    <div className="col-md-6">
                        <h3 className="mt-4">Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1253.3131556724907!2d74.49478608957172!3d19.899901450902323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4474a245d261%3A0x806a6b9889186a80!2z4KS44KSC4KSc4KWA4KS14KSo4KWAIOCkleClieCksuClh-CknCDgpJHgpKvgpLwg4KSH4KSC4KSc4KWA4KSo4KS_4KSv4KSw4KS_4KSC4KSX!5e0!3m2!1shi!2sin!4v1726498276838!5m2!1shi!2sin"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ width: "100%", height: "400px", border: "0" }}
                        />
                    </div>

                    {/* Information Section */}
                    <div className="col-md-6">
                        <p>
                            Welcome to the Sanjivani College Bus Services! We are dedicated to providing safe, reliable, 
                            and convenient transportation for our students and staff. Our bus services ensure that everyone 
                            can access the college easily, promoting punctuality and comfort.
                        </p>
                        
                        <h3 className="mt-4">Our Mission</h3>
                        <p>
                            Our mission is to enhance the educational experience of our students by providing efficient 
                            transport solutions that cater to their needs. We aim to ensure safety, reliability, and comfort 
                            in every ride.
                        </p>
                        
                        <h3 className="mt-4">Services Offered</h3>
                        <ul>
                            <li>Regular bus routes to and from key locations.</li>
                            <li>Real-time bus tracking for students and parents.</li>
                            <li>Safe and comfortable travel with trained drivers.</li>
                            <li>Affordable fares for students.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
