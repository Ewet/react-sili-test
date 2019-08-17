import React from 'react';
import { connect } from 'react-redux'
class Index extends React.Component {
    // 挂载
    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id)
    }
    // 卸载
    componentWillUnmount() {
  
    }


    render() {
        return (
            <div>outTime pages {this.props.name}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const Indexs = connect(mapStateToProps)(Index);

export default Indexs;