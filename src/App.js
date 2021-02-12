import logo from './logo.svg';
import './App.css';
import React, { useState, Component, useEffect } from "react";
import img1 from './img/DAFAQ.png'
import Control from "./components/control"
import Server from "./components/server"


function App() {
    const [wheather, setwheather] = useState(0);

    const [Na, setNa] = useState(0)
    const [C, setC] = useState("#fd581e");
    var i;





    return (

        <div>
            <a class="weatherwidget-io" href="https://forecast7.com/en/10d5376d21/thrissur/" data-label_1="Thrissur" data-label_2="weather" data-theme="original" >Thrissur</a>
            <nav class="site-navigation">
                <div class="logo"></div>
                <div class="hamburger-menu d-lg-none"><span></span><span></span><span></span><span></span></div>
                <ul>
                    <li><a data-scroll="" href="#main-section">Home</a></li>
                    <li><a data-scroll="" href="#">Sensor Unit</a></li>
                    <li><a data-scroll="" href="#r">Control Unit</a></li>
                    <li><a data-scroll="" href="#">About</a></li>
                    <li><a data-scroll="" href="#">Login</a></li>
                </ul>
            </nav>
            {/* <a class="buttonDownload"
                onclick="a('event', 'install', {'event_category': 'Install','event_label': 'PWA Install'});">Install</a> */}
            <section id="main-section">
                <div class="content"><span>Harita Veedu</span>
                    <h1>Green House Solution</h1>
                    <h3>To the New Organic</h3>
                    <p>Automatic Hybrid</p>
                    {/* <a class="button"
                        href="http://app.breakcorona.in/register">Apply Now</a> */}
                </div>
                <div class="image">

                    <img class="img-fluid w-75" src={img1} />
                </div>
                <div class="counter">
                    <div class="counter-item">
                        <span class="count-text">Sensor Unit</span>
                        {/* <span class="count-number">0</span> */}
                    </div>
                    <div class="counter-item">
                        <span class="count-text">Control Unit</span>
                        {/* <span class="count-number">0</span> */}
                    </div>
                    <div class="counter-item">
                        <span class="count-text" >GreenHouse</span>
                        {/* <span class="count-number">0</span> */}
                    </div>
                    <div class="counter-item">
                        <span class="count-text" >Flood Alert</span>
                        {/* <span class="count-number">0</span> */}
                    </div>
                    <div class="counter-item"
                        style={{
                            background: "radial-gradient(circle at 0 0, " + "#2aba4c" + " 0, #8cfc92 100%)",
                            color: "#FFFFFF"
                        }}>
                        <span class="count-text"
                        >Pesticide Alert</span>
                        {/* <span class="count-number">0</span> */}
                    </div>

                </div>
            </section>
            <Server />
            <Control />
            <section class="section-content" id="ksum-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 left-col">
                            {/* <img class="img-fluid" src="logo-white.1938fd82.svg" alt="ksum logo"> */}
                            <div class="address">
                                <p>G3B, Thejaswini, Technopark Campus, Kariyavattom, Trivandrum, Kerala 695581</p>
                            </div>
                            <div class="phone">
                                <div> <i class="fa fa-phone"></i>08047180470</div>
                                <p>( Timings: 08.00 am to 08.00 pm )</p>
                            </div>
                            <div class="social"><a href="https://www.facebook.com/keralastartupmission" target="_blank"
                                rel="noopener" aria-label="fb link"><i class="fa fa-facebook"></i></a><a
                                    href="https://twitter.com/startup_mission" target="_blank" rel="noopener"
                                    aria-label="twitter link"><i class="fa fa-twitter"></i></a><a
                                        href="https://in.linkedin.com/company/kerala-startup-mission" target="_blank" rel="noopener"
                                        aria-label="linkedin link"><i class="fa fa-linkedin"></i></a><a
                                            href="https://www.pinterest.com/pin/796996465276301175/" target="_blank" rel="noopener"
                                            aria-label="pintrest link"><i class="fa fa-pinterest"></i></a><a
                                                href="https://www.youtube.com/results?search_query=kerala+startup+mission" target="_blank"
                                                rel="noopener" aria-label="youtube link"><i class="fa fa-youtube-play"></i></a></div>
                        </div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4 right-col"></div>
                    </div>
                </div>
            </section>
            <section id="about-section">
                <div class="image">
                    {/* <img class="img-fluid w-75" src="about-img1.a0c79107.png"> */}

                </div>
                <div class="content">
                    <h3>What are we looking for ?</h3>
                    <p>We are seeking ideas and solutions that have been proven or used in some other scenario i.e product
                    /projects with a PoC/ and have potential usage in the fight against CoronaVirus only to be submitted.
            </p>
                    <h5>The categories are :</h5>
                    <ul>
                        <li>Ideas to support Covid 19 Patients</li>
                        <li>Ideas to support Quarantine Covid 19 patients </li>
                        <li>Ideas to arrest Community Outbreak (If it happens)</li>
                        <li>Ideas for effective Logistics & Distribution (Food/Medicine/Grocery)</li>
                        <li>Ideas to support vulnerable people (aged/infants) </li>
                        <li>Ideas to support system during Shutdown</li>
                        <li>Hardware (Temporary medical items or substitutes or any hardware product that can be useful during
                    the time of crisis)</li>
                        <li>Ideas that support during economic slowdown if happens</li>
                        <li>Do It Yourself (DIY) Projects (Creating masks, sanitizers, gloves, etc)</li>
                        <li>Any other ideas / solutions which support prevention of Covid 19</li>
                        <li>Ideas to create Employment opportunities during lockdown</li>
                    </ul>
                    <p class="small text-muted">Kindly note that only ideas/solutions that are given well in detail and with
                    details of realising those ideas shall only be submitted. As we all know we don't have much time for
                experimentation. </p>
                </div>
            </section>
        </div >
    );
}

export default App;