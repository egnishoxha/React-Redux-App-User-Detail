import React from 'react';
import { Link } from 'react-router-dom';

export const UserRow = (props) => {
    return (
        <tr>
            <td>{props.user.name.first}</td>
            <td>{props.user.name.last}</td>
            <td>{props.user.phone}</td>
            <td>{props.user.email}</td>
            <td><Link to={`/users/${props.user.email}`}>Detail</Link></td>
        </tr>
    );
}