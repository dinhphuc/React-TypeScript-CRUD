import * as React from 'react';
import Persons from '../models/persons';

import { Input, Button } from '../common/components/form';

interface Props {
    persons: Persons;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const PersonsForm: React.StatelessComponent<Props> = (props) => { 
    return (
        <form>
            <h1>Manage member</h1>

            <Input
                name="FullName"
                label="FullName"
                value={props.persons.FullName}
                onChange={props.onChange}
            />

            <Input
                name="Address"
                label="Address"
                value={props.persons.Address}
                onChange={props.onChange}
            />

            <Input
                name="Age"
                label="Age"
                value={props.persons.Age.toString()}
                onChange={props.onChange}
            />

            <Button
                label="Save"
                className="btn btn-success"
                onClick={props.onSave}
            />
        </form>
    );
};
