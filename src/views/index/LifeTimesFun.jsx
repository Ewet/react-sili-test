import React from 'react';
class LifeTimesFun extends React.Component {
    // 组件自身的状态的初始化工作都会放在 constructor 里面去做
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    //一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行
    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);
    }
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
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default LifeTimesFun;