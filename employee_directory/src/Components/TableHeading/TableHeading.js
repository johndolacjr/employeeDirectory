import React from 'react'
import "./TableHeading.css"

export default function TableHeading(props) {
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Image </th>
                        <th scope="col" ><button type="button" onClick={props.handleSortByDecendingName}>Name <i className="fa fa-fw fa-sort"></i> </button></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}