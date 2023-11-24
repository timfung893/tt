import React, { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function PhotoCell({ data: items, scrollPosition }) {
    const [openImage, setOpenImage] = useState(false)
    const [img, setImg] = useState('')

    const onOpenImage = (src) => {
        setImg(src)
        setOpenImage(true)
    }
    
    return (
        <>
            <div className="box">
                <div className="img">
                    <LazyLoadImage src={items.cover} alt="img" width={null} height={null}  scrollPosition={scrollPosition} effect="opacity"/>
                    <div className="overlay">
                        <button className="button" onClick={() => onOpenImage(items.cover)}>
                            <FiSearch/>
                        </button>
                    </div>
                </div>
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

export default trackWindowScroll(PhotoCell);