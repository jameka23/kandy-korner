import React, { Component } from 'react'
import NavBar from './nav/NavBar'
import ApplicationView from './../ApplicationView';
import './kandy.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default class KandyKorner extends Component {

    render(){
        return (
            <div>
                <NavBar />
                <ApplicationView />
            </div>
        )
    }
}