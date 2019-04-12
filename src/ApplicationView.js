import React, { Component } from "react"
import { Route } from 'react-router-dom'
import StoreList from './components/store/storeList'
import EmployeeList from './components/employee/employeeList'
import CandyList from './components/candy/candyList'

export default class ApplicationView extends Component {
        
    //Store locations array
    storeLocationsArray = [
        { id:1, address: "123 Lean On Me Drive, Nashville, TN" },
        { id:2, address: "872 Rock With It, Clarksville, TN" },
        { id:3, address: "9019 Hottie Ave,  Bristol, TN" },
    ]

    //Employees array
    employeesArray = [
        { id:1, name: "Jameka Echols" },
        { id:2, name: "DeSean Webster" },
        { id:3, name: "Delon Echols" },
    ]
    
    //Candy types array
    candyTypesArray = [
        { id:1, name: "gummy" },
        { id:2, name: "chocolate" },
        { id:3, name: "lollipop" },
    ]

    //Individual Candy Array
    candyArray = [
        { id:1, candyTypeId:1, candy:"Gummy Bears" },
        { id:2, candyTypeId:3, candy:"Tootsie Pops" },
        { id:3, candyTypeId:2, candy:"Hersey's" }
    ]


    state = {
        stores: this.storeLocationsArray,
        employees: this.employeesArray,
        candyTypes: this.candyTypesArray,
        candies: this.candyArray
    }

    // candies = {...{...this.state.candyTypes,...this.state.candies}}
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
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}