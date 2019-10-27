import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeHolder, handleChange}) => (
    <div className='search'>
        <input type='search' className='Search' placeholder={placeHolder}
            onChange={handleChange}></input>
    </div>
)