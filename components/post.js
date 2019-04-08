import React from 'react';

const Post = () => (
    <div className="column is-half-tablet">
        <div className="post">
            <div className="title">
                <p>post title</p>
            </div>
            <div className="image">
                <img src="https://via.placeholder.com/1280" />
            </div>
            <div className="post-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti aliquam delectus quo iste ex cum ut reiciendis
                perferendis debitis repudiandae illum excepturi nihil unde,
                voluptas molestiae, vero autem? Error, assumenda!
                <span className="readmore">Read More</span>
            </div>
        </div>
    </div>
);

export default Post;
