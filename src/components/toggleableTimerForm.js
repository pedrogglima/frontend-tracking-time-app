import React from 'react';
import TimerForm from './timerForm.js';

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <div className=''>
          <button className=''>
            <i className='' />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
