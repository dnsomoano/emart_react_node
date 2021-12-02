import React, { Component } from 'react';
//import Customer from 'Customer';

export class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = { Customers: [], loading: true };
    }

    componentDidMount() {
        this.getCustomers();
    }

    getCustomers = () => {
        const uri = "http://localhost:4000/customers";
        fetch(uri, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'dataType': 'json'
            }
        }).then(resp => resp.json())
            .then(custData => {
                //this.setState({ Customers: custData });
                console.log(custData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <p></p>
        )
    }
}
