import React, {Component} from 'react';
// 检查数据类型
import PropTypes from 'prop-types'

class CommentInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            content: ''
        }
    };
    componentDidMount () {
        this.textarea.focus()
    }
    componentWillMount () {
        this._loadUsername()
    }

    _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }
    // 所有私有方法都以 _ 开头
    _saveUsername (username) {
        localStorage.setItem('username', username)
      }
    
    handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
    }
    handleInputChange(e) {
        this.setState({
            username: e.target.value
        })
    };
    handleTextareaChange(e) {
        this.setState({
            content: e.target.value
        })
    };
    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
          }
        this.setState({ content: '' })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                            onBlur={this.handleUsernameBlur.bind(this)}
                            value={this.state.username}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleTextareaChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}
                    >
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
export default CommentInput