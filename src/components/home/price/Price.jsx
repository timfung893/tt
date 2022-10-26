import React from 'react';
import { price } from '../../assets/data/data';
import Heading from '../../common/Heading';
function Price(props) {
    return (
        <>
            <section className="price">
                <Heading title='Choose Your Plans' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />

                <div className="content">
                    {price.map((item) => (
                        <div className="box" key={item.id}>
                            <h3>{item.name}</h3>
                            <h1>
                                <span>$</span>
                                {item.price}
                                <label htmlFor="">/user per month</label>
                            </h1>
                            <p>{item.desc}</p>
                            <button className="button">Get Started</button>
                            <ul>
                                {item.list.map((list) => (
                                    <li key={list.id}>
                                        <i>{list.icon}</i>
                                        <span>{list.para}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Price;