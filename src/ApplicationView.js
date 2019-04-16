import React, { Component } from "react"
import { Route } from 'react-router-dom'
import StoreList from './components/store/storeList'
import EmployeeList from './components/employee/employeeList'
import CandyList from './components/candy/candyList'
import StoreManager from './components/modules/StoreManager'
import EmployeeManager from './components/modules/EmployeeManager'
import CandyTypeManager from './components/modules/CandyTypeManager'
import CandyManager from './components/modules/CandyManager'

export default class ApplicationView extends Component {
    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

            StoreManager.getAll()
            .then(stores => newState.stores = stores)
            EmployeeManager.getAll()
            .then(employees => newState.employees = employees)
            CandyTypeManager.getAll()
            .then(candyTypes => newState.candyTypes = candyTypes)
            CandyManager.getAll()
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    //delete candy aka discontinued candy 
    discontinuedCandy = id => {
        return fetch(`http://localhost:5002/candies/${id}`,{
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => fetch("http://localhost:5002/candies"))
        .then(r => r.json())
        .then(candies => this.setState({
            candies: candies
        }))
    }

    // make the routes
    render(){
        return(
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} discontinued={this.discontinuedCandy} />
                }} />
            </React.Fragment>
        )
    }
}