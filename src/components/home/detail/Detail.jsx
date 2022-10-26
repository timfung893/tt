import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdStarRate} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ADD, DECREASE, REMOVE  } from '../../controller/action';

function Detail() {
    const [data, setData] = useState([])
    const getData = useSelector((state) => state.cartReducer.carts)
    const { id } = useParams()

    const compare = (id) => {
        let compareData = getData.filter((e) => e.id === id)
        setData(compareData)
        console.log(compareData);
    }

    useEffect(() => {
        compare()
    }, [id])

    // handle qty buttons
    const dispatch = useDispatch()
    const increment = (item) => {
        dispatch(ADD(item))
    }

    const decrement = (item) => {
        dispatch(DECREASE(item))
    }

    //  delete items from cart
    const history = useHistory()
    const deleteCartItem = (id) => {
        dispatch(REMOVE(id))
        history.push('/')
    }

    return (
        <>
            <article>
                {console.log(data)}
                <section className="details">
                    <h2 className="details_title">
                        Product Details Page {id}
                    </h2>
                    {data.map((item) => (
                        <div className="details_content">
                            <div className="details_content_img">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="details_content_detail">
                                <h1>{item.title}</h1>
                                <div className="rating">
                                    <MdStarRate />
                                    <MdStarRate />
                                </div>
                                <h3>${item.price * item.qty}</h3>
                                <p>{item.author}</p>
                                <div className="qty">
                                    <div className="count">
                                        <button onClick={() => increment(item)}>
                                            <AiOutlinePlus/>
                                        </button>
                                        <span>{item.qty}</span>
                                        <button onClick={ item.qty > 1 ? () => deleteCartItem(item.id) : () => decrement(item) }
                                        >
                                            <AiOutlineMinus/>
                                        </button>
                                    </div>
                                    <button className="button">Add To Cart</button>
                                </div>
                                <div className="desc">
                                    <h4>PRODUCT DESCRIPTION</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur cum. Reprehenderit architecto ea quidem minus vel, dignissimos et id neque non ipsum. Quae maiores in sit quam architecto eligendi! </p>
                                    <h4>PRODUCT DETAILS</h4>
                                    <ul>
                                        <li><p>Material: Plastic, Wood</p></li>
                                        <li><p>Material: Plastic, Wood</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    );
}

export default Detail;