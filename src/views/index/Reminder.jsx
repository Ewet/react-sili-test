import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../../redux/actions/reminder';

class Reminder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    addItem() {
        this.props.addReminder(this.state.text)
    }
    writeReminder() {
        const { reminders } = this.props;
        return (
            <ul>
            {
                reminders.map(x => {
                    return (
                        <li key={x.id}>{x.text}</li>
                    )
                })
            }
              
            </ul>
        )
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
                {
                    this.writeReminder()
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reminders: state.reminderState
    }
}


const ReminderHtml = connect(mapStateToProps, {addReminder})(Reminder)

export default ReminderHtml;