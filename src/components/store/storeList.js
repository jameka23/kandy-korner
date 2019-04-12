import React, { Component } from 'react'

export default class StoreList extends Component {

    render(){
        return (
            <div>
                <h2>Our Store Locations</h2>
                {
                    this.props.stores.map(store => 
                        <div key={store.id}>
                            {store.address}
                        </div>
                    )
                }
            </div>

        )
    }
}
