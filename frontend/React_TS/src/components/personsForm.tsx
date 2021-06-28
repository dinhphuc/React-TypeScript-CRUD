import * as React from 'react';
import Person from '../models/person';

import { Input, Button } from '../common/components/form';

interface Props {
    person: Person;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const PersonForm: React.FunctionComponent<Props> = (props) => { 
    return (
        <form>
            <h1>Manage member</h1>

            <Input
                name="FullName"
                label="FullName"
                value={props.person.FullName}
                onChange={props.onChange}
            />

            <Input
                name="Address"
                label="Address"
                value={props.person.Address}
                onChange={props.onChange}
            />

            <Input
                name="Age"
                label="Age"
                value={props.person.Age.toString()}
                onChange={props.onChange}
            />

            <Button
                label="Save"
                className="btn btn-success mt-2"
                onClick={props.onSave}
            />
        </form>
    );
};
