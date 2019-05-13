import React from 'react';
import TimerForm from './timerForm.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <Card>
          <CardContent style={{textAlign:'center'}}>
            <Fab color="primary" aria-label="Add">
              <span className="material-icons">add</span>
            </Fab>
          </CardContent>
        </Card>
      );
    }
  }
}

export default ToggleableTimerForm;
