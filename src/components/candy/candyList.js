import React, { Component } from 'react'

export default class CandyList extends Component {
    render(){
        return(
            <div className="content">
                <h2>Our Candies</h2>
                {
                    this.props.candies.map(candy => 
                        <div key={candy.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                {candy.candy} of type:{" "}
                                    {
                                        this.props.candyTypes
                                            .find(candyType => candy.candyTypeId === candyType.id)
                                            .name
                                    }
                                    <button
                                    onClick={() => this.props.discontinued(candy.id)}
                                    className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

}

/*
    this.props.animals.map(animal => 
        <div key={animal.id} className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <img src={dog} className="icon--dog" alt="dog icon"/>
                    {animal.name}
                    <button
                        onClick={() => this.props.deleteItem(animal.id, "animals")}
                        className="card-link">Delete</button>
                </h5>
            </div>
        </div>
    )
*/