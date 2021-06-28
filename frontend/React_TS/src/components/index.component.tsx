import * as React from 'react';
import TableRow from './TableRow';
import Person from '../models/person';
import BaseService from '../service/base.service';

interface IProps {
}
interface IState {
    listPersons: Array<Person>
}

class Index extends React.Component<IProps, IState> {
 

    public state: IState = {
        listPersons: new Array<Person>()
    };
    constructor(props: IProps) {
        super(props);
        this.state = { 
            listPersons: Array<Person>() 
        };
    }

    public componentDidMount() {
        BaseService.getAll<Person>("/person").then(
            (rp) => {
                if (rp.Status) {

                    const data = rp.Data;
                    const listPersons = new Array<Person>();

                    (data|| []).forEach((p:any)=>{
                        listPersons.push(new Person(p._id, p.fullname, p.address, p.age));
                    });

                    this.setState({ listPersons: listPersons });
                } else {
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }
        );
    } 

    public tabRow = () => {
        return this.state.listPersons.map(function (object, i) {
            return <TableRow key={i} index={i+1} person={object} />;
        });
    }

    public render(): React.ReactNode {
        return (
            <div>
                <h3 className="text-center">Persons List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Full Name</th>
                            <th>Adress</th>
                            <th>Age</th>
                            <th className="text-center" colSpan={2}>Action</th>
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