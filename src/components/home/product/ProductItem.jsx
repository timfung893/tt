import React, { useState } from 'react';
import {FiShoppingBag} from 'react-icons/fi';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineHeart, AiOutlineClose} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { ADD } from '../../controller/action';

function ProductItem({ data }) {
    const [openImage, setOpenImage] = useState(false)
    const [img, setImg] = useState('')

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }
    
    return (
        <>
            <div className="product_items">
                {data.slice(6, undefined).map((items) => (
                    <div className="box" key={items.id} data-aos="fade">
                        <div className="img">
                            <img src={items.cover} alt="" />
                            <div className="overlay">
                                <button className="button" onClick={() => onOpenImage(items.cover)}>
                                    <FiSearch/>
                                </button>
                            </div>
                        </div>
                        {/* <div className="details">
                            <h3>{items.title}</h3>
                            <p>{items.author}</p>
                            <h4>Price: {items.price}</h4>
                        </div> */}
                    </div>
                ))}
            </div>
            <div className={openImage? 'modalOpen' : 'modalClose'}>
                <div className="onClickImage">
                    <img src={img} alt="" />
                    <button className="button" onClick={() => setOpenImage(false)}>
                        <AiOutlineClose/>
                    </button>
                </div> 
            </div>
        </>
    );
}

export default ProductItem;