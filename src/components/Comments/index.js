import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachItem.id}
        commentDetails={eachItem}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialinitialBackgroundColorClassName,
    }

    this.setState(
      (prevState = {
        commentsList: [...prevState.commentsList, newComment],
        nameInput: '',
        commentInput: '',
      }),
    )
  }

  onClickName = event => {
    this.setState({nameInput: event.target.value})
  }

  onClickComment = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="app-container">
        <h1 className="heading"> Comments</h1>
        <div className="comments-container">
          <div className="comments-input">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="para">Say something about 4.0 Technologies</p>
              <div>
                <input
                  type="text"
                  onChange={this.onClickName}
                  className="name-input"
                  placeholder="Your Name"
                  value={nameInput}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Comment"
                  className="comment-input"
                  rows="6"
                  onChange={this.onClickComment}
                  value={commentInput}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="button"
                  onClick={this.onClickButton}
                >
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="comment-img"
            />
          </div>
        </div>
        <hr className="line" />
        <p className="head">
          <span className="comments-count"> {commentsList.length}</span>
        </p>
        <ul className="comments-list">{this.renderCommentsList()}</ul>
      </div>
    )
  }
}

export default Comments
