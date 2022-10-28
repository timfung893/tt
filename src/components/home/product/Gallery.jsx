import React, { useState } from 'react';
import { products } from '../../assets/data/data';
import Heading from '../../common/Heading';
import ProductItem from './ProductItem';


function Gallery(props) {
    const [data, setData] = useState(products)

    return (
        <>
            <section className="gallery" id='gallery'>
                <div className="container">
                    <Heading title='Gallery' desc='Check out the hottest design of the week. These rising stars are worth your attention.' />

                    <ProductItem data={data} />
                </div>
            </section>
        </>
    );
}

export default Gallery;