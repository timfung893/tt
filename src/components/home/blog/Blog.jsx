import React from 'react';
import { blog } from '../../assets/data/data';
import Heading from '../../common/Heading';

function Blog(props) {
    return (
        <>
            <section className="blog">
                <Heading title='Latest Blog Posts' desc='Latest marketplace news, success stories, and tutorials' />

                <div className="posts">
                    {blog.slice(0,3).map((blog) => (
                        <div className="post">
                            <div className="content">
                                <div className="img">
                                    <img src={blog.cover} alt="" />
                                </div>
                                <div className="text">
                                    <button className="button">
                                        {blog.category}
                                    </button>
                                    <p>Post Date: {blog.date}</p>
                                    <h3>{blog.title.substring(0, 27)}...</h3>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Blog;