import * as React from 'react';
import TableRow from './TableRow';
import Persons from '../models/persons';
import BaseService from '../service/base.service';

interface IProps {
}
interface IState {
    listPersons: Array<Persons>
}

class Index extends React.Component<IProps, IState> {

    public props: IProps = {
    };

    public state: IState = {
        listPersons: new Array<Persons>()
    };
    constructor(props: IProps) {
        super(props);
        this.state = { listPersons: [] };
    }

    public componentDidMount() {
        BaseService.getAll("/persons").then(
            (rp) => {
                if (rp.Status) {
                    this.setState({ listPersons: rp.Data });
                } else {
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }
        );
    } 

    public tabRow = () => {
        return this.state.listPersons.map(function (object, i) {
            return <TableRow persons={object} />;
        });
    }

    public render(): React.ReactNode {
        return (
            <div>
                <h3 className="text-center">Persons List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Adress</th>
                            <th>Age</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Index;