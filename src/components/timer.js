import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TimerActionButton from './timerActionButton.js';
import { renderElapsedString } from '../js/helpers.js';

class Timer extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  render() {
    const elapsedString = renderElapsedString(
      this.props.elapsed, this.props.runningSince
    );
    return (
      <Card>
        <CardContent>
          <Typography variant='title' color="primary">
            {this.props.title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {this.props.project}
          </Typography>
          <Typography variant='h3' align='center' color="default" gutterBottom>
            {elapsedString}
          </Typography>

          <IconButton
            aria-label="Delete"
            style={{ float: 'right' }}
            onClick={this.handleTrashClick}
          >
            <span className="material-icons">delete</span>
          </IconButton>
          <IconButton
            aria-label="Edit"
            style={{ float: 'right' }}
            onClick={this.props.onEditClick}
          >
            <span className="material-icons">edit</span>
          </IconButton>

          <TimerActionButton
            timerIsRunning={!!this.props.runningSince}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          >
          </TimerActionButton>
        </CardContent>
      </Card>
    );
  }
}

export default Timer;
