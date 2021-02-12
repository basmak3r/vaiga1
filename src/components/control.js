import React from 'react';
import fire from "./fire"


export default class control extends React.Component {
    constructor(props) {
        super(props);

        // this.app = firebase.initializeApp(firebaseConfig);
        this.database = fire.database().ref().child('auto');
        this.state = {
            gl: "OFF",
            hum: "OFF",
            ex: "OFF",
            hc: "OFF",
            co2: "OFF",
            deh: "OFF",
            buzzer: "OFF",
            g2: 0,
            h2: 0,
            e2: 0,
            h2: 0,
            c2: 0,
            d2: 0,
            b2: 0,
            color1: "#DC143C",
            color2: "#DC143C",
            color3: "#DC143C",
            color4: "#DC143C",
            color5: "#DC143C",
            color6: "#DC143C",
            color7: "#DC143C"
        };
    };
    componentDidMount() {
        this.database.on('value', snap => {
            this.setState({
                c2: snap.val().co2,
                e2: snap.val().dc,
                h2: snap.val().humi,
                d2: snap.val().dehumi,
                h2: snap.val().coil,
                g2: snap.val().g1,
            });
            if (snap.val().g1 == 1) {
                this.setState({
                    color1: "#66ff66",
                    gl: "ON",
                });
            }
            else {
                this.setState({
                    color1: "#DC143C",
                    gl: "OFF",
                });
            }
            if (snap.val().dc == 1) {
                this.setState({
                    color2: "#66ff66",
                    ex: "ON",
                });
            }
            else {
                this.setState({
                    color2: "#DC143C",
                    ex: "OFF",
                });
            }
            if (snap.val().humi == 1) {
                this.setState({
                    color3: "#66ff66",
                    hum: "ON",
                });
            }
            else {
                this.setState({
                    color3: "#DC143C",
                    hum: "OFF",
                });
            }
            if (snap.val().coil == 1) {
                this.setState({
                    color4: "#66ff66",
                    hc: "ON",
                });
            }
            else {
                this.setState({
                    color4: "#DC143C",
                    hc: "OFF",
                });
            }
        });
    }
    render() {
        {
            return (<div>
                <section id="who-section">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="mb-3">Control Unit</h3>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-box">
                                {/* <div class="icon"> */}
                                {/* <img class="img-fluid" src="student.f69876c4.png"> */}
                                <i class="icon fa fa-thermometer-empty" aria-hidden="true"></i>

                                {/* </div> */}
                                <h4>Grow Light</h4>
                                <p></p>
                                <button style={{ border: "none", color: "#FFFFFF", backgroundColor: this.state.color1 }}>{this.state.gl}</button>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-box">
                                <div class="icon">
                                    N

                            </div>
                                <h4>Humudifier</h4>
                                <p></p>
                                <button style={{ border: "none", color: "#FFFFFF", backgroundColor: this.state.color3 }}>{this.state.hum}</button>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-box">
                                <div class="icon">


                                </div>
                                <h4>Exhaust</h4>
                                <p></p>
                                <button style={{ border: "none", color: "#FFFFFF", backgroundColor: this.state.color2 }}>{this.state.ex}</button>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-box">
                                <div class="icon">
                                    N

                            </div>
                                <h4>Heating Coil</h4>
                                <p></p>
                                <button style={{ border: "none", color: "#FFFFFF", backgroundColor: this.state.color4 }}>{this.state.hc}</button>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-box">
                                <div class="icon">
                                    P

                            </div>
                                <h4>CO<sub>2</sub></h4>
                                <p></p>
                                <button style={{ border: "none", color: "#FFFFFF", backgroundColor: this.state.color5 }}>{this.state.gl}</button>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-box">
                                <div class="icon">
                                    K

                            </div>
                                <h4>Dehumudifier</h4>
                                <p></p>
                                <button style={{ border: "none", color: "#FFFFFF", backgroundColor: this.state.color6 }}>{this.state.gl}</button>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-box">
                                <div class="icon">
                                    N

                            </div>
                                <h4>Buzzer</h4>
                                <p></p>
                                <button style={{ border: "none", color: "#FFFFFF", backgroundColor: this.state.color7 }}>{this.state.gl}</button>

                            </div>
                        </div>

                    </div>
                </section>
            </div >);

        }

    }
}