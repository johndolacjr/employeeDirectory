import React from 'react'
import "./TableHeading.css"

export default function TableHeading(props) {
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Picture</th>
                        <th scope="col" ><button type="button" onClick={props.handleSortByDecendingName}>Employee Name<i className="fa fa-fw fa-sort"></i></button></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}