import React, { useEffect, useState } from 'react';
import Heading from '../../common/Heading';
import * as contentful from '../../../utils/contenful';

function Story(props) {

    const getProducts = async () => {
        const products = await contentful.client.getEntries({
            content_type: 'photoList'
        });
        return products;
    };

    useEffect(() => {
        getProducts();
    })

    return (
        <>
            <section className="storyslider" id='storyslider' data-aos="fade">
                <Heading title='' desc='Mọi chuyện bắt đầu từ đây...'/>
            </section>
        </>
    );
}

export default Story;