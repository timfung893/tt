import React, { useEffect, useState } from 'react';
import Heading from '../../common/Heading';
import PhotoCell from '../product/PhotoCell';
import { Masonry } from 'masonic';
import * as contentful from '../../../utils/contenful';


function Trips(props) {
    const [data, setData] = useState([]);
    const getProducts = async () => {
        const products = await contentful.client.getEntry('bH4QxqNLiYm3XDNnp88Pw');
        let i = 0;
        const data = Array.from(Array(products.fields.images.length), () => ({
            id: i++,
            cover: products.fields.images[i-1]
        }));
        
        setData(data);
    };

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <section className="gallery" id='gallery'>
                <div className="container">
                    <Heading title='Sài Gòn - Quảng Ngãi' desc='Về quê ăn tết 2023...' />
                    <Masonry className="photos"
                        items={data}
                        columnGutter={8}
                        columnWidth={150}
                        columnCount={3}
                        overscanBy={32}
                        render={PhotoCell}
                    />
                    <Heading title='' desc='Còn nữa, nhưng để dành nha keke...' />
                </div>
            </section>
        </>
    );
}

export default Trips;