import React from 'react';
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
            <div>outTime pages</div>
        )
    }
}

export default Index;