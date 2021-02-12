import React, { useEffect, useState } from 'react';
import axios from 'axios';
import firebase from 'firebase'
import $ from 'jquery';
import fire from "./fire"



export default class Server extends React.Component {
    constructor(props) {
        super(props);
        // this.app = firebase.initializeApp(firebaseConfig);
        this.database = fire.database().ref().child('user');
        this.state = {
            temp: 0,
            hum: 0,
            ppm: 0,
            nval: 0,
            pval: 0,
            kval: 0,
            phval: 0,
            lux: 0,
            mval: 0,

        };
        this.state = {
            temp1: "Good",
            temp2: "#6af558",
            hum1: "Good",
            ppm1: "Good",
            nval1: "Good",
            pval1: "Good",
            kval1: "Good",
            phval1: "Good",
            lux1: "Good",
            mval1: "Good",

        }
    }
    Temp = (e) => {
        alert(this.refs.t1.value)
        let messgaeRef = fire.database().ref('control/temp')
        fire.database().ref('control/temp').set(this.refs.t1.value);

    }



    componentDidMount() {

        // let messgaeRef = fire.database().ref('messgaes').orderByKey().limitToLast
        // fire.database().ref('messages').push(this.state.firstName);
        this.database.on('value', snap => {
            this.setState({
                temp: snap.val().temp,
                hum: snap.val().hum,
                ppm: snap.val().ppm,
                nval: snap.val().nval,
                pval: snap.val().pval,
                kval: snap.val().kval,
                phval: snap.val().phval,
                lux: snap.val().lux,
                mval: snap.val().mval,
            });
            if (snap.val().temp > 30) {
                this.setState({
                    temp1: "Heavy",
                    temp2: "#ed2202"
                });

            }
        });





    }

    render() {
        return (<div>
            <section id="who-section">
                <div class="row">
                    <div class="col-sm-12">
                        <h3 class="mb-3">Sensor Unit</h3>
                    </div>
                </div>
                <div class="row pt-4">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">
                                    {/* <img class="img-fluid" src="student.f69876c4.png"> */}
                                    <i class="fa fa-thermometer-empty" aria-hidden="true"></i>
                                </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.temp}<sup>&deg;c</sup></div>
                            </div>
                            {/* </div> */}
                            <h4>Temperature</h4>
                            <p></p>
                            <p>Condition    <span style={{ color: this.state.temp2, fontWeight: 'bold' }}>{this.state.temp1}</span></p>
                            <form onSubmit={this.Temp}><label for="fname">Temperature &nbsp; </label><input ref="t1" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" value='submit' /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">
                                    H

                            </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.hum} %</div>
                            </div>
                            <h4>Humidity</h4>
                            <p></p>
                            <p>Condition </p>
                            <form><label for="fname">Humidity &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">

                                    CO<sub>2</sub>
                                </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.ppm}<span style={{ fontSize: "12px" }}>  ppm</span></div>
                            </div>
                            <h4>CO<sub>2</sub></h4>
                            <p></p>
                            <p>Condition </p>
                            <form><label for="fname">CO<sub>2</sub> &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">
                                    N

                            </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.nval} %</div>
                            </div>
                            <h4>Nitrogen</h4>
                            <p></p>
                            <p>Condition</p>
                            <form><label for="fname">Nitrogen &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">
                                    P

                            </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.pval} %</div>
                            </div>
                            <h4>Phosphorus</h4>
                            <p></p>
                            <p>Condition </p>
                            <form><label for="fname">phosphorus &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">
                                    K

                            </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.kval} %</div>
                            </div>
                            <h4>Potassium</h4>
                            <p></p>
                            <p>Condition </p>
                            <form><label for="fname">potassium &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>

                                <div class="icon">
                                    <i class="fas fa-tachometer-alt"></i>
                                </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.phval} pH</div>
                            </div>
                            <h4>pH  Value</h4>
                            <p></p>
                            <p>Condition </p>
                            <form><label for="fname">pH &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">
                                    <i class="fas fa-sun"></i>

                                </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.lux} lx</div>
                            </div>
                            <h4>Sunlight</h4>
                            <p></p>
                            <p>Condition </p>
                            <form><label for="fname">Intensity &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-box">
                            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                <div class="icon">
                                    <i class="fas fa-seedling"></i>

                                </div>
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.mval}</div>
                            </div>
                            <h4>Soil Moisture</h4>
                            <p></p>
                            <p>Condition </p>
                            <form><label for="fname">Soil Moisture &nbsp; </label><input style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                </div>
            </section>
        </div >);

    }

}
