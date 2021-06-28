import React from 'react';
import * as toastr from 'toastr';
import Person from '../models/person';
import BaseService from '../service/base.service';
import { History } from 'history';
import { PersonPage } from './page.form'; 


interface IProps { 
    history: History;
    //Map properties match
    match:{ 
        isExact: boolean
        params: {
            id:string
        },
        path: string,
        url: string,
    }
}
interface IState {
    person: Person
}


export default class Edit extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            person: {
                FullName: '',
                Address: '',
                Age: 0,
                Id: ''
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);

    }




    private onFieldValueChange(fieldName: string, value: string) { 
        const nextState = {
            ...this.state,
            person: {
                ...this.state.person,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }

    public componentDidMount() { 
        BaseService.get<Person>('/person/edit/', this.props.match.params.id).then(
            (rp) => {
                if (rp.Status) {
                    const person = rp.Data;
                    this.setState({ person: new Person(person._id, person.fullname,person.address, person.age )});
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

        );
    }


    private onSave = () => {

        console.log(this.state.person);
        BaseService.update<Person>("/person/update/", this.props.match.params.id,this.state.person).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Member saved.');
                    this.props.history.goBack();
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }
        );

    }
 
    render() {
        return (
            <PersonPage
                person={this.state.person}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }
}