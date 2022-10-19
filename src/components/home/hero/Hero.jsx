import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import SearchItems from './SearchItems';
import { products } from '../../assets/data/data';

function Hero(props) {
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onSearch = (key) => {
        setValue(key)
        console.log('search', key);
    }

    return (
      <>    
        <section className="hero">
            <div className="container">
                <h1>
                    <label htmlFor="">Over <span>6,500</span> Curated Design</label><br></br>
                    <label htmlFor="">Resources <span>Graphics & Website</span> Templates</label><br></br>
                </h1>
                <p>High-quality Design Themes for personal or commercial use contains 6k+ items in 100 categories.</p>
                <div className="search">
                    <span>All Categories</span>
                    <hr />
                    <input type="text" placeholder='Search Products...' onChange={onChange} value={value}/>
                    <button onClick={() => onSearch(value)}>
                        <BiSearch className='searchIcon heIcon' />
                    </button>
                </div>
                <SearchItems product={products} value={value} onSearch={onSearch} />
                <p>Examples: Mockup, PSD, Theme Design, Image...</p>
            </div>
        </section> 
      </>
    );
}

export default Hero;