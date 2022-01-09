import React from 'react'
import '../blogCard.css'
import {FiExternalLink} from 'react-icons/fi'

function BlogCard(props) {
    return (
    <>
    <div className="blogCard" data-aos="flip-up">
        <div className="blogSite">
            <div className="blogSiteName">{props.site}</div>
            <a href={props.link} className="blogLink"><FiExternalLink size={20}/></a>
        </div>
        <div className="blogTitle">{props.title}</div>
    </div>
    </>
    )
}

export default BlogCard
