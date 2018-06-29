import React, { Component } from 'react';

class Posts extends Component {
    render() {
        let posts = this.props.posts;
        
        if (this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        return(
            <div className="Posts">
            { this.props.posts.map((post) => {
                    return (
                        <div>
                            {post.title}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Posts;