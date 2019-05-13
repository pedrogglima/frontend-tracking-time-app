import React from 'react';
import EditableTimerList from './editableTimerList.js';
import ToggleableTimerForm from './toggleableTimerForm.js';
import Grid from '@material-ui/core/Grid';
import uuidv4 from 'uuid/v4';

class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          style={{ maxWidth: '300px', minWidth: '300px' }}
        >
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
              />
            </Grid>
            <Grid item>
              <ToggleableTimerForm
                isOpen={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default TimersDashboard;
