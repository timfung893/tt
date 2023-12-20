import React, { useState } from 'react';
import { products } from '../../assets/data/data';
import Heading from '../../common/Heading';
import PhotoCell from './PhotoCell';
import { Masonry } from 'masonic';


function Gallery(props) {
    const [data, setData] = useState(products)

    return (
        <>
            <section className="gallery" id='gallery'>
                <div className="container">
                    <Heading title='Ảnh' desc='Cho mọi người xem chơi...' />
                    <Masonry className="photos"
                        items={data.slice(6, undefined)}
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

export default Gallery;