import React from 'react'

const CommentDetail = (props) => {
    return(
        <div className="comment">
            <a className="avatar">
                <img src={props.imageSrc} />
            </a>
            <div className="content">
                <a className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo} </span>
                </div>
                <div className="text"> {props.blogText} </div>
            </div>
        </div>
    )
}

export default CommentDetail