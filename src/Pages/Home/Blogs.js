import React from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    return (
        <div className='mb-20'>
            {/* blogs header */}
            <div>
                <h2 className="text-3xl font-mono text-center">Blogs</h2>
                <div className='w-2/3 text-center mx-auto leading-8 mt-6 italic font-serif'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis odio omnis voluptate labore ea doloribus aut, alias architecto natus voluptates totam? Perferendis, inventore assumenda. odio omnis voluptate labore ea doloribus aut, alias architecto natus voluptates totam? Perferendis, inventore assumenda.</p>
                </div>
            </div>

            {/* blogs cards */}
            <div className="md:grid md:grid-cols-2 my-16 mx-10 gap-9">
                <BlogsCard bgColor={'bgColor'} color={'color'} source={'https://images.unsplash.com/photo-1550354728-c6431607aa40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} />
                <BlogsCard source={'https://images.unsplash.com/photo-1532985757448-5335e8b6187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'} />
                <BlogsCard source={'https://images.unsplash.com/photo-1609203267425-84a9e8762c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'} />
                <BlogsCard bgColor={'bgColor'} color={'color'} source={'https://images.unsplash.com/photo-1616093712619-57df44a65caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'} />

            </div>
        </div>
    );
};

export default Blogs;