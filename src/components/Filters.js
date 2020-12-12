import React from 'react'
import '../assets/css/Filters.css'


const Filters = ({ filterList, selectedFilter, setSelectedFilter }) => {
    
    filterList = [{ text: 'All Products', value: "All Products" }, ...filterList]

    const newList = filterList.map( 
        filter => {
            return <p key={filter.text} className={selectedFilter.text === filter.text ? 'active' : ''} onClick={() => setSelectedFilter(filter)}>{filter.text}</p>
    })

    return (             
        <div>
            <div id="selected-filter"><strong>{ selectedFilter.text }</strong> (Available Products)</div>
            <div id="filter-list">
                <div id="filters">
                    <h4>FILTERS:</h4>
                    {newList}
                </div>
                <p id="sort">Sort By: <strong>Price Low to High</strong></p>
            </div>
        </div>
    )
}

export default Filters;