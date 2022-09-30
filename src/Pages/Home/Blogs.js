import React from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const cardData = [
        {
            title: "How Do We Know Climate Change Is Real?",
            bgColor: "bgColor",
            color: "color",
            source: "https://climate.nasa.gov/internal_resources/2581",
            content: "Earth's climate has changed throughout history. Just in the last 800,000 years, there have been eight cycles of ice ",
            link: "https://climate.nasa.gov/evidence/"
        },
        {
            title: "The Effects of Climate Change",
            bgColor: "bgColor",
            color: "color",
            source: "https://climate.nasa.gov/internal_resources/2558",
            content: "Global climate change is not a future problem. Changes to Earth’s climate driven by increased human emissions of heat-trapping greenhouse",
            link: "https://climate.nasa.gov/effects/"
        },
        {
            title: "Scientific Consensus: Earth's Climate Is Warming",
            bgColor: "bgColor",
            color: "color",
            source: "https://climate.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTloQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aaa8b2e4791992c77113dec2ef3ecf984f82a976/Gavin_2022_compare_obs2021-1-1536x968.png?disposition=attachment",
            content: "It’s important to remember that scientists always focus on the evidence, not on opinions. Scientific evidence continues to show thats ",
            link: "https://climate.nasa.gov/scientific-consensus/"
        },
        {
            title: "Global Warming vs. Climate Change",
            bgColor: "bgColor",
            color: "color",
            source: "https://climate.nasa.gov/system/internal_resources/details/original/2385_temp-graph-012721.jpg",
            content: "Global warming is the long-term heating of Earth’s surface observed since the pre-industrial period (between 1850 and 1900) due to human activities",
            link: "https://climate.nasa.gov/global-warming-vs-climate-change/"
        },
    ]
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className='mb-20'>
            {/* blogs header */}
            <div>
                <h2 className="text-3xl font-mono text-center">Blogs</h2>
                <div className='w-2/3 text-center mx-auto leading-8 mt-6 italic font-serif'>
                    <p>"Taken as a whole, the range of published evidence indicates that the net damage costs of climate change are likely to be significant and to increase over time."
                        - Intergovernmental Panel on Climate Change</p>
                </div>
            </div>

            {/* blogs cards */}
            <div className="md:grid gap-y-4 md:grid-cols-2 my-16 mx-10 gap-9">
                <BlogsCard title={cardData[0].title} bgColor={'bgColor'} link={cardData[1].link} color={'color'} source={cardData[0].source} content={cardData[0].content} />

                <BlogsCard title={cardData[1].title} content={cardData[1].content} link={cardData[1].link} source={cardData[1].source} />

                <BlogsCard title={cardData[2].title} content={cardData[2].content} link={cardData[2].link} source={cardData[2].source} />

                <BlogsCard title={cardData[3].title} content={cardData[3].content} link={cardData[3].link} bgColor={'bgColor'} color={'color'} source={cardData[3].source} />
                {/* {
                    cardData.map(data => (
                        <BlogsCard data={data} />
                    ))
                } */}
            </div>
        </div>
    );
};

export default Blogs;