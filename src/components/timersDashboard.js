import React from 'react';
import EditableTimerList from './editableTimerList.js';
import ToggleableTimerForm from './toggleableTimerForm.js';
import Grid from '@material-ui/core/Grid';

class TimersDashboard extends React.Component {
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
          style={{ maxWidth: '300px', minWidth: '280px' }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={0}
          >
            <Grid item>
              <EditableTimerList />
            </Grid>
            <Grid item>
              <ToggleableTimerForm
                isOpen={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default TimersDashboard;
