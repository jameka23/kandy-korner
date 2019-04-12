import React, { Component } from 'react'

export default class EmployeeList extends Component {

    render() {
        return (
            <div>
                <h2>Our Employees</h2>
                {
                    this.props.employees.map(employee => 
                        <div key={employee.id}>
                            {employee.name}
                        </div>    
                    )
                }
            </div>
        )
    }
}
