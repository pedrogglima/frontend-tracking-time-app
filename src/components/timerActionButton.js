import React from 'react';
import Button from '@material-ui/core/Button';

class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          fullWidth={true}
          onClick={this.props.onStopClick}
        >
          Stop
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          fullWidth={true}
          onClick={this.props.onStartClick}
        >
          Start
        </Button>
      );
    }
  }
}

export default TimerActionButton;
