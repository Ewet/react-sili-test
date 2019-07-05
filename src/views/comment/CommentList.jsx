import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'
class CommentList extends Component{
    static propTypes = {
        onDeleteComment: PropTypes.func
      }
    static defaultProps = {
        comments: []
    }
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
          this.props.onDeleteComment(index)
        }
      }
    render() {
        return (
            <div 
            className='comment-list'
            >
                {this.props.comments.map((comment, i) => 
                <CommentItem 
                onDeleteComment={this.handleDeleteComment.bind(this)}
                comment={comment} key={i} />)}
            </div>
        )
    }
}
export default CommentList