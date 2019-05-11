import React from 'react';
import EditableTimerList from './editableTimerList.js';
import ToggleableTimerForm from './toggleableTimerForm.js';

class TimersDashboard extends React.Component {
  render() {
    return (
      <div className=''>
        <div className=''>
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
