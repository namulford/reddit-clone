import React, { Component } from 'react';

class Posts extends Component {

    handleUpvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote + 1,
            downvote: post.downvote
        });
    }

    handleDownvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote,
            downvote: post.downvote + 1,
        });
    }

    render() {
        let posts = this.props.posts;

        let _this = this;

        if(!posts) {
            return false;
        }
        
        if (this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        return(
            <div className="Posts">
            { Object.keys(posts).map(key => {
                let post = posts[key];
                    return (
                        <div key={ key }>
                            <div>Title: {post.title}</div>
                            <div>Upvote: {post.upvote}</div>
                            <div>Downvote: {post.downvote}</div>
                            <div>
                                <button
                                    onClick={_this.handleUpvote.bind(this, post, key)}
                                    type='button'
                                >
                                    Upvote
                                </button>
                                <button
                                    onClick={_this.handleDownvote.bind(this, post, key)}
                                    type='button'
                                >
                                    Downvote
                                </button>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Posts;