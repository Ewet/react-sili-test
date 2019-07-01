import React, {Component} from 'react';
class Reminder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    addItem() {
        
    }

    render() {
        return (
            <div className='container'>
                <div className='title'>peminder pro</div>
                <div className='content'>
                    <input 
                        type='text' 
                        placeholder='i have a ...'
                        onChange={(e) => this.setState({text: e.target.value})}
                    />&nbsp;
                    <button onClick={(e) => this.addItem()}> 提交</button>
                </div>
            </div>
        )
    }
}
export default Reminder;