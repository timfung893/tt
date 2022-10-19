import React, { useState } from 'react';
import {FiShoppingBag} from 'react-icons/fi';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';

function SearchItems({product, value, onSearch}) {
    const [openImage, setOpenImage] = useState(false)
    const [img, setImg] = useState('')

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }
    return (
        <> 
            <section className="searchItems">
                <div className="product_items">
                    {product.filter((items) => {
                        const searchKey = value.toLowerCase()
                        const title = items.title.toLowerCase()
                        return searchKey && title.indexOf(searchKey) !== -1 && title !== searchKey
                    }).slice(0, 10).map((items) => (
                        <div className="box" key={items.id}>
                            <div className="img">
                                <img src={items.cover} alt="" />
                                <div className="overlay">
                                    <button className="button">
                                        <FiShoppingBag/>
                                    </button>
                                    <button className="button">
                                        <AiOutlineHeart/>
                                    </button>
                                    <button className="button" onClick={() => onOpenImage(items.cover)}>
                                        <FiSearch/>
                                    </button>
                                </div>
                            </div>
                            <div className="details">
                                <h3>{items.title}</h3>
                                <p>{items.author}</p>
                                <h4>Price: {items.price}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default SearchItems;