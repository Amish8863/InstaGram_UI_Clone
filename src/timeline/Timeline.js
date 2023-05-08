import React, { useState } from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Post from './posts/Post';


const Timeline = () => {
    const [posts, setPosts] = useState([
        {
            user: "amish8863",
            postImage: "https://images.unsplash.com/photo-1579781354199-1ffd36bd7d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            likes: 12,
            timestamp: "2d",
        },
        {
            user: "_h_a_d_e_s_",
            postImage: "https://images.unsplash.com/photo-1466378743612-9da217f53e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            likes: 54,
            timestamp: "1d",
        },
        {
            user: "R_a_h_u_l_1_",
            postImage: "https://images.unsplash.com/photo-1603134281085-cf0c4b61a65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            likes: 120,
            timestamp: "2h",
        },
        {
            user: "Dhruv124",
            postImage: "https://images.unsplash.com/photo-1600019403514-a09d06e09756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            likes: 39,
            timestamp: "4d",
        }

    ]);
    return (
        <div className='timeline'>
            <div className="timeline__left">
                <div className="timeline__posts">
                    {posts.map(post => (
                        <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggestions />
            </div>
        </div>
    )
}

export default Timeline
