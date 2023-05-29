import React from 'react';
import {db} from '../fakedb/db.js'
import Table from 'react-bootstrap/Table';

export default function TeamTable() {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {db.map((n) => (
            <tr key={n.id}>
              <td className="bg-white px-3">{n.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}