import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const App = ()=>{
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 5:45pm" 
                blogText="This is good" 
                imageSrc={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 1:50pm" 
                blogText="This is excellent" 
                imageSrc={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 8:00pm" 
                blogText="This is great" 
                imageSrc={faker.image.avatar()}
            />
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector("#root"))

