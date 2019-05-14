import React from 'react';
import EditableTimerList from './editableTimerList.js';
import ToggleableTimerForm from './toggleableTimerForm.js';
import Grid from '@material-ui/core/Grid';
import { newTimer } from '../js/helpers.js';
import * as Client from '../js/client.js';
import regeneratorRuntime from 'regenerator-runtime'; // polyfill for await/async

class TimersDashboard extends React.Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = async () => {
    try {
      const serverTimers = await Client.getTimers();
      this.setState({ timers: serverTimers });
    } catch (err) {
      console.log(err);
    }
  };

  handleCreateFormSubmit = timer => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = attrs => {
    this.updateTimer(attrs);
  };

  handleTrashClick = timerId => {
    this.deleteTimer(timerId);
  };

  handleStartClick = timerId => {
    this.startTimer(timerId);
  };

  handleStopClick = timerId => {
    this.stopTimer(timerId);
  };

  createTimer = async timer => {
    try {
      const t = newTimer(timer);
      this.setState({
        timers: this.state.timers.concat(t),
      });
      await Client.createTimer(t);
    } catch (err) {
      console.log(err);
    }
  };

  updateTimer = async attrs => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
    await Client.updateTimer(attrs);
  };

  deleteTimer = async timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
    await Client.deleteTimer({ id: timerId });
  };

  startTimer = async timerId => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });

    await Client.startTimer({ id: timerId, start: now.toString() });
  };

  stopTimer = async timerId => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });

    await Client.stopTimer({ id: timerId, stop: now });
  };

  render() {
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item style={{ maxWidth: '300px', minWidth: '300px' }}>
          <Grid
            container
            direction="column"
            alignItems="stretch"
            justify="center"
            spacing={16}
          >
            <Grid item>
              <EditableTimerList
                timers={this.state.timers}
                onFormSubmit={this.handleEditFormSubmit}
                onTrashClick={this.handleTrashClick}
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
              />
            </Grid>
            <Grid item>
              <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default TimersDashboard;
