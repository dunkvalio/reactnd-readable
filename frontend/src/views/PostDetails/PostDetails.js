import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import EditIcon from 'react-icons/lib/md/edit';
import CommentIcon from 'react-icons/lib/md/comment';
import AddIcon from 'react-icons/lib/md/add';

import { buttonPrimary } from '../../utils/colors';
import { presentVoteScore } from '../../utils/text';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Content from '../../components/Content';
import Title from '../../components/Title';
import List from '../../components/List';
import Comment from '../../components/Comment';

const PostBody = (props) => {
  const { text, author, timestamp, voteScore, onAddComment } = props;

  return (
    <div className="post-details-container">
      <div className="post-body">
        <h2 className="post-body-text">{text}</h2>
      </div>
      <div className="post-details group">
        <div className="post-details-add-comment" onClick={onAddComment}>
          <AddIcon size={20} color={buttonPrimary} />
          <CommentIcon size={20} color={buttonPrimary} />
        </div>
        <h4 className="post-score primary-color">
          {presentVoteScore(voteScore)}
        </h4>
        <h6 className="post-details-text no-margin">
          {moment(new Date(timestamp)).fromNow()}
          <span className="primary-color"> by {author}</span>
        </h6>
      </div>
    </div>
  )
};

PostBody.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number,
  onAddComment: PropTypes.func.isRequired,
};

PostBody.defaultProps = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: '0 points',
  onAddComment: PropTypes.func.isRequired,
};

class PostDetails extends Component {

  state = {
    showCommentForm: false,
  }

  toggleCommentForm = () => {
    this.setState(state => ({
      showCommentForm: !state.showCommentForm,
    }));
  }

  postComment = () => {
    this.props.onPostComment(this.authorInput.value, this.commentInput.value);
    this.toggleCommentForm();
    this.authorInput.value = null;
    this.commentInput.value = null;
  }

  render() {
    const { comments, post, onGoBack } = this.props;
    const { showCommentForm } = this.state;

    return (
      <div>
        <Header>
          <BackButton onClick={onGoBack} />
          <Title small>{post.title}</Title>
          <Link to={{ pathname: '/posts/edit', state: { post } }}>
            <EditIcon size={30} color={buttonPrimary} />
          </Link>
        </Header>
        <Content>
          <PostBody
            text={post.body}
            author={post.author}
            timestamp={post.timestamp}
            voteScore={post.voteScore}
            onAddComment={this.toggleCommentForm}
          />
          {showCommentForm && (
            <div className='form card-container padded'>
              <div className="form-input-container">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className='form-input'
                  ref={input => this.authorInput = input}
                />
              </div>
              <div className="form-input-container">
                <textarea
                  cols='80'
                  rows='1'
                  wrap='soft'
                  placeholder="Post your comment here..."
                  className='form-input input-area'
                  ref={input => this.commentInput = input}
                />
              </div>
              <div className='form-footer'>
                <button onClick={this.postComment} className="form-button-primary">
                  Post Comment
                </button>
              </div>
            </div>
          )}
          <List className="list" data={comments} getKey={item => item.id}>
            {comment => <Comment data={comment} />}
          </List>
        </Content>
      </div>
    );
  }
}

PostDetails.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      parentId: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      voteScore: PropTypes.number.isRequired,
    })
  ),
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
  onGoBack: PropTypes.func.isRequired,
  onPostComment: PropTypes.func.isRequired,
};

PostDetails.defatultProps = {
  comments: [],
  commentInProgress: {},
  post: {},
  onGoBack: () => {},
  onPostComment: () => {},
};

export default PostDetails;
