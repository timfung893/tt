import React from 'react';
import Heading from '../common/Heading';

function Location(props) {
    return (
        <>  
            <section className="location" id='location' data-aos="fade-right">
                <Heading title="Địa Điểm" />
                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pergola phu nhuan ho chi minh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://piratebay-proxys.com/"></a></div></div>
            </section>
        </>
    );
}

export default Location;