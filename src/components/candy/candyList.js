import React, { Component } from 'react'

export default class CandyList extends Component {
    render(){
        return(
            <div className="content">
                <h2>Our Candies</h2>
                {
                    this.props.candies.map(candy => 
                        <div key={candy.id}>
                            {candy.candy}
                        </div>
                    )
                }
            </div>
        )
    }

}