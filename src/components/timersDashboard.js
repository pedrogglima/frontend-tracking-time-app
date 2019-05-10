import React from 'react';
import EditableTimerList from './editableTimerList.js';
import ToggleableTimerForm from './toggleableTimerForm.js';
import "../semantic/dist/semantic.min.scss"

class TimersDashboard extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
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
