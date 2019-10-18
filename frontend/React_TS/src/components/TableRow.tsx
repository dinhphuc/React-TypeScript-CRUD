import React from 'react';
import { Link } from 'react-router-dom'; 
import Persons from '../models/persons';  
import BaseService from '../service/base.service';
import * as toastr from 'toastr';   
 
 
function Del(ID:number) {
    BaseService.delete("/persons/delete/", ID).then(
        (rp) => {
            if (rp.Status) {
                toastr.success('Member saved.');    
                window.location.reload();
            } else { 
                toastr.error(rp.Messages);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        }
    );
}
  
interface IProps {
    persons: Persons;  
}

const TableRow: React.StatelessComponent<IProps> = (props) => { 
    return (
        <tr>
            <td>
                {props.persons.ID}
            </td>
            <td>
                {props.persons.FullName}
            </td>
            <td>
                {props.persons.Address}
            </td>
            <td>
                {props.persons.Age}
            </td>
            <td> 
                <Link to={"/edit/" + props.persons.ID} className="btn btn-primary">Edit</Link>
            </td>
            <td>
                <button onClick={()=>Del(Number(props.persons.ID))} className="btn btn-danger">Delete</button>
            </td> 
        </tr>

    );
};
export default TableRow;