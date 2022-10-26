import React from 'react';
import { ImQuotesRight } from 'react-icons/im'
import { customer } from '../../assets/data/data';
import Heading from '../../common/Heading';

function Testimonial(props) {
    return (
        <>
            <section className="customer">
                <Heading title='Testimonials' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />

                <div className="content">
                    {customer.map((items) => (
                        <div className="card">
                            <button>
                                <ImQuotesRight/>
                            </button>
                            <p>{items.desc}</p>
                            <h3>{items.name}</h3>
                            <p>{items.post}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Testimonial;