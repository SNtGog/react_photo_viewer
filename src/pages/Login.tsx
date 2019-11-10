import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


class Login extends Component {
    componentDidMount() {
        VK.Widgets.Auth("vk_auth", {
            onAuth: (data) => {
                console.log(data);
                alert('user ' + data['uid'] + ' authorized');
            }
        });
    }

    render() {
        return (
            <div id="vk_auth"></div>
        );
    }
}

export default Login;
