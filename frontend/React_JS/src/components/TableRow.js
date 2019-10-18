import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.post('http://localhost:4000/persons/delete/'+this.props.obj.ID)
            .then(
                NotificationManager.success("Person in added successfully", 'Success'),
                window.location.reload()
                ).catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.ID}
                </td>
                <td>
                    {this.props.obj.FullName}
                </td>
                <td>
                    {this.props.obj.Address}
                </td>
                <td>
                    {this.props.obj.Age}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.ID} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
                <NotificationContainer/>
            </tr>
            
        );
    }
}

export default TableRow;