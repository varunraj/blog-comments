import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 5:45pm" 
                    blogText="This is good" 
                    imageSrc={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 1:50pm" 
                    blogText="This is excellent" 
                    imageSrc={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 8:00pm" 
                    blogText="This is great" 
                    imageSrc={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector("#root"))

