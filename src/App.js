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
                                <p>Vaiga Hackthon</p>
                                <p><h6>Team Members</h6></p>
                                <p><h6>Abhay Raj</h6></p>
                                <p><h6>Aswin Sreerag</h6></p>
                                <p><h6>Basil Leju</h6></p>
                                <p><h6>Jose ben</h6></p>
                            </div>


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
            </section>
        </div >
    );
}

export default App;