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
            hum2: "#6af558",
            ppm1: "Good",
            ppm2: "#6af558",
            nval1: "Good",
            nval2: "#6af558",
            pval1: "Good",
            pval2: "#6af558",
            kval1: "Good",
            kval2: "#6af558",
            phval1: "Good",
            phval2: "#6af558",
            lux1: "Good",
            lux2: "#6af558",
            mval1: "Good",
            mval2: "#6af558",

        }
    }
    Temp = (e) => {
        alert(this.refs.t1.value)
        let messgaeRef = fire.database().ref('control/temp')
        fire.database().ref('control/temp').set(this.refs.t1.value);

    }
    Nit = (e) => {
        alert(this.refs.nit.value)
        let messgaeRef = fire.database().ref('control/n')
        fire.database().ref('control/n').set(this.refs.nit.value);

    }
    co2 = (e) => {
        alert(this.refs.co2.value)
        let messgaeRef = fire.database().ref('control/co2')
        fire.database().ref('control/co2').set(this.refs.co2.value);

    }

    Humd = (e) => {
        alert(this.refs.humd.value)
        let messgaeRef = fire.database().ref('control/hum')
        fire.database().ref('control/hum').set(this.refs.humd.value);

    }

    Phos = (e) => {
        alert(this.refs.phos1.value)
        let messgaeRef = fire.database().ref('control/pho')
        fire.database().ref('control/pho').set(this.refs.phos1.value);

    }

    Sunlight = (e) => {
        alert(this.refs.sunlight.value)
        let messgaeRef = fire.database().ref('control/sun')
        fire.database().ref('control/sun').set(this.refs.sunlight.value);

    }
    potta = (e) => {
        alert(this.refs.potta.value)
        let messgaeRef = fire.database().ref('control/potta')
        fire.database().ref('control/potta').set(this.refs.potta.value);

    }
    Soil = (e) => {
        alert(this.refs.soil.value)
        let messgaeRef = fire.database().ref('control/soil')
        fire.database().ref('control/soil').set(this.refs.soil.value);

    }
    ph = (e) => {
        alert(this.refs.ph.value)
        let messgaeRef = fire.database().ref('control/ph')
        fire.database().ref('control/ph').set(this.refs.ph.value);

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
            if (snap.val().temp > 24) {
                this.setState({
                    temp1: "Heavy",
                    temp2: "#ed2202"
                });
            }
            else if (snap.val().temp < 15)
                this.setState({
                    temp1: "Low",
                    temp2: "#FFFF00"
                });
            else {
                this.setState({
                    temp1: "Good",
                    temp2: "#6af558"
                });
            }
            if (snap.val().hum > 70) {
                this.setState({
                    hum1: "Heavy",
                    hum2: "#ed2202"
                });
            }
            else if (snap.val().hum < 35)
                this.setState({
                    hum1: "Low",
                    hum2: "#FFFF00"
                });
            else {
                this.setState({
                    hum1: "Good",
                    hum2: "#6af558"
                });
            }
            if (snap.val().ppm > 1000) {
                this.setState({
                    ppm1: "Heavy",
                    ppm2: "#ed2202"
                });
            }
            else if (snap.val().ppm < 400)
                this.setState({
                    ppm1: "Low",
                    ppm2: "#FFFF00"
                });
            else {
                this.setState({
                    ppm1: "Good",
                    ppm2: "#6af558"
                });
            }
            if (snap.val().nval > 85) {
                this.setState({
                    nval1: "Heavy",
                    nval2: "#ed2202"
                });
            }
            else if (snap.val().nval < 45)
                this.setState({
                    nval1: "Low",
                    nval2: "#FFFF00"
                });
            else {
                this.setState({
                    nval1: "Good",
                    nval2: "#6af558"
                });
            }
            if (snap.val().pval > 120) {
                this.setState({
                    pval1: "Heavy",
                    pval2: "#ed2202"
                });
            }
            else if (snap.val().pval < 10)
                this.setState({
                    pval1: "Low",
                    pval2: "#FFFF00"
                });
            else {
                this.setState({
                    pval1: "Good",
                    pval2: "#6af558"
                });
            }
            if (snap.val().kval > 170) {
                this.setState({
                    kval1: "Heavy",
                    kval2: "#ed2202"
                });
            }
            else if (snap.val().kval < 10)
                this.setState({
                    kval1: "Low",
                    kval2: "#FFFF00"
                });
            else {
                this.setState({
                    kval1: "Good",
                    kval2: "#6af558"
                });
            }
            if (snap.val().phval > 7.5) {
                this.setState({
                    phval1: "Heavy",
                    phval2: "#ed2202"
                });
            }
            else if (snap.val().phval < 6.5)
                this.setState({
                    phval1: "Low",
                    phval2: "#FFFF00"
                });
            else {
                this.setState({
                    phval1: "Good",
                    phval2: "#6af558"
                });
            }
            if (snap.val().lux > 110) {
                this.setState({
                    lux1: "Heavy",
                    lux2: "#ed2202"
                });
            }
            else if (snap.val().lux < 56)
                this.setState({
                    lux1: "Low",
                    lux2: "#FFFF00"
                });
            else {
                this.setState({
                    lux1: "Good",
                    lux2: "#6af558"
                });
            }
            if (snap.val().mval > 60) {
                this.setState({
                    mval1: "Heavy",
                    mval2: "#ed2202"
                });
            }
            else if (snap.val().mval < 50)
                this.setState({
                    mval1: "Low",
                    mval2: "#FFFF00"
                });
            else {
                this.setState({
                    mval1: "Good",
                    mval2: "#6af558"
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
                                <div style={{ fontSize: "4vh", marginLeft: "75px" }}>{this.state.temp}<sup>&deg;</sup>C</div>
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
                            <p>Condition <span style={{ color: this.state.hum2, fontWeight: 'bold' }}>{this.state.hum1}</span> </p>
                            <form onSubmit={this.Humd}><label for="fname">Humidity &nbsp; </label><input ref="humd" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" value='submit' /></form>
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
                            <p>Condition <span style={{ color: this.state.ppm2, fontWeight: 'bold' }}>{this.state.ppm1}</span></p>
                            <form onSubmit={this.co2}><label for="fname">CO<sub>2</sub> &nbsp; </label><input ref="co2" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
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
                            <p>Condition<span style={{ color: this.state.nval2, fontWeight: 'bold' }}>{this.state.nval1}</span></p>
                            <form onSubmit={this.Nit}> <label for="fname">Nitrogen &nbsp; </label><input ref="nit" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
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
                            <p>Condition <span style={{ color: this.state.pval2, fontWeight: 'bold' }}>{this.state.pval1}</span></p>
                            <form onSubmit={this.Phos}><label for="fname">phosphorus &nbsp; </label><input ref="phos1" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
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
                            <p>Condition <span style={{ color: this.state.kval2, fontWeight: 'bold' }}>{this.state.kval1}</span></p>
                            <form onSubmit={this.potta}><label for="fname">potassium &nbsp; </label><input ref="potta" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
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
                            <p>Condition<span style={{ color: this.state.phval2, fontWeight: 'bold' }}>{this.state.phval1}</span> </p>
                            <form onSubmit={this.ph}><label for="fname">pH &nbsp; </label><input ref="ph" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
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
                            <p>Condition <span style={{ color: this.state.lux2, fontWeight: 'bold' }}>{this.state.lux1}</span></p>
                            <form onSubmit={this.Sunlight}><label for="fname">Intensity &nbsp; </label><input ref="sunlight" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
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
                            <p>Condition <span style={{ color: this.state.mval2, fontWeight: 'bold' }}>{this.state.mval1}</span></p>
                            <form onSubmit={this.Soil}><label for="fname">Soil Moisture &nbsp; </label><input ref="soil" style={{ width: "15%", height: "3vh" }} type="text" /><input style={{ marginLeft: "10px", color: "#ffffff", backgroundColor: "#cfffbd", border: "none" }} type="submit" /></form>
                            <a href="#">Graph</a>
                        </div>
                    </div>
                </div>
            </section>
        </div >);

    }

}
