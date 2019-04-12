import React, { Component } from 'react'

export default class KandyKorner extends Component {
    
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
        { id:1, candyType:1, candy:"Gummy Bears" },
        { id:2, candyType:3, candy:"Tootsie Pops" },
        { id:3, candyType:2, candy:"Hersey's" }
    ]

    state = {
        stores: this.storeLocationsArray,
        employees: this.employeesArray,
        candyTypes: this.candyTypesArray,
        candies: this.candyArray
    }
}