import React from 'react'
import "./SearchBar.css"

export default function SearchBar(props) {

    return (

        <section className="filter-container">
            <form className="filter-form form-group ">

                <div className="row">
                    <h4 className="col-lg-6">Filter By Name: </h4>
                    <input onChange={props.handleSearch} type="text"></input>
                </div>
            </form>
        </section>


    )
}