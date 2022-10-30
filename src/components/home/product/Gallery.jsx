import React, { useState } from 'react';
import { products } from '../../assets/data/data';
import Heading from '../../common/Heading';
import ProductItem from './ProductItem';


function Gallery(props) {
    const [data, setData] = useState(products)

    return (
        <>
            <section className="gallery" id='gallery' data-aos="fade-right">
                <div className="container">
                    <Heading title='Ảnh' desc='Cho mọi người xem chơi...' />
                    <ProductItem data={data} />
                    <Heading title='' desc='Còn nữa, nhưng để dành nha keke...' />
                </div>
            </section>
        </>
    );
}

export default Gallery;