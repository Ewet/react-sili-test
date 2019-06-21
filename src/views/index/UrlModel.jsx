import React from 'react';
import url from 'url'
import { Redirect } from "react-router-dom";
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: false
        }
    }
    // 挂载
    componentDidMount() {
        let query = url.parse(this.props.location.search, true).query;
        console.log(query);
    }
    // 卸载
    componentWillUnmount() {

    }
    goBack = () => {
        this.setState({
            isSignIn: true
        })
    }
    render() {
        if(this.state.isSignIn) {
            // return <Redirect to={{pathname: '/index'}} />
            return <Redirect to='/' />
        }
        return ( 
            <div className='content'> 
                <h4>UrlModel pages</h4>
                <button onClick={this.goBack}>跳回首页</button>
            </div>
        )
    }
}

export default Index;