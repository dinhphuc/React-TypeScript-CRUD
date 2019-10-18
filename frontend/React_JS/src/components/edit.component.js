import React, { Component } from 'react';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            FullName: '',
            Address: '',
            Age: 0,
            ID: 0
        }
    }

    onChangeFullName(e) {
        this.setState({
            FullName: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            Age: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/persons/edit/' + this.props.match.params.id)
            .then(rp => {
                console.log(rp);
                this.setState({
                    FullName: rp.data.FullName,
                    Address: rp.data.Address,
                    Age: rp.data.Age,
                    ID: rp.data.ID
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            FullName: this.state.FullName,
            Address: this.state.Address,
            Age: Number(this.state.Age)
        };
        axios.post('http://localhost:4000/persons/update/'+this.props.match.params.id, obj) 
            .then(res =>
                NotificationManager.success("Person in edited successfully", 'Success'));
        setTimeout(function () {
            window.location.href = "/index";
        }, 3000);

    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input type="text" className="form-control"
                            value={this.state.FullName}
                            onChange={this.onChangeFullName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Adrres: </label>
                        <input type="text" className="form-control" value={this.state.Address}
                            onChange={this.onChangeAddress} />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text" className="form-control" value={this.state.Age}
                            onChange={this.onChangeAge} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Person" className="btn btn-primary" />
                    </div>
                </form>
                <NotificationContainer />
            </div>
        )
    }
}