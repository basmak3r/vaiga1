import React from 'react';
import $ from 'jquery';
import s from "./server"

export default class PersonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: ""
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        var context = this;

        $.ajax({
            url: 'http://localhost:5000',
            method: 'GET',
            success: function (response) {
                context.setState({
                    firstName: response.temp,
                });
            }
        });
    }

}