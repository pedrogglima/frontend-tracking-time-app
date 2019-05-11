import React from 'react';
import TimerForm from './timerForm.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <Card>
          <CardContent>
            +
          </CardContent>
        </Card>
      );
    }
  }
}

export default ToggleableTimerForm;
